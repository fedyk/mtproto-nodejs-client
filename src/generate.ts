import fs from 'node:fs'

/**
 * Builder
 */

const apiSchema = JSON.parse(fs.readFileSync("scheme/api.json", "utf8"))
const mtprotoSchema = JSON.parse(fs.readFileSync("scheme/mtproto.json", "utf8"))

const builder: string[] = [];
const builderInterfaceLines: string[] = [];
const typingTypes = createGroupMap()
const typingInterfacesLines: string[] = []
const methodInterfacesLines: string[] = []

const aviableTypesBuilder = new Set([
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
])

const primitiveTypes = new Map([
  ["int", "number"],
  ["long", "string"],
  ["int128", "number"],
  ["int256", "number"],
  ["string", "string"],
  ["bytes", "Uint8Array"],
  ["double", "number"],
  ["Bool", "boolean"],
  ["true", "boolean"],
])

function builderParamsToLines(params: any) {
  const paramsLines: string[] = [];

  params.forEach(function (param: any) {
    let fnName = param.type;
    let args = [`params.${param.name}`];

    // Flags
    if (param.type === '#') {
      const flagsLine = buildFlags(param.name, params);

      paramsLines.push(flagsLine);

      fnName = 'int32';
      args = [param.name];
    }
    else if (param.type.includes('?')) {
      let flagType = param.type.split('?')[1];

      if (flagType === 'true') {
        return;
      }

      if (isVectorType(flagType)) {
        flagType = flagType.substr(7, flagType.length - 8);

        fnName = 'flagVector';
      }
      else {
        fnName = 'flag';
      }

      if (flagType === 'true') {
        flagType = 'Bool';
      }

      if (!aviableTypesBuilder.has(flagType)) {
        flagType = 'predicate';
      }

      args = [`this.${flagType}`, `params.${param.name}`];
    }
    else if (isVectorType(param.type)) {
      let vectorType = param.type.substr(7, param.type.length - 8);

      if (vectorType.charAt(0) === '%') {
        vectorType = vectorType.substr(1);
      }

      if (!aviableTypesBuilder.has(vectorType)) {
        vectorType = 'predicate';
      }

      fnName = 'vector';
      args = [`this.${vectorType}`, `params.${param.name}`];
    }
    else if (['!X'].includes(param.type)) {
      fnName = 'predicate';
    }
    else if (!aviableTypesBuilder.has(param.type)) {
      fnName = 'predicate';
    }

    paramsLines.push(`    this.${fnName}(${args.join(', ')});`);
  });

  return paramsLines;
}

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
        type = `${getTypeName(vectorType)}[]`
      }
    }
    else if ('!X' === type) {
      type = "unknown"
    }
    else if ('X' === type) {
      type = "unknown"
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

    interfaceLines.push(`  ${name}: ${type};`);
  });

  return interfaceLines;
};

const builderMapLines: string[] = [];

mtprotoSchema.constructors.forEach(function (constructor: any) {
  const { id, predicate, params } = constructor;

  const body = [
    `    this.int32(${id});`,
    ...builderParamsToLines(params)
  ].join('\n');

  builderMapLines.push(
    `  'mt_${predicate}': function(params) {\n${body}\n  },`
  );

  builderInterfaceLines.push(
    `  'mt_${predicate}': (this: any, params: any) => void`
  )
})

mtprotoSchema.methods.forEach(function (method: any) {
  const { id, method: name, params } = method;

  const body = [`    this.int32(${id});`, ...builderParamsToLines(params)].join('\n');

  builderMapLines.push(`  'mt_${name}': function(params) {\n${body}\n  },`);

  builderInterfaceLines.push(
    `  'mt_${name}': (this: any, params: any) => void`
  )
})

apiSchema.constructors.forEach(function (constructor: any) {
  const { id, predicate, params, type } = constructor;

  const body = [
    `    this.int32(${id});`,
    ...builderParamsToLines(params)
  ].join('\n');

  builderMapLines.push(`  '${predicate}': function(params) {\n${body}\n  },`);

  builderInterfaceLines.push(
    `  '${predicate}': (this: any, params: any) => void`
  )

  // interfaces
  if (predicate === "vector") {
    return
  }

  const interfaceName = getInterfaceName(predicate)
  const interfaceBody = [
    `export interface ${interfaceName} {`,
    `  _: "${predicate}";`,
    ...paramsToInterfaceLines(params),
    `}\n`
  ]

  typingInterfacesLines.push(interfaceBody.join("\n"))

  if (type) {
    typingTypes.append(getTypeName(type), interfaceName)
  }
});

apiSchema.methods.forEach(function (method: any) {
  const { id, method: name, params } = method;
  let type = method.type

  const body = [`    this.int32(${id});`, ...builderParamsToLines(params)].join('\n');

  builderMapLines.push(`  '${name}': function(params) {\n${body}\n  },`);

  builderInterfaceLines.push(
    `  '${name}': (this: any, params: any) => void`
  )

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
    `  '${name}': {`,
    `    params: {`,
    ...paramsToInterfaceLines(params).map(line => `    ${line}`),
    `    }`,
    `    response: ${type}`,
    `  }`
  ].join("\n"))
});

builder.push(`export interface BuilderMap {`, builderInterfaceLines.join("\n"), "}")

builder.push(`export const builderMap: BuilderMap = {\n${builderMapLines.join('\n')}\n};`);

