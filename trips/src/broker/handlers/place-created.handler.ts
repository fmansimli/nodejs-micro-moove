import type { PlaceCreatedEvent } from "moove-common/dist/events";

export function placeCreatedHandler(data: PlaceCreatedEvent["data"]) {
  console.log("KAFKAAA_PLACE_CREATED::", data);
}
