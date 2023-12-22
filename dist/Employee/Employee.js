import { externalZone } from "../Zones/allZones.js";
export class Employee {
    constructor(id, galleryId, fullName, Card, currentZone = externalZone) {
        this.id = id;
        this.galleryId = galleryId;
        this.fullName = fullName;
        this.Card = Card;
        this.currentZone = currentZone;
    }
    updateZone(newZone) {
        this.currentZone = newZone;
    }
    getCard() {
        return this.Card;
    }
    getFullName() {
        return this.fullName;
    }
    getEmployeeId() {
        return this.id;
    }
    getZoneName() {
        return this.currentZone;
    }
}
