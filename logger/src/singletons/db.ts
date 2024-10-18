import { MongoClient } from "mongodb";

class AppMongo {
  private client: MongoClient;

  get db() {
    if (!this.client) {
      throw new Error("mongo client has not been intialized yet.");
    }

    return this.client.db();
  }

  async connect(url: string) {
    this.client = new MongoClient(url);
    return this.client.connect();
  }
}

export const mongo = new AppMongo();
