import { Door } from "./Door.js";
export class DoorFactory {
    static createDoor(doorId, sourceZoneId, targetZone, description) {
        return new Door(doorId, sourceZoneId, targetZone, ["Manager", "Guard", "Operator", "Handlarz", "Dozorca"], description);
    }
}
