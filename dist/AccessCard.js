export class AccessCard {
    constructor(cardNumber, employeeName, accessZones) {
        this.cardNumber = cardNumber;
        this.employeeName = employeeName;
        this.accessZones = accessZones;
    }
    canAccess(zone) {
        return this.accessZones.includes(zone);
    }
}
