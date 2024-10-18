import { validate } from "class-validator";
import { plainToInstance, type ClassConstructor } from "class-transformer";
import type { Request, Response, NextFunction } from "express";
import { ValidationError } from "../../common/dist/errors";

export const validateReq = (dto: ClassConstructor<any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const values = plainToInstance(dto, req.body);

      const errors = await validate(values, {
        skipNullProperties: false,
        skipUndefinedProperties: false,
        whitelist: true
      });

      if (errors.length > 0) {
        throw new ValidationError(errors);
      }

      req.body = values;

      next();
    } catch (error) {
      next(error);
    }
  };
};
