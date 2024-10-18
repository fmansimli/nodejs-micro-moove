import http from "http";
import app from "./app";

import { AppConfig } from "./config";
import { kafka } from "./singletons/kafka";
import { elastic } from "./singletons/elastic";
import { logger } from "./loggers/elastic.logger";

AppConfig.init();

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3001;
const KAFKA_URI = process.env.KAFKA_URI;
const APP_NAME = process.env.APP_NAME;

if (!KAFKA_URI) {
  throw new Error("KAFKA_URI must be defined.");
}

async function bootstrap() {
  try {
    //await kafka.connect(KAFKA_URI, APP_NAME);
    const resp = await elastic.init();
    logger.log("wow, connected to elastic!!!", { data: JSON.stringify(resp) });

    httpServer.listen(PORT, async () => {
      logger.info(`** https://moove.dev/api/logs <${PORT}> (${APP_NAME})`);
    });
  } catch (error) {
    console.log("ERRRRRR", error);
  }
}

bootstrap();
