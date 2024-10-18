import type { Topics } from "./topics.enum";

export interface PlaceCreatedEvent {
  topic: Topics.PLACE_CREATED;
  data: {
    _id: string;
    name: string;
    desc: string;
  };
}

export interface PlaceUpdatedEvent {
  topic: Topics.PLACE_UPDATED;
  data: {
    _id: string;
    name: string;
    desc: string;
  };
}
