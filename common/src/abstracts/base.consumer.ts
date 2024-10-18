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

  async listen(callback: (data: T["data"], commit: (id: string) => void) => void) {
    this.consumer = this.client.consumer({
      groupId: this.groupId,
      allowAutoTopicCreation: true,
      readUncommitted: true,
      retry: {
        initialRetryTime: 100,
        maxRetryTime: 1000,
        multiplier: 2,
        retries: 3,
        restartOnFailure: (err) => {
          return Promise.resolve(false);
        }
      }
    });

    await this.consumer.connect();

    await this.consumer.subscribe({
      topic: this.topic,
      fromBeginning: true
    });

    await this.consumer.run({
      eachMessage: async ({ message, partition, topic }) => {
        callback(JSON.parse(message.value?.toString() || "{}"), () => {
          this.consumer.commitOffsets([
            { partition, topic, offset: parseInt(message.offset + 1).toString() }
          ]);
        });
      },
      autoCommit: false
      // autoCommitInterval: 1000,
      // partitionsConsumedConcurrently: 1
    });
  }
}
