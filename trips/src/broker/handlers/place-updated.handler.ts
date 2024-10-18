import type { PlaceUpdatedEvent } from "moove-common/dist/events";

export function placeUpdatedHandler(data: PlaceUpdatedEvent["data"]) {
  console.log("KAFKAAA_PLACE_UPDATED::", data);
}
