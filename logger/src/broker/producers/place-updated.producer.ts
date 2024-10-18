import { MyProducer } from "moove-common/dist/abstracts";
import { PlaceUpdatedEvent, Topics } from "moove-common/dist/events";

export class PlaceUpdatedProducer extends MyProducer<PlaceUpdatedEvent> {
  public topic = Topics.PLACE_UPDATED;
}
