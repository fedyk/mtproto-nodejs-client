export type Data = Record<string, unknown>

export class RPCError extends Error {
  status: number
  data?: Data

  constructor(message: string, status: number, options?: ErrorOptions, data?: Data) {
    super(message, options)
    this.status = status
    this.data = data
  }
}
