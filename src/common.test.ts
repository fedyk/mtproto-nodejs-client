import test from "node:test"
import assert from "node:assert"
import bigInt from "big-integer"
import { bigIntToBytes, bytesIsEqual, bytesToHex, concatBytes, getRandomInt, hexToBytesRaw, xorBytes } from "./common.js";

test.describe('bytesIsEqual', function () {
  test.it('return false if the length is different', function () {
    const firstBytes = new Uint8Array([]);
    const secondBytes = new Uint8Array([255]);

    assert.equal(bytesIsEqual(firstBytes, secondBytes), false)
  });

  test.it("return false if the bytes don't equal", function () {
    const firstBytes = new Uint8Array([127]);
    const secondBytes = new Uint8Array([255]);

    assert.equal(bytesIsEqual(firstBytes, secondBytes), false);
  });

  test.it('return true if the bytes is equal', function () {
    const firstBytes = new Uint8Array([255]);
    const secondBytes = new Uint8Array([255]);

    assert.equal(bytesIsEqual(firstBytes, secondBytes), true);
  });
});

test.describe('bigIntToBytes', function () {
  const result = bigIntToBytes(bigInt(0xffffffff));
  const expectedResult = new Uint8Array([255, 255, 255, 255]);

  test.it('return Uint8Array', function () {
    assert.ok(expectedResult instanceof Uint8Array);
  });

  test.it('return correct length', function () {
    assert.equal(result.length, expectedResult.length);
  });

  test.it('return correct result', function () {
    result.forEach(function (value, index) {
      assert.equal(value, expectedResult[index])
    })
  });
});

test.describe('hexToBytesRaw', function () {
  const expectedResult = [0, 0, 0, 0, 255, 255, 255, 255];
  const result = hexToBytesRaw('ffffffff', expectedResult.length);

  test.it('return Array', function () {
    assert.equal(Array.isArray(result), true);
  });

  test.it('return correct length', function () {
    assert.equal(result.length, expectedResult.length);
  });

  test.it('return correct result', function () {
    result.forEach(function(value, index) {
      assert.equal(value, expectedResult[index])
    })
  });
});

test.describe('xorBytes', function () {
  const firstBytes = new Uint8Array([15, 138, 218, 0]);
  const secondBytes = new Uint8Array([202, 210, 23, 76]);

  const expectedLength = 4;
  const expectedResult = new Uint8Array([197, 88, 205, 76]);

  const result = xorBytes(firstBytes, secondBytes);

  test.it('return Uint8Array', function () {
    assert.ok(result instanceof Uint8Array);
  });

  test.it('return correct length', function () {
    assert.equal(result.length, expectedLength);
  });

  test.it('return correct result', function () {
    result.forEach(function (value, index) {
      assert.equal(value, expectedResult[index])
    });
  });
});

test.describe('concatBytes', function () {
  const expectedResult = new Uint8Array([1, 2, 3, 4]);
  const result = concatBytes([1], [2], [3], [4]);

  test.it('return Uint8Array', function () {
    assert.ok(result instanceof Uint8Array);
  });

  test.it('return correct length', function () {
    assert.equal(result.length, expectedResult.length);
  });

  test.it('return correct result', function () {
    result.forEach(function (value, index) {
      assert.equal(value, expectedResult[index])
    });
  });
});

test.describe('bytesToHex', function () {
  const bytes = [0, 14, 127, 255];
  const result = bytesToHex(bytes);
  const expectedResult = '000e7fff';

  test.it('return string', function () {
    assert.equal(typeof result, 'string');
  });

  test.it('return correct length', function () {
    assert.equal(result.length, bytes.length * 2);
  });

  test.it('return correct result', function () {
    assert.equal(result, expectedResult);
  });
});

test.describe('getRandomInt', function () {
  const max = 1024;
  const result = getRandomInt(max);

  test.it('result does not exceed the maximum value', function () {
    assert.ok(result <= max);
  });
});
