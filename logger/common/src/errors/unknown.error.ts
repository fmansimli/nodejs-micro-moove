import { BaseError, IError } from "./base.error";

export class UnknownError extends BaseError {
  public httpCode = 500;

  serialize(): IError {
    return {
      message: this.message,
      httpCode: this.httpCode
    };
  }
}
