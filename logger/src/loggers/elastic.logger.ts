import winston from "winston";
import { ecsFormat } from "@elastic/ecs-winston-format";

export const logger = winston.createLogger({
  level: "info",
  format: ecsFormat({ apmIntegration: false }),
  transports: [
    //new winston.transports.Console(),
    new winston.transports.Http({
      host: process.env.LOGSTASH_HTTP_HOST,
      port: Number(process.env.LOGSTASH_HTTP_PORT),
      path: "/"
    })
  ]
});
