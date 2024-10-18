import http from "http";
import app from "./app";

import { mongo } from "./singletons/db";
import { kafka } from "./singletons/kafka";

import { Logger } from "./services/logger";
import { AppConfig } from "./config";
import { KafkaUtil } from "./utils/kafka.util";

import { PlaceCreatedConsumer } from "./broker/consumers/place-created.consumer";
import { placeCreatedHandler } from "./broker/handlers/place-created.handler";

import { PlaceUpdatedConsumer } from "./broker/consumers/place-updated.consumer";
import { placeUpdatedHandler } from "./broker/handlers/place-updated.handler";

AppConfig.init();

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3002;
const APP_NAME = process.env.APP_NAME;

const KAFKA_URI = process.env.KAFKA_URI;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI must be defined.");
}

if (!KAFKA_URI) {
  throw new Error("KAFKA_URI must be defined.");
}

async function bootstrap() {
  try {
    await kafka.connect(KAFKA_URI, APP_NAME);
    await mongo.connect(MONGO_URI);

    httpServer.listen(PORT, async () => {
      await KafkaUtil.init(kafka.client);
      await KafkaUtil.listTopics(kafka.client);

      const consumer1 = new PlaceCreatedConsumer(kafka.client);
      const consumer2 = new PlaceUpdatedConsumer(kafka.client);

      consumer1.listen(placeCreatedHandler);
      consumer2.listen(placeUpdatedHandler);

      Logger.log(`** https://moove.dev/api/trips <${PORT}> (${APP_NAME})`);

      process.on("SIGINT", () => {
        consumer1.close();
        consumer2.close();
      });

      process.on("SIGTERM", () => {
        consumer1.close();
        consumer2.close();
      });
    });
  } catch (error) {
    console.log("ERRRRRRR", error);
  }
}

bootstrap();
