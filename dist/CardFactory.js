import { AccessCard } from "./AccessCard.js";
import { CardType } from "./CardType.js";
export class CardFactory {
    constructor(secureZone, operationalZone, transactionZone, externalZone) {
        this.secureZone = secureZone;
        this.operationalZone = operationalZone;
        this.transactionZone = transactionZone;
        this.externalZone = externalZone;
    }
    createManagerCard(cardNumber, employeeName) {
        return new AccessCard(cardNumber, employeeName, [
            this.secureZone,
            this.operationalZone,
            this.transactionZone,
            this.externalZone
        ], CardType.Manager);
    }
    createGuardCard(cardNumber, employeeName) {
        return new AccessCard(cardNumber, employeeName, [
            this.secureZone,
            this.operationalZone,
            this.transactionZone,
            this.externalZone
        ], CardType.Guard);
    }
    createOperatorCard(cardNumber, employeeName) {
        return new AccessCard(cardNumber, employeeName, [
            this.operationalZone,
            this.transactionZone,
            this.externalZone
        ], CardType.Operator);
    }
    createSellerCard(cardNumber, employeeName) {
        return new AccessCard(cardNumber, employeeName, [
            this.transactionZone,
            this.externalZone
        ], CardType.Seller);
    }
    createJanitorCard(cardNumber, employeeName) {
        return new AccessCard(cardNumber, employeeName, [
            this.secureZone,
            this.operationalZone,
            this.transactionZone,
            this.externalZone
        ], CardType.Janitor);
    }
    createCard(type, cardNumber, employeeName) {
        switch (type) {
            case CardType.Manager:
                return this.createManagerCard(cardNumber, employeeName);
            case CardType.Guard:
                return this.createGuardCard(cardNumber, employeeName);
            case CardType.Janitor:
                return this.createJanitorCard(cardNumber, employeeName);
            case CardType.Seller:
                return this.createSellerCard(cardNumber, employeeName);
            case CardType.Operator:
                return this.createOperatorCard(cardNumber, employeeName);
            default:
                throw new Error("Invalid employee type for card creation");
        }
    }
}
