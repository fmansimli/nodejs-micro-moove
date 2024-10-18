import http from "http";
import app from "./app";

import { Logger } from "./services/logger";
import { AppConfig } from "./config";
import { mongo } from "./singletons/db";
import { kafka } from "./singletons/kafka";

AppConfig.init();

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;
const KAFKA_URI = process.env.KAFKA_URI;
const APP_NAME = process.env.APP_NAME;

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
      Logger.log(`** https://moove.dev/api/places <${PORT}> (${APP_NAME})`);
    });
  } catch (error) {
    console.log("ERRRRRR", error);
  }
}

bootstrap();
