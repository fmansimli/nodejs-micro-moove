import type { RequestHandler } from "express";
import type { PlaceCreatedDto } from "../dtos/place-created.dto";
import { Place } from "../models/place";
import { kafka } from "../singletons/kafka";
import { PlaceCreatedProducer } from "../broker/producers/place-created.producer";

export const create: RequestHandler = async (req, res, next) => {
  const { desc, name } = req.body as PlaceCreatedDto;

  try {
    const resp = await Place.exec().insertOne({ name, desc });
    const place = { _id: String(resp.insertedId), name, desc };

    const result = await new PlaceCreatedProducer(kafka.client).produce(place);

    res.status(201).json({ place, meta: { result } });
  } catch (error) {
    next(error);
  }
};

export const getAll: RequestHandler = async (req, res, next) => {
  try {
    const places = await Place.exec().find().toArray();
    res.status(200).json({ places });
  } catch (error) {
    next(error);
  }
};

export const getById: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({ place: { id: req.params.id } });
  } catch (error) {
    next(error);
  }
};

export const updateById: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({ place: {} });
  } catch (error) {
    next(error);
  }
};

export const deleteById: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({ place: {} });
  } catch (error) {
    next(error);
  }
};
