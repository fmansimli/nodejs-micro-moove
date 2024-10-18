import type { RequestHandler } from "express";

export const create: RequestHandler = async (req, res, next) => {
  try {
    res.status(201).json({ log: req.body });
  } catch (error) {
    next(error);
  }
};

export const getAll: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json({ logs: [] });
  } catch (error) {
    next(error);
  }
};

export const getById: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({ log: { id: req.params.id } });
  } catch (error) {
    next(error);
  }
};

export const updateById: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({ log: { id: req.params.id } });
  } catch (error) {
    next(error);
  }
};

export const deleteById: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({ log: { id: req.params.id } });
  } catch (error) {
    next(error);
  }
};
