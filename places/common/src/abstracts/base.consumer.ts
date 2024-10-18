import type { Kafka, Consumer } from "kafkajs";
import { Topics } from "../events/topics.enum";

interface Event {
  topic: Topics;
  data: any;
}

export abstract class MyConsumer<T extends Event> {
  private client: Kafka;
  private consumer: Consumer;

  abstract topic: T["topic"];
  abstract groupId: string;

  constructor(client: Kafka) {
    this.client = client;
  }

  close() {
    this.consumer.disconnect();
  }

  async listen(callback: (data: T["data"]) => void) {
    this.consumer = this.client.consumer({
      groupId: this.groupId,
      allowAutoTopicCreation: true,
      readUncommitted: true
    });

    await this.consumer.connect();

    await this.consumer.subscribe({
      topic: this.topic,
      fromBeginning: true
    });

    await this.consumer.run({
      eachMessage: async payload => {
        callback(JSON.parse(payload.message.value?.toString() || "{}"));
      }
    });
  }
}
