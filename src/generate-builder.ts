import fs from 'node:fs'

const apiSchema = JSON.parse(fs.readFileSync("scheme/api.json", "utf8"))
const mtprotoSchema = JSON.parse(fs.readFileSync("scheme/mtproto.json", "utf8"))

const lines: string[] = [];
const typingTypes = new Map<string, string[]>
const typingInterfacesLines: string[] = []
const methodsInterfaceNames: string[] = []
const methodInterfacesLines: string[] = []

const aviableTypes = [
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
];

const primitiveTypes = new Map([
  ["int", "number"],
  ["long", "number"],
  ["int128", "number"],
  ["int256", "number"],
  ["string", "string"],
  ["bytes", "Uint8Array"],
  ["double", "number"],
])

function typeIsVector(type: string) {
  return type.substring(0, 6).toLocaleLowerCase() === 'vector';
}

function calcFlags(name: string, params: string[]) {
  const bitMap: string[] = [];

  params.forEach((param: any) => {
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
};

function paramsToLines(params: any) {
  const paramsLines: string[] = [];

  params.forEach(function (param: any) {
    let fnName = param.type;
    let args = [`params.${param.name}`];

    // Flags
    if (param.type === '#') {
      const flagsLine = calcFlags(param.name, params);

      paramsLines.push(flagsLine);

      fnName = 'int32';
      args = [param.name];
    } else if (param.type.includes('?')) {
      let flagType = param.type.split('?')[1];

      if (flagType === 'true') {
        return;
      }

      if (typeIsVector(flagType)) {
        flagType = flagType.substr(7, flagType.length - 8);

        fnName = 'flagVector';
      } else {
        fnName = 'flag';
      }

      if (flagType === 'true') {
        flagType = 'Bool';
      }

      if (!aviableTypes.includes(flagType)) {
        flagType = 'predicate';
      }

      args = [`this.${flagType}`, `params.${param.name}`];
    } else if (typeIsVector(param.type)) {
      let vectorType = param.type.substr(7, param.type.length - 8);

      if (vectorType.charAt(0) === '%') {
        vectorType = vectorType.substr(1);
      }

      if (!aviableTypes.includes(vectorType)) {
        vectorType = 'predicate';
      }

      fnName = 'vector';
      args = [`this.${vectorType}`, `params.${param.name}`];
    } else if (['!X'].includes(param.type)) {
      fnName = 'predicate';
    } else if (!aviableTypes.includes(param.type)) {
      fnName = 'predicate';
    }

    paramsLines.push(`    this.${fnName}(${args.join(', ')});`);
  });

  return paramsLines;
};

function paramsToInterfaceLines(params: any[]) {
  const interfaceLines: string[] = [];

  params.forEach(function (param: any) {
    let name = String(param.name)
    let type = String(param.type)


    if (type.startsWith("flags")) {
      type = type.replace(/flags\d*\.\d*/, "")

      if (type[0] === "?") {
        name += "?"
        type = type.substring(1)
      }
    }

    // Flags
    if (type === '#') {
      name += "?"
      type = "number"
    }

    if (type.startsWith("Vector")) {
      const vectorType = type.substring(7, type.length - 1);
      const primitiveType = primitiveTypes.get(vectorType)

      if (primitiveType) {
        type = `${primitiveType}[]`
      }
      else {
        type = `${getTypeName(vectorType)}`
      }
    }
    else if ('!X' === type) {
      type = "unknown"
      // fnName = 'predicate';
    }
    else if ('X' === type) {
      type = "unknown"
      // fnName = 'predicate';
    }
    else {
      const primitiveType = primitiveTypes.get(type)

      if (primitiveType) {
        type = `${primitiveType}`
      }
      else {
        type = `${getTypeName(type)}`
      }
    }

    // else if (!aviableTypes.includes(type)) {
    // type = getTypeName(param.type)
    // }

    interfaceLines.push(`  ${name}: ${type};`);
  });

  return interfaceLines;
};

const builderMapLines: string[] = [];

mtprotoSchema.constructors.forEach(function (constructor: any) {
  const { id, predicate, params } = constructor;

  const body = [`    this.int32(${id});`, ...paramsToLines(params)].join('\n');

  builderMapLines.push(
    `  'mt_${predicate}': function(params) {\n${body}\n  },`
  );
});

mtprotoSchema.methods.forEach(function (method: any) {
  const { id, method: name, params } = method;

  const body = [`    this.int32(${id});`, ...paramsToLines(params)].join('\n');

  builderMapLines.push(`  'mt_${name}': function(params) {\n${body}\n  },`);
});

apiSchema.constructors.forEach(function (constructor: any) {
  const { id, predicate, params, type } = constructor;

  const body = [`    this.int32(${id});`, ...paramsToLines(params)].join('\n');

  builderMapLines.push(`  '${predicate}': function(params) {\n${body}\n  },`);

  // v1
  if (predicate === "vector") {
    return
  }

  const interfaceName = getInterfaceName(predicate)

  typingInterfacesLines.push([
    `export interface ${interfaceName} {`,
    `  _: "${predicate}";`,
    ...paramsToInterfaceLines(params),
    `}\n`
  ].join("\n"))

  if (type) {
    const typeName = getTypeName(type)
    let types = typingTypes.get(typeName)

    if (types) {
      types.push(interfaceName)
    }
    else {
      typingTypes.set(typeName, [interfaceName])
    }
  }
});

apiSchema.methods.forEach(function (method: any) {
  const { id, method: name, params } = method;
  let type = method.type

  const body = [`    this.int32(${id});`, ...paramsToLines(params)].join('\n');

  builderMapLines.push(`  '${name}': function(params) {\n${body}\n  },`);

  // v1
  let interfaceName = getMethodInterfaceName(name)

  if (type.startsWith("Vector")) {
    type = type.substring(7, type.length - 1)

    const primitiveType = primitiveTypes.get(type)

    if (primitiveType) {
      type = primitiveType
    }
    else {
      type = getTypeName(type)
    }

    type += "[]"
  }

  const primitiveType = primitiveTypes.get(type)

  if (primitiveType) {
    type = primitiveType
  }
  else if (type === "X") {
    type = "unknown"
  }
  else {
    type = getTypeName(type)
  }

  methodInterfacesLines.push([
    `export interface ${interfaceName} {`,
    `  method: "${name}";`,
    `  params: {`,
    ...paramsToInterfaceLines(params).map(line => `  ${line}`),
    `  }`,
    `  response: ${type}`,
    `}\n`
  ].join("\n"))

  methodsInterfaceNames.push(interfaceName)
});

lines.push(`export interface Builder {
  (this: any, params: any): void
}`);

lines.push(`export const builderMap: Record<string, Builder> = {\n${builderMapLines.join('\n')}\n};`);

const builderFileContent = lines.join('\n');

fs.writeFileSync('src/builder.ts', builderFileContent);

const mtprotoTypesContent = Array.from(typingTypes.entries())
  .map(function ([typeName, interfaces]) {
    return `export type ${typeName} = ${interfaces.join(" | ")};`
  })
  .join("\n") +

  typingInterfacesLines.join("\n") +

  `export type Methods = ${methodsInterfaceNames.join(" |\n  ")}\n\n` +

  methodInterfacesLines.join("\n");

fs.writeFileSync("src/mtptoto-types.ts", mtprotoTypesContent);

function getMethodInterfaceName(key: string) {
  return key.split(".")
    .map(capitalizeFirstLetter)
    .join("$")
}

function getInterfaceName(key: string) {
  return "$" + key.split(".")
    .map(capitalizeFirstLetter)
    .join("$")
}

function getTypeName(key: string) {
  return key.split(".")
    .map(capitalizeFirstLetter)
    .join("$")
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
