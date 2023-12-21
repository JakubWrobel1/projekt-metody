import { Door } from "./Door.js";
import { ManagerCard } from "./Cards/ManagerCard.js";
import { GuardCard } from "./Cards/GuardCard.js";
import { OperatorCard } from "./Cards/OperatorCard.js";
import { SellerCard } from "./Cards/Seller.js";
import { JanitorCard } from "./Cards/Janitor.js";
export class DoorFactory {
    static createDoor(doorId, sourceZoneId, targetZone, description) {
        return new Door(doorId, sourceZoneId, targetZone, [ManagerCard, GuardCard, OperatorCard, SellerCard, JanitorCard], description);
    }
}
