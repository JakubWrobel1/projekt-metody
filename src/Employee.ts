import { EmployeeType } from "./EmployeeType.js";
import { AccessCard } from "./AccessCard.js";
import { CardFactory } from "./CardFactory.js";

export class Employee {

    

    id: number;
    name: string;
    type: EmployeeType;
    card: AccessCard;

    constructor(id: number, name: string, type: EmployeeType, cardFactory: CardFactory) {
        
        this.id = id;
        this.name = name;
        this.type = type;
         // The method 'createCard' should be defined in CardFactory
        this.card = cardFactory.createCard(this.type, this.id, this.name);
    }

    assignCard(card: AccessCard) {
        this.card = card;
    }
    // Dodatkowe metody...
}