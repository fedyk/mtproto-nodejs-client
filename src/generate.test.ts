import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { builderMap } from './builder.js';
import { Deserializer } from './deserializer.js';
import { Serializer } from './serializer.js';
import type { Methods } from './mtptoto-types.js';

// These fail the build if generation reintroduces boxed primitives or numeric keys.
type Equal<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;
type Assert<T extends true> = T;
type ContactIDsAreNumbers = Assert<Equal<Methods['contacts.getContactIDs']['response'], number[]>>;
type DeletedPhotoIDsAreStrings = Assert<Equal<Methods['photos.deletePhotos']['response'], string[]>>;
type PublicKeyIsBytes = Assert<Equal<Methods['phone.joinGroupCall']['params']['public_key'], Uint8Array | undefined>>;
type FlagsAreNumbers = Assert<Equal<Methods['phone.joinGroupCall']['params']['flags'], number | undefined>>;

test('generation reproduces the checked-in outputs from the current schemas', () => {
  const root = fileURLToPath(new URL('../', import.meta.url));
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'mtproto-generate-'));
  try {
    fs.cpSync(path.join(root, 'scheme'), path.join(directory, 'scheme'), { recursive: true });
    fs.mkdirSync(path.join(directory, 'src'));
    const result = spawnSync(process.execPath, [fileURLToPath(new URL('./generate.js', import.meta.url))], {
      cwd: directory,
      encoding: 'utf8',
    });
    assert.equal(result.status, 0, result.stderr || result.error?.message);
    for (const file of ['builder.ts', 'parser.ts', 'mtptoto-types.ts']) {
      assert.equal(
        fs.readFileSync(path.join(directory, 'src', file), 'utf8'),
        fs.readFileSync(path.join(root, 'src', file), 'utf8'),
        `${file} is out of date; run npm run generate`,
      );
    }
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

function wireBytes(words: number[]): Uint8Array {
  const buffer = new ArrayBuffer(words.length * 4);
  const view = new DataView(buffer);
  words.forEach((word, index) => view.setUint32(index * 4, word, true));
  return new Uint8Array(buffer);
}

for (const count of [0, 1, 2]) {
  test(`future_salts encodes and decodes ${count} bare elements`, () => {
    const salts = Array.from({ length: count }, (_, index) => ({
      _: 'mt_future_salt', valid_since: 20 + index, valid_until: 30 + index, salt: String(42 + index),
    }));
    const expected = wireBytes([
      0xae500895, 1, 0, 10, count,
      ...salts.flatMap(salt => [salt.valid_since, salt.valid_until, Number(salt.salt), 0]),
    ]);
    const params = { req_msg_id: '1', now: 10, salts };
    const serializer = new Serializer(builderMap.mt_future_salts, params);
    assert.deepEqual(serializer.getBytes(), expected);
    assert.equal(serializer.offset, expected.length);

    const deserializer = new Deserializer(expected.buffer);
    assert.deepEqual(deserializer.predicate(), { _: 'mt_future_salts', ...params });
    assert.equal(deserializer.offset, expected.length);
  });
}

test('message containers use the MTProto bare Message constructor', () => {
  const body = { _: 'mt_pong', msg_id: '2', ping_id: '3' };
  const message = { _: 'mt_message', msg_id: '1', seqno: 4, bytes: 20, body };
  const expected = wireBytes([
    0x73f1f8dc, 1, // container ID and bare vector count
    1, 0, 4, 20, // bare Message fields
    0x347773c5, 2, 0, 3, 0, // boxed Pong body
  ]);
  const serializer = new Serializer(builderMap.mt_msg_container, { messages: [message] });
  assert.deepEqual(serializer.getBytes(), expected);
  assert.equal(serializer.offset, expected.length);
  const deserializer = new Deserializer(expected.buffer);
  assert.deepEqual(deserializer.predicate(), { _: 'mt_msg_container', messages: [message] });
  assert.equal(deserializer.offset, expected.length);
});

test('boxed vectors of primitive values retain their constructor tag', () => {
  const expected = wireBytes([0x62d6b459, 0x1cb5c415, 2, 1, 0, 2, 0]);
  const serializer = new Serializer(builderMap.mt_msgs_ack, { msg_ids: ['1', '2'] });
  assert.deepEqual(serializer.getBytes(), expected);
  const deserializer = new Deserializer(expected.buffer);
  assert.deepEqual(deserializer.predicate(), { _: 'mt_msgs_ack', msg_ids: ['1', '2'] });
  assert.equal(deserializer.offset, expected.length);
});
