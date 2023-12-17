import { AccessCard } from "./AccessCard.js";
import { EmployeeType } from "./EmployeeType.js";
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
        ]);
    }
    createGuardCard(cardNumber, employeeName) {
        return new AccessCard(cardNumber, employeeName, [
            this.secureZone,
            this.operationalZone,
            this.transactionZone,
            this.externalZone
        ]);
    }
    createOperatorCard(cardNumber, employeeName) {
        return new AccessCard(cardNumber, employeeName, [
            this.operationalZone,
            this.transactionZone,
            this.externalZone
        ]);
    }
    createTraderCard(cardNumber, employeeName) {
        return new AccessCard(cardNumber, employeeName, [
            this.transactionZone,
            this.externalZone
        ]);
    }
    createJanitorCard(cardNumber, employeeName) {
        return new AccessCard(cardNumber, employeeName, [
            this.secureZone,
            this.operationalZone,
            this.transactionZone,
            this.externalZone
        ]);
    }
    createCard(type, cardNumber, employeeName) {
        switch (type) {
            case EmployeeType.Manager:
                return this.createManagerCard(cardNumber, employeeName);
            case EmployeeType.Guard:
                return this.createGuardCard(cardNumber, employeeName);
            case EmployeeType.Janitor:
                return this.createJanitorCard(cardNumber, employeeName);
            case EmployeeType.Seller:
                return this.createOperatorCard(cardNumber, employeeName);
            case EmployeeType.Operator:
                return this.createOperatorCard(cardNumber, employeeName);
            default:
                throw new Error("Invalid employee type for card creation");
        }
    }
}
