import { Door } from "./Door.js";
import { Zone } from "./Zones/Zone.js";
import { ManagerCard } from "./Cards/ManagerCard.js";
import { GuardCard } from "./Cards/GuardCard.js";
import { OperatorCard } from "./Cards/OperatorCard.js";
import { SellerCard } from "./Cards/Seller.js";
import { JanitorCard } from "./Cards/Janitor.js";

export class DoorFactory {
    static createDoor(doorId: number, sourceZoneId: number, targetZone: Zone, description: string): Door {
        return new Door(
            doorId,
            sourceZoneId,
            targetZone,
            [ManagerCard, GuardCard, OperatorCard, SellerCard, JanitorCard],
            description
        );
    }
}