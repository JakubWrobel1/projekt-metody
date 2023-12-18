import { CardType } from "./CardType.js";
import { Zone } from "./Zone.js";

export class AccessCard {
    cardNumber: number;
    employeeName: string;
    type: CardType;
    accessZones: Zone[];

    constructor(cardNumber: number, employeeName: string, accessZones: Zone[], type: CardType) {
        this.cardNumber = cardNumber;
        this.employeeName = employeeName;
        this.accessZones = accessZones;
        this.type = type;
    }

    canAccess(zone: Zone): boolean {
        return this.accessZones.includes(zone);
    }
}