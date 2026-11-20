import fs from 'node:fs';

interface Parameter {
  name: string;
  type: string;
}

interface Combinator {
  id: string;
  params: Parameter[];
  type: string;
}

interface Constructor extends Combinator {
  predicate: string;
}

interface Method extends Combinator {
  method: string;
}

interface Schema {
  constructors: Constructor[];
  methods: Method[];
}

type TLType =
  | { kind: 'flags' }
  | { kind: 'optional'; flags: string; bit: number; value: TLType }
  | { kind: 'vector'; bare: boolean; element: TLType }
  | { kind: 'named'; name: string; bare: boolean };

const primitiveTypes = new Map([
<<<<<<< HEAD
  ['int', 'number'],
  ['long', 'string'],
  ['int128', 'Uint8Array'],
  ['int256', 'Uint8Array'],
  ['string', 'string'],
  ['bytes', 'Uint8Array'],
  ['double', 'number'],
  ['Bool', 'boolean'],
  ['true', 'boolean'],
]);

const builderPrimitiveTypes = new Set([
  'int', 'long', 'int128', 'int256', 'string', 'bytes', 'double', 'Bool',
]);
const parserPrimitiveTypes = new Set([
  'int', 'long', 'int128', 'int256', 'string', 'bytes', 'double',
]);

// These constructors decode to runtime values instead of tagged objects.
const specialParserBodies = new Map([
=======
  ["int", "number"],
  ["long", "string"],
  ["int128", "Uint8Array"],
  ["int256", "Uint8Array"],
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

function paramsToInterfaceLines(params: any[], prefix = "") {
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

    if (type.toLowerCase().startsWith("vector")) {
      const vectorType = type.substring(7, type.length - 1);
      const primitiveType = primitiveTypes.get(vectorType)
      const isBare = vectorType.charAt(0) === '%';

      if (primitiveType) {
        type = `${primitiveType}[]`
      }
      else if (isBare) {
        type = `${prefix}${vectorType.substring(1)}[]`
      }
      else if (vectorType === "future_salt") {
        type = "mt_future_salt[]"
      }
      else {
        type = `${getTypeName(vectorType, prefix)}[]`
      }
    }
    else if ('!X' === type) {
      type = "unknown"
    }
    else if ('X' === type) {
      type = "unknown"
    }
    else if (type === 'Object') {
      type = 'unknown';
    }
    else {
      const primitiveType = primitiveTypes.get(type)

      if (primitiveType) {
        type = `${primitiveType}`
      }
      else {
        type = `${getTypeName(type, prefix)}`
      }
    }

    interfaceLines.push(`  ${name}: ${type};`);
  });

  return interfaceLines;
};

const builderMapLines: string[] = [];

