import { JanitorCard } from "./Cards/Janitor.js";
export class Door {
    constructor(doorId, sourceZoneId, targetZone, accessCards, doorDescription) {
        this.doorId = doorId;
        this.sourceZoneId = sourceZoneId;
        this.targetZone = targetZone;
        this.accessCards = accessCards;
        this.doorDescription = doorDescription;
    }
    canEmployeeAccess(employee, employees, targetZone) {
        if (employee.Card instanceof JanitorCard) {
            return (employees.some((emp) => emp.currentZone.id === targetZone.id &&
                !(emp.Card instanceof JanitorCard)) &&
                !employees.some((emp) => emp.currentZone.id === targetZone.id &&
                    emp.Card instanceof JanitorCard &&
                    emp.id !== employee.id));
        }
        return this.accessCards.some((cardType) => employee.Card instanceof cardType);
    }
    canEmployeeUseDoor(employee) {
        return employee.currentZone.id === this.sourceZoneId;
    }
}
