class ClientError extends Error {
  public statusCode: number;

  constructor(message: string, status: number = 400) {
    super(message);
    this.statusCode = status;
  }
}

export default ClientError;
