import { MyConsumer } from "moove-common/dist/abstracts";
import { type PlaceCreatedEvent, Topics } from "moove-common/dist/events";

export class PlaceCreatedConsumer extends MyConsumer<PlaceCreatedEvent> {
  public readonly topic = Topics.PLACE_CREATED;
  public groupId: string = "moove-trips";
}
