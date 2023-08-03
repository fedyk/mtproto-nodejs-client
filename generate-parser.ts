import fs from 'node:fs'

const apiSchema = JSON.parse(fs.readFileSync("./scheme/api.json", "utf8"))
const mtprotoSchema = JSON.parse(fs.readFileSync("./scheme/mtproto.json", "utf8"))

const lines: string[] = [];

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

const typeIsVector = function (type: string) {
  return type.substring(0, 6).toLocaleLowerCase() === 'vector';
}

function calcFlag(name: string, type: string) {
  const [left, flagType] = type.split('?');
  const [flagsName, flagBit] = left.split('.');

  const condition = `result.${flagsName} & ${2 ** Number(flagBit)}`;

  let fnName = flagType;
  let args: string[] = [];

  if (flagType === 'true') {
    return `result.${name} = !!(${condition});`;
  } else if (typeIsVector(flagType)) {
    let vectorType = flagType.substr(7, flagType.length - 8);

    if (!aviableTypes.includes(vectorType)) {
      vectorType = 'predicate';
    }

    fnName = 'vector';
    args = [`this.${vectorType}`];
  } else if (!aviableTypes.includes(flagType)) {
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
    } else if (param.type.includes('?')) {
      const flagLine = calcFlag(param.name, param.type);

      paramsLines.push(flagLine);

      return;
    } else if (typeIsVector(param.type)) {
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
    } else if (!aviableTypes.includes(param.type)) {
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



lines.push(`interface Parser {
  (this: any): any
}

export const parserMap = new Map<number, Parser>([\n${parserMapLines.join('\n')}\n]);
`);

const fileContent = lines.join('\n');

fs.writeFileSync('parser.ts', fileContent);
