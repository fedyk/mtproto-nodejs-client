import fs from 'node:fs';
const apiSchema = JSON.parse(fs.readFileSync("scheme/api.json", "utf8"));
const mtprotoSchema = JSON.parse(fs.readFileSync("scheme/mtproto.json", "utf8"));
const lines = [];
const builderInterfaceLines = [];
const typingTypes = new Map;
const typingInterfacesLines = [];
const methodInterfacesLines = [];
const aviableTypes = new Set([
    'int',
    'long',
    'int128',
    'int256',
    'string',
    'bytes',
    'double',
    'vector',
    'predicate',
    'Bool',
]);
const primitiveTypes = new Map([
    ["int", "number"],
    ["long", "number"],
    ["int128", "number"],
    ["int256", "number"],
    ["string", "string"],
    ["bytes", "Uint8Array"],
    ["double", "number"],
    ["Bool", "boolean"],
    ["true", "boolean"],
]);
function typeIsVector(type) {
    return type.substring(0, 6).toLocaleLowerCase() === 'vector';
}
function calcFlags(name, params) {
    const bitMap = [];
    params.forEach((param) => {
        if (param.type.includes('?')) {
            const [left] = param.type.split('?');
            const [flagsName, count] = left.split('.');
            if (flagsName !== name) {
                return;
            }
            bitMap.push(`(this.has(params.${param.name}) << ${count})`);
        }
    });
    if (!bitMap.length) {
        bitMap.push("0");
    }
    const flagsLine = `    const ${name} = ${bitMap.join(' | ')};`;
    return flagsLine;
}
;
function paramsToLines(params) {
    const paramsLines = [];
    params.forEach(function (param) {
        let fnName = param.type;
        let args = [`params.${param.name}`];
        // Flags
        if (param.type === '#') {
            const flagsLine = calcFlags(param.name, params);
            paramsLines.push(flagsLine);
            fnName = 'int32';
            args = [param.name];
        }
        else if (param.type.includes('?')) {
            let flagType = param.type.split('?')[1];
            if (flagType === 'true') {
                return;
            }
            if (typeIsVector(flagType)) {
                flagType = flagType.substr(7, flagType.length - 8);
                fnName = 'flagVector';
            }
            else {
                fnName = 'flag';
            }
            if (flagType === 'true') {
                flagType = 'Bool';
            }
            if (!aviableTypes.has(flagType)) {
                flagType = 'predicate';
            }
            args = [`this.${flagType}`, `params.${param.name}`];
        }
        else if (typeIsVector(param.type)) {
            let vectorType = param.type.substr(7, param.type.length - 8);
            if (vectorType.charAt(0) === '%') {
                vectorType = vectorType.substr(1);
            }
            if (!aviableTypes.has(vectorType)) {
                vectorType = 'predicate';
            }
            fnName = 'vector';
            args = [`this.${vectorType}`, `params.${param.name}`];
        }
        else if (['!X'].includes(param.type)) {
            fnName = 'predicate';
        }
        else if (!aviableTypes.has(param.type)) {
            fnName = 'predicate';
        }
        paramsLines.push(`    this.${fnName}(${args.join(', ')});`);
    });
    return paramsLines;
}
;
function paramsToInterfaceLines(params) {
    const interfaceLines = [];
    params.forEach(function (param) {
        let name = String(param.name);
        let type = String(param.type);
        if (type.startsWith("flags")) {
            type = type.replace(/flags\d*\.\d*/, "");
            if (type[0] === "?") {
                name += "?";
                type = type.substring(1);
            }
        }
        // Flags
        if (type === '#') {
            name += "?";
            type = "number";
        }
        if (type.startsWith("Vector")) {
            const vectorType = type.substring(7, type.length - 1);
            const primitiveType = primitiveTypes.get(vectorType);
            if (primitiveType) {
                type = `${primitiveType}[]`;
            }
            else {
                type = `${getTypeName(vectorType)}[]`;
            }
        }
        else if ('!X' === type) {
            type = "unknown";
        }
        else if ('X' === type) {
            type = "unknown";
        }
        else {
            const primitiveType = primitiveTypes.get(type);
            if (primitiveType) {
                type = `${primitiveType}`;
            }
            else {
                type = `${getTypeName(type)}`;
            }
        }
        interfaceLines.push(`  ${name}: ${type};`);
    });
    return interfaceLines;
}
;
const builderMapLines = [];
mtprotoSchema.constructors.forEach(function (constructor) {
    const { id, predicate, params } = constructor;
    const body = [`    this.int32(${id});`, ...paramsToLines(params)].join('\n');
    builderMapLines.push(`  'mt_${predicate}': function(params) {\n${body}\n  },`);
    builderInterfaceLines.push(`  'mt_${predicate}': (this: any, params: any) => void`);
});
mtprotoSchema.methods.forEach(function (method) {
    const { id, method: name, params } = method;
    const body = [`    this.int32(${id});`, ...paramsToLines(params)].join('\n');
    builderMapLines.push(`  'mt_${name}': function(params) {\n${body}\n  },`);
    builderInterfaceLines.push(`  'mt_${name}': (this: any, params: any) => void`);
});
apiSchema.constructors.forEach(function (constructor) {
    const { id, predicate, params, type } = constructor;
    const body = [`    this.int32(${id});`, ...paramsToLines(params)].join('\n');
    builderMapLines.push(`  '${predicate}': function(params) {\n${body}\n  },`);
    builderInterfaceLines.push(`  '${predicate}': (this: any, params: any) => void`);
    // interfaces
    if (predicate === "vector") {
        return;
    }
    const interfaceName = getInterfaceName(predicate);
    const interfaceBody = [
        `export interface ${interfaceName} {`,
        `  _: "${predicate}";`,
        ...paramsToInterfaceLines(params),
        `}\n`
    ];
    typingInterfacesLines.push(interfaceBody.join("\n"));
    if (type) {
        const typeName = getTypeName(type);
        let types = typingTypes.get(typeName);
        if (types) {
            types.push(interfaceName);
        }
        else {
            typingTypes.set(typeName, [interfaceName]);
        }
    }
});
apiSchema.methods.forEach(function (method) {
    const { id, method: name, params } = method;
    let type = method.type;
    const body = [`    this.int32(${id});`, ...paramsToLines(params)].join('\n');
    builderMapLines.push(`  '${name}': function(params) {\n${body}\n  },`);
    builderInterfaceLines.push(`  '${name}': (this: any, params: any) => void`);
    if (type.startsWith("Vector")) {
        type = type.substring(7, type.length - 1);
        const primitiveType = primitiveTypes.get(type);
        if (primitiveType) {
            type = primitiveType;
        }
        else {
            type = getTypeName(type);
        }
        type += "[]";
    }
    const primitiveType = primitiveTypes.get(type);
    if (primitiveType) {
        type = primitiveType;
    }
    else if (type === "X") {
        type = "unknown";
    }
    else {
        type = getTypeName(type);
    }
    methodInterfacesLines.push([
        `  '${name}': {`,
        `    params: {`,
        ...paramsToInterfaceLines(params).map(line => `    ${line}`),
        `    }`,
        `    response: ${type}`,
        `  }`
    ].join("\n"));
});
lines.push(`export interface BuilderMap {`, builderInterfaceLines.join("\n"), "}");
lines.push(`export const builderMap: BuilderMap = {\n${builderMapLines.join('\n')}\n};`);
fs.writeFileSync('src/builder.ts', lines.join('\n'));
const mtprotoTypesLines = new Array();
mtprotoTypesLines.push(...Array.from(typingTypes.entries())
    .map(function ([typeName, interfaces]) {
    return `export type ${typeName} = ${interfaces.join(" | ")};`;
}));
mtprotoTypesLines.push(...typingInterfacesLines);
mtprotoTypesLines.push(`export interface Methods {`);
mtprotoTypesLines.push(...methodInterfacesLines);
mtprotoTypesLines.push(`}`);
const mtprotoTypesContent = Array.from(typingTypes.entries())
    .map(function ([typeName, interfaces]) {
    return `export type ${typeName} = ${interfaces.join(" | ")};`;
})
    .join("\n") +
    typingInterfacesLines.join("\n") + "\n" +
    `export interface Methods {\n` +
    methodInterfacesLines.join("\n") + "\n" +
    `}\n`;
fs.writeFileSync("src/mtptoto-types.ts", mtprotoTypesLines.join("\n"));
/**
 * @example getInterfaceName("auth.SentCode") -> "$Auth$SendCode"
 */
function getInterfaceName(key) {
    return "$" + key.split(".")
        .map(capitalizeFirstLetter)
        .join("$");
}
/**
 * @example getTypeName("auth.SendCode") -> "Auth$SendCode"
 */
function getTypeName(key) {
    return key.split(".")
        .map(capitalizeFirstLetter)
        .join("$");
}
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
