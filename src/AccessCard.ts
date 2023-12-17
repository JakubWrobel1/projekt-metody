import { Zone } from "./Zone.js";

export class AccessCard {
    cardNumber: number;
    employeeName: string;
    accessZones: Zone[];

    constructor(cardNumber: number, employeeName: string, accessZones: Zone[]) {
        this.cardNumber = cardNumber;
        this.employeeName = employeeName;
        this.accessZones = accessZones;
    }

    canAccess(zone: Zone): boolean {
        return this.accessZones.includes(zone);
    }
}