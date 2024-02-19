import test from "node:test"
import assert from "node:assert/strict"
import { Transport } from "./transport.js";
import { DC } from "./types.js";
import { execPath } from "node:process";

const dc: DC = {
  id: 1,
  ip: "149.154.175.10",
  port: 80,
  test: true,
}

test.describe("Transport", { timeout: 1000 }, function () {
  test.it("should open and close connection", function (ctx, done) {
    const transport = new Transport(dc)

    transport.on("open", function () {
      transport.destroy()
    })
    
    transport.on("close", function () {
      done()
    })
  })

  test.it("should try connect until destroyed", function (ctx, done) {
    const transport = new Transport({
      id: -1,
      ip: "127.0.0.1",
      port: 100,
      test: true
    })

    const onerr = ctx.mock.fn()

    transport.on("error", onerr)
    transport.on("close", function() {
      if (onerr.mock.callCount() < 3) {
        return // skip few reconnects
      }

      const socketError = {
        type: "socket",
        message: "connect ECONNREFUSED 127.0.0.1:100"
      }

      assert.deepEqual(onerr.mock.callCount(), 3)
      assert.deepEqual(onerr.mock.calls[0].arguments, [socketError])
      assert.deepEqual(onerr.mock.calls[1].arguments, [socketError])
      assert.deepEqual(onerr.mock.calls[2].arguments, [socketError])

      transport.destroy()
      done()
    })
  })
})
