import type { ObjectId } from "mongodb";
import { mongo } from "../singletons/db";

export class Trip {
  public _id: ObjectId;
  public title: string;
  public desc: string;

  constructor(attrs: Partial<Trip>) {
    Object.assign(this, attrs);
  }

  static exec() {
    return mongo.db.collection("trips");
  }
}
