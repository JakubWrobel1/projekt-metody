import { Zone } from "./Zone.js";
import { AccessCard } from "./AccessCard.js";
import { CardType } from "./CardType.js";

export class CardFactory {
    secureZone: Zone;
    operationalZone: Zone;
    transactionZone: Zone;
    externalZone: Zone;

    constructor(secureZone: Zone, operationalZone: Zone, transactionZone: Zone, externalZone: Zone) {
        this.secureZone = secureZone;
        this.operationalZone = operationalZone;
        this.transactionZone = transactionZone;
        this.externalZone = externalZone;
    }

    createManagerCard(cardNumber: number, employeeName: string): AccessCard {
        return new AccessCard(cardNumber, employeeName, [
            this.secureZone, 
            this.operationalZone, 
            this.transactionZone, 
            this.externalZone
        ], CardType.Manager);
    }

    createGuardCard(cardNumber: number, employeeName: string): AccessCard {
        return new AccessCard(cardNumber, employeeName, [
            this.secureZone, 
            this.operationalZone, 
            this.transactionZone,
            this.externalZone

        ], CardType.Guard);
    }

    createOperatorCard(cardNumber: number, employeeName: string): AccessCard {
        return new AccessCard(cardNumber, employeeName, [
            this.operationalZone, 
            this.transactionZone,
            this.externalZone

        ],CardType.Operator);
    }

    createSellerCard(cardNumber: number, employeeName: string): AccessCard {
        return new AccessCard(cardNumber, employeeName, [
            this.transactionZone,
            this.externalZone

        ], CardType.Seller);
    }

    createJanitorCard(cardNumber: number, employeeName: string): AccessCard {
        return new AccessCard(cardNumber, employeeName, [
            this.secureZone, 
            this.operationalZone, 
            this.transactionZone, 
            this.externalZone
        ], CardType.Janitor);
    }

    createCard(type: CardType, cardNumber: number, employeeName: string): AccessCard {
        switch (type) {
            case CardType.Manager:
                return this.createManagerCard(cardNumber, employeeName);
            case CardType.Guard:
                return this.createGuardCard(cardNumber, employeeName);
            case CardType.Janitor:
                return this.createJanitorCard(cardNumber, employeeName);
            case CardType.Seller:
                return this.createSellerCard(cardNumber, employeeName)
            case CardType.Operator:
                return this.createOperatorCard(cardNumber, employeeName);
            default:
                throw new Error("Invalid employee type for card creation");
        }
    }
}
