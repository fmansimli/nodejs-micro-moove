import { MyConsumer } from "moove-common/dist/abstracts";
import { PlaceUpdatedEvent, Topics } from "moove-common/dist/events";

export class PlaceUpdatedConsumer extends MyConsumer<PlaceUpdatedEvent> {
  public readonly topic = Topics.PLACE_UPDATED;
  public groupId: string = "moove-trips";
}
