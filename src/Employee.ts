import { CardType } from "./CardType.js";
import { AccessCard } from "./AccessCard.js";
import { CardFactory } from "./CardFactory.js";
import { Zone } from "./Zone.js";

export class Employee {

    id: number;
    name: string;
    type: CardType;
    card: AccessCard;
    currentZone: Zone;
    
    constructor(id: number, name: string, type: CardType, cardFactory: CardFactory, initialZone: Zone) {
        
        this.id = id;
        this.name = name;
        this.type = type;
        this.card = cardFactory.createCard(this.type, this.id, this.name);
        this.currentZone = initialZone;
    }
}