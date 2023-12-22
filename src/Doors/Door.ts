import { Employee } from "../Employee/Employee.js";
import { Zone } from "../Zones/Zone.js";
import { CityGallery } from "../CityGallery.js";
import { Subject } from "./ISubject.js";
import { Observer } from "./IObserver.js";

export class Door implements Subject {
  doorId: number;
  sourceZoneId: number;
  targetZone: Zone;
  accessCardTypes: string[];
  doorDescription: string;
  cityGallery: CityGallery | null = null;
  constructor(
    doorId: number,
    sourceZoneId: number,
    targetZone: Zone,
    accessCardTypes: string[],
    doorDescription: string
  ) {
    this.doorId = doorId;
    this.sourceZoneId = sourceZoneId;
    this.targetZone = targetZone;
    this.accessCardTypes = accessCardTypes;
    this.doorDescription = doorDescription;
  }
  setCityGallery(cityGallery: CityGallery) {
    this.cityGallery = cityGallery;
  }
  canEmployeeAccess(
    employee: Employee,
    employees: Employee[],
    targetZone: Zone
  ): boolean {
    if (!this.cityGallery) {
      console.error("Brak przypisanej CityGallery do drzwi.");
      return false;
    }
    if (employee.getCard().galleryId !== this.cityGallery.id) {
      return false; // Pracownik nie ma dostępu, jeśli id galerii się nie zgadza
    }
    if (employee.Card.type === "Dozorca") {
      return employees.some(
        (emp) =>
          emp.currentZone.id === targetZone.id && emp.Card.type !== "Dozorca"
      ); // Uproszczona logika dla dozorców
    }
    return this.accessCardTypes.includes(employee.Card.type);
  }
  canEmployeeUseDoor(employee: Employee): boolean {
    return employee.currentZone.id === this.sourceZoneId;
  }

  private observers: Observer[] = [];
  private isOpen: boolean = false;
  private lastEmployee: Employee | null = null;

  public getIsOpen(): boolean {
    return this.isOpen;
  }

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  openDoorFor(employee: Employee): void {
    this.lastEmployee = employee;
    this.notify(); // Zakładam, że ta metoda zmienia stan drzwi i wywołuje notify
  }

  getLastEmployee(): Employee | null {
    return this.lastEmployee;
  }

  getTargetZoneName(): string {
    return this.targetZone.getZoneName();
  }
}
