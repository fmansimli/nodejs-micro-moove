import type { Kafka } from "kafkajs";

import { PlaceCreatedConsumer } from "./place-created.consumer";
import { placeCreatedHandler } from "../handlers/place-created.handler";

import { PlaceUpdatedConsumer } from "./place-updated.consumer";
import { placeUpdatedHandler } from "../handlers/place-updated.handler";

export const start = async (client: Kafka) => {
  new PlaceCreatedConsumer(client).listen(placeCreatedHandler);
  new PlaceUpdatedConsumer(client).listen(placeUpdatedHandler);
};
