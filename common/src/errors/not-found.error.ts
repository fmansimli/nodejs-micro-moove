import { BaseError, IError } from "./base.error";

export class NotFoundError extends BaseError {
  public httpCode: number = 404;

  serialize(): IError {
    return {
      httpCode: this.httpCode,
      message: this.message
    };
  }
}
