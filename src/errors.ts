export class RPCError extends Error {
  code: number

  constructor(message: string, code: number, options?: ErrorOptions) {
    super(message, options)
    this.code = code
  }
}
