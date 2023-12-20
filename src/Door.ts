import { Employee } from "./Employee/Employee.js";
import { Zone } from "./Zones/Zone.js";
import { JanitorCard } from "./Cards/Janitor.js";

export class Door {
    doorId: number;
    sourceZoneId: number;
    targetZone: Zone;
    accessCards: Function[];
    doorDescription: string;
    constructor(
      doorId: number,
      sourceZoneId: number,
      targetZone: Zone,
      accessCards: Function[],
      doorDescription: string,
      
    ) {
      this.doorId = doorId;
      this.sourceZoneId = sourceZoneId;
      this.targetZone = targetZone;
      this.accessCards = accessCards;
      this.doorDescription = doorDescription;
    }
  
    canEmployeeAccess(
      employee: Employee,
      employees: Employee[],
      targetZone: Zone
    ): boolean {
      if (employee.Card instanceof JanitorCard) {
        return (
          employees.some(
            (emp) =>
              emp.currentZone.id === targetZone.id &&
              !(emp.Card instanceof JanitorCard)
          ) &&
          !employees.some(
            (emp) =>
              emp.currentZone.id === targetZone.id &&
              emp.Card instanceof JanitorCard &&
              emp.id !== employee.id
          )
        );
      }
      return this.accessCards.some(
        (cardType) => employee.Card instanceof cardType
      );
    }
    canEmployeeUseDoor(employee: Employee): boolean {
      return employee.currentZone.id === this.sourceZoneId;
    }
  }