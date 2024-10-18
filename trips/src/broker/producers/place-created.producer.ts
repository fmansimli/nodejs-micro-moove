import { Producer } from "moove-common/dist/abstracts";
import { Topics, PlaceCreatedEvent } from "moove-common/dist/events";

export class PlaceCreratedProducer extends Producer<PlaceCreatedEvent> {
  readonly topic = Topics.PLACE_CREATED;
}
