import type { ObjectId } from "mongodb";
import { mongo } from "../singletons/db";

export class Place {
  public _id: ObjectId;
  public name: string;
  public desc: string;

  constructor(attrs: Partial<Place>) {
    Object.assign(this, attrs);
  }

  static exec() {
    return mongo.db.collection("places");
  }
}
