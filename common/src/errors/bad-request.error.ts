import { BaseError, IError } from "./base.error";

export class BadRequest extends BaseError {
  public httpCode = 400;

  serialize(): IError {
    return {
      message: this.message,
      httpCode: this.httpCode
    };
  }
}
