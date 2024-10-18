export abstract class BaseError extends Error {
  abstract httpCode: number;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BaseError.prototype);
  }

  abstract serialize(): IError;
}

export interface IError {
  message: String;
  httpCode: number;
  errors?: Array<{
    message?: string;
    field?: string;
    value?: string | number | boolean;
    constraints?: { [key: string]: string };
  }>;
}
