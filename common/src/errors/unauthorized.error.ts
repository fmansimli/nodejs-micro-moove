import { BaseError, IError } from "./base.error";

export class UnuthorizedError extends BaseError {
  public httpCode = 401;

  serialize(): IError {
    return {
      message: this.message,
      httpCode: this.httpCode
    };
  }
}