fs.writeFileSync('src/builder.ts', builder.join('\n'));

const mtprotoTypesLines = new Array<string>()

for(const [typeName, interfaces] of typingTypes) {
  mtprotoTypesLines.push(
    `export type ${typeName} = ${interfaces.join(" | ")};`
  )
}

mtprotoTypesLines.push(...typingInterfacesLines)
mtprotoTypesLines.push(`export interface Methods {`)
mtprotoTypesLines.push(...methodInterfacesLines)
mtprotoTypesLines.push(`}`)

const mtprotoTypesContent = Array.from(typingTypes.entries())
  .map(function ([typeName, interfaces]) {
    return `export type ${typeName} = ${interfaces.join(" | ")};`
  })
  .join("\n") +

  typingInterfacesLines.join("\n") + "\n" +

  `export interface Methods {\n` +

  methodInterfacesLines.join("\n") + "\n" +

  `}\n`;

fs.writeFileSync("src/mtptoto-types.ts", mtprotoTypesLines.join("\n"));


/**
 * Parser
 */

const parser: string[] = [];

const aviableTypes = [
  'int',
  'long',
  'int128',
  'int256',
  'string',
  'bytes',
  'double',
  'mt_message',
  'vector',
  'predicate',
];

const bodyById = new Map([
  [481674261, 'return this.vector(this.predicate, true);'],
  [3162085175, 'return false;'],
  [2574415285, 'return true;'],
  [1072550713, 'return true;'],
  [1450380236, 'return null;'],
  [812830625, 'return this.gzip();'],
]);

function calcFlag(name: string, type: string) {
  const [left, flagType] = type.split('?');
  const [flagsName, flagBit] = left.split('.');

  const condition = `result.${flagsName} & ${2 ** Number(flagBit)}`;

  let fnName = flagType;
  let args: string[] = [];

  if (flagType === 'true') {
    return `result.${name} = !!(${condition});`;
  }
  else if (isVectorType(flagType)) {
    let vectorType = flagType.substr(7, flagType.length - 8);

    if (!aviableTypes.includes(vectorType)) {
      vectorType = 'predicate';
    }

    fnName = 'vector';
    args = [`this.${vectorType}`];
  }
  else if (!aviableTypes.includes(flagType)) {
    fnName = 'predicate';
  }

  return `if (${condition}) result.${name} = this.${fnName}(${args.join(
    ', '
  )});`;
};

const parserMapLines: string[] = [];

function paramsToLines(params: any[]) {
  const paramsLines: string[] = [];

  params.forEach(function (param: any) {
    let fnName = param.type;
    let args: any = [];

    if (param.type === '#') {
      fnName = 'int';
    }
    else if (param.type.includes('?')) {
      const flagLine = calcFlag(param.name, param.type);

      paramsLines.push(flagLine);

      return;
    }
    else if (isVectorType(param.type)) {
      let vectorType = param.type.substr(7, param.type.length - 8);

      const isBare = vectorType.charAt(0) === '%';

      if (isBare) {
        vectorType = 'mt_message';
      }

      if (!aviableTypes.includes(vectorType)) {
        vectorType = 'predicate';
      }

      fnName = 'vector';
      args = [`this.${vectorType}`, isBare];
    }
    else if (!aviableTypes.includes(param.type)) {
      fnName = 'predicate';
    }

    paramsLines.push(
      `result.${param.name} = this.${fnName}(${args.join(', ')});`
    );
  });

  return paramsLines;
};

mtprotoSchema.constructors.forEach(function (constructor: any) {
  const { predicate, params } = constructor;

  const id = constructor.id >>> 0;

  const body = bodyById.has(id)
    ? bodyById.get(id)
    : [
      `const result: any = { _: 'mt_${predicate}' };`,
      ...paramsToLines(params),
      'return result;',
    ].join('\n');

  parserMapLines.push(`  [${id}, function() {\n${body}\n  }],`);
});

apiSchema.constructors.forEach(function (constructor: any) {
  const { predicate, params } = constructor;

  const id = constructor.id >>> 0;

  const body = bodyById.has(id)
    ? bodyById.get(id)
    : [
      `const result: any = { _: '${predicate}' };`,
      ...paramsToLines(params),
      'return result;',
    ].join('\n');

  parserMapLines.push(`  [${id}, function() {\n${body}\n  }],`);
});

parser.push(`interface Parser {
  (this: any): any
}

export const parserMap = new Map<number, Parser>([\n${parserMapLines.join('\n')}\n]);
`);

const fileContent = parser.join('\n');

fs.writeFileSync('src/parser.ts', fileContent);


function buildFlags(name: string, params: string[]) {
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
}

function isVectorType(type: string) {
  return type.toLocaleLowerCase().startsWith('vector')
}

/**
 * @example getInterfaceName("auth.SentCode") -> "$Auth$SendCode"
 */
function getInterfaceName(key: string) {
  return "$" + getTypeName(key)
}

/**
 * @example getTypeName("auth.SendCode") -> "Auth$SendCode"
 */
function getTypeName(key: string) {
  return key.split(".")
    .map(capitalizeFirstLetter)
    .join("$")
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createGroupMap() {
  return new class extends Map<string, string[]> {
    append(key: string, value: string) {
      const group = this.get(key)
  
      if (group) {
        group.push(value)
      }
      else {
        this.set(key, [value])
      }
  
      return this
    }
  }
}