mtprotoSchema.constructors.forEach(function (constructor: any) {
  const { id, predicate, params, type } = constructor;

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

  if (predicate !== "vector") {
    const interfaceName = `mt_${predicate}`

    typingInterfacesLines.push(`export interface ${interfaceName
      } {\n  _: "mt_${predicate}"\n${paramsToInterfaceLines(params, "mt_").join("\n")
      }\n}\n`)

    if (type) {
      typingTypes.append(`mt_${type}`, interfaceName)
      typingTypes.append("DecryptedMessage", interfaceName)
    }
  }
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

for (const [typeName, interfaces] of typingTypes) {
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
  'mt_future_salt',
  'vector',
  'predicate',
];

const bodyById = new Map([
>>>>>>> main
  [481674261, 'return this.vector(this.predicate, true);'],
  [3162085175, 'return false;'],
  [2574415285, 'return true;'],
  [1072550713, 'return true;'],
  [1450380236, 'return null;'],
  [812830625, 'return this.gzip();'],
]);

function readSchema(path: string): Schema {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

function parseTLType(type: string): TLType {
  if (type === '#') {
    return { kind: 'flags' };
  }

  const optional = /^(\w+)\.(\d+)\?(.+)$/.exec(type);
  if (optional) {
    return {
      kind: 'optional',
      flags: optional[1],
      bit: Number(optional[2]),
      value: parseTLType(optional[3]),
    };
  }

  const vector = /^(Vector|vector)<(.+)>$/.exec(type);
  if (vector) {
    return { kind: 'vector', bare: vector[1] === 'vector', element: parseTLType(vector[2]) };
  }

  return { kind: 'named', name: type.startsWith('%') ? type.slice(1) : type, bare: type.startsWith('%') };
}

function toTypeScriptType(type: TLType): string {
  switch (type.kind) {
    case 'flags':
      return 'number';
    case 'optional':
      return toTypeScriptType(type.value);
    case 'vector':
      return `${toTypeScriptType(type.element)}[]`;
    case 'named':
      if (type.name === 'X' || type.name === '!X') {
        return 'unknown';
      }
      return primitiveTypes.get(type.name) ?? getTypeName(type.name);
  }
}

function getTypeName(name: string): string {
  return name.split('.').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('$');
}

function parameterInterfaceLines(params: Parameter[]): string[] {
  return params.map(param => {
    const type = parseTLType(param.type);
    const optional = type.kind === 'optional' || type.kind === 'flags' ? '?' : '';
    return `  ${param.name}${optional}: ${toTypeScriptType(type)};`;
  });
}

// A constructor name (future_salt) is bare; %Type requires one unambiguous constructor.
// Resolve within the source schema so MTProto Message cannot collide with API Message.
function bareConstructor(type: TLType, schema: Schema): Constructor | undefined {
  if (type.kind !== 'named' || primitiveTypes.has(type.name)) {
    return undefined;
  }
  if (!type.bare) {
    return schema.constructors.find(constructor => constructor.predicate === type.name);
  }
  const constructors = schema.constructors.filter(constructor => constructor.type === type.name);
  if (constructors.length !== 1) {
    throw new Error(`Bare type %${type.name} requires exactly one constructor`);
  }
  return constructors[0];
}

function buildFlags(name: string, params: Parameter[]): string {
  const bits: string[] = [];
  for (const param of params) {
    const type = parseTLType(param.type);
    if (type.kind === 'optional' && type.flags === name) {
      bits.push(`(this.has(params.${param.name}) << ${type.bit})`);
    }
  }
  return `    const ${name} = ${bits.length ? bits.join(' | ') : '0'};`;
}

function builderCallback(type: TLType, schema: Schema): string {
  const constructor = bareConstructor(type, schema);
  if (constructor) {
    return `function(this: any, params: any) {\n${builderParameterLines(constructor.params, schema).join('\n')}\n    }`;
  }
  if (type.kind === 'vector') {
    return `function(this: any, value: any) { ${builderStatement(type, 'value', schema)} }`;
  }
  const method = type.kind === 'named' && builderPrimitiveTypes.has(type.name) ? type.name : 'predicate';
  return `this.${method}`;
}

function builderStatement(type: TLType, value: string, schema: Schema): string {
  if (type.kind === 'vector') {
    const callback = builderCallback(type.element, schema);
    if (type.bare) {
      // Counter and Serializer share int32; a bare vector starts directly with its count.
      return `this.int32(${value}.length);\n    for (const item of ${value}) { (${callback}).call(this, item); }`;
    }
    return `this.vector(${callback}, ${value});`;
  }
  const callback = builderCallback(type, schema);
  return callback.startsWith('this.')
    ? `${callback}(${value});`
    : `(${callback}).call(this, ${value});`;
}

function builderParameterLines(params: Parameter[], schema: Schema): string[] {
  return params.flatMap(param => {
    const type = parseTLType(param.type);
    const value = `params.${param.name}`;
    if (type.kind === 'flags') {
      return [buildFlags(param.name, params), `    this.int32(${param.name});`];
    }
    if (type.kind === 'optional') {
      if (type.value.kind === 'named' && type.value.name === 'true') {
        return [];
      }
      if (type.value.kind === 'vector' && !type.value.bare) {
        return [`    this.flagVector(${builderCallback(type.value.element, schema)}, ${value});`];
      }
      return [`    this.flag(${builderCallback(type.value, schema)}, ${value});`];
    }
    return [`    ${builderStatement(type, value, schema)}`];
  });
}

<<<<<<< HEAD
function generateBuilder(apiSchema: Schema, mtprotoSchema: Schema): string {
  const interfaces: string[] = [];
  const entries: string[] = [];
  for (const [schema, prefix] of [[mtprotoSchema, 'mt_'], [apiSchema, '']] as const) {
    for (const combinator of [...schema.constructors, ...schema.methods]) {
      const name = prefix + ('predicate' in combinator ? combinator.predicate : combinator.method);
      const body = [`    this.int32(${combinator.id});`, ...builderParameterLines(combinator.params, schema)].join('\n');
      interfaces.push(`  '${name}': (this: any, params: any) => void`);
      entries.push(`  '${name}': function(params) {\n${body}\n  },`);
    }
  }
  return ['export interface BuilderMap {', interfaces.join('\n'), '}',
    `export const builderMap: BuilderMap = {\n${entries.join('\n')}\n};`].join('\n');
}

function parserCallback(type: TLType, schema: Schema): string {
  const constructor = bareConstructor(type, schema);
  if (constructor) {
    return `parserMap.get(${Number(constructor.id) >>> 0})!`;
  }
  if (type.kind === 'vector') {
    return `function(this: any) { return ${parserExpression(type, schema)}; }`;
  }
  const method = type.kind === 'named' && parserPrimitiveTypes.has(type.name) ? type.name : 'predicate';
  return `this.${method}`;
}

function parserExpression(type: TLType, schema: Schema): string {
  if (type.kind === 'flags') {
    return 'this.int()';
  }
  if (type.kind === 'vector') {
    return `this.vector(${parserCallback(type.element, schema)}, ${type.bare})`;
  }
  const callback = parserCallback(type, schema);
  return callback.startsWith('this.') ? `${callback}()` : `${callback}.call(this)`;
}

function parserParameterLines(params: Parameter[], schema: Schema): string[] {
  return params.map(param => {
    const type = parseTLType(param.type);
    if (type.kind === 'optional') {
      const condition = `result.${type.flags} & ${2 ** type.bit}`;
      if (type.value.kind === 'named' && type.value.name === 'true') {
        return `result.${param.name} = !!(${condition});`;
      }
      return `if (${condition}) result.${param.name} = ${parserExpression(type.value, schema)};`;
    }
    return `result.${param.name} = ${parserExpression(type, schema)};`;
  });
}

function generateParser(apiSchema: Schema, mtprotoSchema: Schema): string {
  const entries: string[] = [];
  for (const [schema, prefix] of [[mtprotoSchema, 'mt_'], [apiSchema, '']] as const) {
    for (const constructor of schema.constructors) {
      const id = Number(constructor.id) >>> 0;
      const body = specialParserBodies.get(id) ?? [
        `const result: any = { _: '${prefix}${constructor.predicate}' };`,
        ...parserParameterLines(constructor.params, schema),
        'return result;',
      ].join('\n');
      entries.push(`  [${id}, function() {\n${body}\n  }],`);
    }
  }
  return `interface Parser {\n  (this: any): any\n}\n\nexport const parserMap = new Map<number, Parser>([\n${entries.join('\n')}\n]);\n`;
}

function generateTypes(schema: Schema): string {
  const groups = new Map<string, string[]>();
  const interfaces: string[] = [];
  for (const constructor of schema.constructors) {
    if (constructor.predicate === 'vector') {
      continue;
    }
    const interfaceName = '$' + getTypeName(constructor.predicate);
    interfaces.push([
      `export interface ${interfaceName} {`,
      `  _: "${constructor.predicate}";`,
      ...parameterInterfaceLines(constructor.params),
      '}\n',
    ].join('\n'));
    const typeName = getTypeName(constructor.type);
    const group = groups.get(typeName) ?? [];
    group.push(interfaceName);
    groups.set(typeName, group);
  }
  const methods = schema.methods.map(method => [
    `  '${method.method}': {`,
    '    params: {',
    ...parameterInterfaceLines(method.params).map(line => `    ${line}`),
    '    }',
    `    response: ${toTypeScriptType(parseTLType(method.type))}`,
    '  }',
  ].join('\n'));
  return [
    ...Array.from(groups, ([name, members]) => `export type ${name} = ${members.join(' | ')};`),
    ...interfaces,
    'export interface Methods {',
    ...methods,
    '}',
  ].join('\n');
}

const apiSchema = readSchema('scheme/api.json');
const mtprotoSchema = readSchema('scheme/mtproto.json');
// Build all outputs before writing so generation errors leave existing files intact.
const outputs = [
  ['src/builder.ts', generateBuilder(apiSchema, mtprotoSchema)],
  ['src/parser.ts', generateParser(apiSchema, mtprotoSchema)],
  ['src/mtptoto-types.ts', generateTypes(apiSchema)],
] as const;
for (const [path, content] of outputs) {
  fs.writeFileSync(path, content);
=======
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
function getTypeName(key: string, prefix = "") {
  return prefix + key.split(".")
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
>>>>>>> main
}
