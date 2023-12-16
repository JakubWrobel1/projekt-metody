import { Zone } from "./Zone.js";
import { AccessCard } from "./AccessCard.js";
import { EmployeeType } from "./EmployeeType.js";

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
        ]);
    }

    createGuardCard(cardNumber: number, employeeName: string): AccessCard {
        return new AccessCard(cardNumber, employeeName, [
            this.secureZone, 
            this.operationalZone, 
            this.transactionZone
        ]);
    }

    createOperatorCard(cardNumber: number, employeeName: string): AccessCard {
        return new AccessCard(cardNumber, employeeName, [
            this.operationalZone, 
            this.transactionZone
        ]);
    }

    createTraderCard(cardNumber: number, employeeName: string): AccessCard {
        return new AccessCard(cardNumber, employeeName, [
            this.transactionZone
        ]);
    }

    createJanitorCard(cardNumber: number, employeeName: string): AccessCard {
        return new AccessCard(cardNumber, employeeName, [
            this.secureZone, 
            this.operationalZone, 
            this.transactionZone, 
            this.externalZone
        ]);
    }

    createCard(type: EmployeeType, cardNumber: number, employeeName: string): AccessCard {
        switch (type) {
            case EmployeeType.Manager:
                return this.createManagerCard(cardNumber, employeeName);
            case EmployeeType.Guard:
                return this.createGuardCard(cardNumber, employeeName);
            case EmployeeType.Janitor:
                return this.createJanitorCard(cardNumber, employeeName);
            case EmployeeType.Seller:
                return this.createOperatorCard(cardNumber, employeeName)
            default:
                throw new Error("Invalid employee type for card creation");
        }
    }
}
