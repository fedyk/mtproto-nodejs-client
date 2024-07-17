import test from "node:test"
import assert from "node:assert"
import { getSRPParams } from "./get-srp-params.js";

test.describe('getSRPParams', function () {
  test.it('returns SRP params', function () {
    const params = getSRPParams({
      g: 12345,
      p: new Uint8Array([1, 2, 3]),
      salt1: new Uint8Array([4, 5, 6]),
      salt2: new Uint8Array([7, 8, 9]),
      gB: new Uint8Array([10, 11, 12]),
      password: "password"
    })

    assert.ok(params.A instanceof Uint8Array)
    assert.ok(params.M1 instanceof Uint8Array)
  })
})
