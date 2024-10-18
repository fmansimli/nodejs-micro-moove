import type { RequestHandler, ErrorRequestHandler } from "express";
import { BaseError } from "moove-common/dist/errors";

export const catch404: RequestHandler = (req, res, next) => {
  res.status(404).json({ message: "route not found." });
};

export const catch500: ErrorRequestHandler = (err, req, res, next) => {
  try {
    if (err instanceof BaseError) {
      return res.status(err.httpCode).json(err.serialize());
    }
    res.status(500).json({ message: err?.message || "" });
  } catch (error) {
    res.status(500).json({ message: "unknown error." });
  }
};
