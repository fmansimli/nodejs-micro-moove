import { Kafka } from "kafkajs";

export class KafkaUtil {
  static async listTopics(client: Kafka) {
    const admin = client.admin();
    await admin.connect();
    const topics = await admin.listTopics();

    console.log(topics);
  }

  static async init(client: Kafka) {
    try {
      const admin = client.admin();
      await admin.connect();

      await admin.createTopics({
        topics: [
          { topic: "place-created", numPartitions: 1 },
          { topic: "place-updated", numPartitions: 1 }
        ]
      });
    } catch (error) {
      return;
    }
  }
}
