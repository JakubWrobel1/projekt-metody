import { externalZone } from "./defaultZone.js";
export class Employee {
    constructor(id, fullName, Card, currentZone = externalZone) {
        this.id = id;
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
    getEmployeeId() {
        return this.id;
    }
    getZoneName() {
        return this.currentZone;
    }
}
