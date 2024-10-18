import { BaseError, IError } from "./base.error";

export class ValidationError extends BaseError {
  public httpCode = 400;
  public message: string;

  constructor(private errors: any[]) {
    super("Validation Error");

    this.message = "Validation Error";
    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  serialize(): IError {
    return {
      httpCode: this.httpCode,
      message: this.message,
      errors: this.errors.map(error => {
        return {
          field: error.property,
          constraints: error.constraints
        };
      })
    };
  }
}
