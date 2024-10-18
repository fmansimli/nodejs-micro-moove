import { BaseError, IError } from "./base.error";

export class ForbiddenError extends BaseError {
  public httpCode = 403;

  serialize(): IError {
    return {
      message: this.message,
      httpCode: this.httpCode
    };
  }
}
