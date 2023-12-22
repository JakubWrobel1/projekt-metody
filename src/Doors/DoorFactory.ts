import { Door } from "./Door.js";
import { Zone } from "../Zones/Zone.js";

export class DoorFactory {
  static createDoor(
    doorId: number,
    sourceZoneId: number,
    targetZone: Zone,
    description: string
  ): Door {
    return new Door(
      doorId,
      sourceZoneId,
      targetZone,
      ["Manager", "Guard", "Operator", "Handlarz", "Dozorca"],
      description
    );
  }
}
