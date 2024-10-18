import { Kafka } from "kafkajs";

class KafkaWrapper {
  private _client: Kafka;

  get client(): Kafka {
    if (!this._client) {
      throw new Error("Kafka client has not been initialized yet!");
    }
    return this._client;
  }

  async connect(url: string, clientId: string) {
    this._client = new Kafka({
      clientId,
      brokers: [url],
      connectionTimeout: 5000,
      retry: { retries: 12 }
    });

    const admin = this._client.admin();
    await admin.connect();

    return admin.disconnect();
  }
}

export const kafka = new KafkaWrapper();
