export class Employee {
    constructor(id, name, type, cardFactory) {
        this.id = id;
        this.name = name;
        this.type = type;
        // The method 'createCard' should be defined in CardFactory
        this.card = cardFactory.createCard(this.type, this.id, this.name);
    }
    assignCard(card) {
        this.card = card;
    }
}
