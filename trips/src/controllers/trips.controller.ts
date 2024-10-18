import type { RequestHandler } from "express";
import type { TripCreatedDto } from "../dtos";
import { Trip } from "../models/trip";

export const create: RequestHandler = async (req, res, next) => {
  const { desc, title } = req.body as TripCreatedDto;

  console.log("BODY::", req.body);

  try {
    const trip = new Trip({ desc, title });
    const result = await Trip.exec().insertOne(trip);

    res.status(201).json({ trip: { _id: result.insertedId, title, desc } });
  } catch (error) {
    next(error);
  }
};

export const getAll: RequestHandler = async (req, res, next) => {
  try {
    const trips = await Trip.exec().find().toArray();
    res.status(200).json({ trips });
  } catch (error) {
    next(error);
  }
};

export const getById: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({ trip: { id: req.params.id } });
  } catch (error) {
    next(error);
  }
};

export const updateById: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({ trip: {} });
  } catch (error) {
    next(error);
  }
};

export const deleteById: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({ trip: {} });
  } catch (error) {
    next(error);
  }
};
