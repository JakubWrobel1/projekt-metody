export class AccessCard {
    constructor(cardNumber, employeeName, accessZones, type) {
        this.cardNumber = cardNumber;
        this.employeeName = employeeName;
        this.accessZones = accessZones;
        this.type = type;
    }
    canAccess(zone) {
        return this.accessZones.includes(zone);
    }
}
