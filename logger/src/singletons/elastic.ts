import { Client } from "@elastic/elasticsearch";

class ElasticClient {
  private instance: Client;

  constructor() {
    this.instance = new Client({
      node: process.env.ELASTICSEARCH_URL
    });
  }

  get client() {
    if (!this.instance) {
      throw new Error("Elastic client has not been initialized yet");
    }
    return this.instance;
  }

  async init() {
    return this.instance.indices.create({ index: "logs_index" });
  }
}

export const elastic = new ElasticClient();
