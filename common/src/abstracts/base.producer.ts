import type { Kafka, Producer } from "kafkajs";
import type { Topics } from "../events/topics.enum";

interface Event {
  topic: Topics;
  data: Object;
}

export abstract class MyProducer<T extends Event> {
  private producer: Producer;
  private client: Kafka;
  abstract topic: Event["topic"];

  constructor(client: Kafka) {
    this.client = client;
  }

  close() {
    this.producer.disconnect();
  }

  async produce(data: T["data"]) {
    this.producer = this.client.producer({
      allowAutoTopicCreation: true,
      idempotent: false
    });
    await this.producer.connect();

    const result = await this.producer.send({
      messages: [{ value: JSON.stringify(data) }],
      topic: this.topic
      //acks: 1
    });
    return result;
  }
}
