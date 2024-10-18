import { MyProducer } from "moove-common/dist/abstracts";
import { Topics, PlaceCreatedEvent } from "moove-common/dist/events";

export class PlaceCreatedProducer extends MyProducer<PlaceCreatedEvent> {
  readonly topic = Topics.PLACE_CREATED;
}
