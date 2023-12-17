export class Employee {
    constructor(id, name, type, cardFactory, initialZone) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.card = cardFactory.createCard(this.type, this.id, this.name);
        this.currentZone = initialZone;
    }
}
