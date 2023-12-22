import { Employee } from "../Employee/Employee.js";

export class Zone {
  name: string;
  capacity: number;
  currentOccupancy: number;
  id: number;
  employees: Employee[] = [];
  constructor(name: string, capacity: number, id: number) {
    this.name = name;
    this.capacity = capacity;
    this.id = id;
    this.currentOccupancy = 0;
  }
  getZoneName() {
    return this.name;
  }
  getZoneId() {
    return this.id;
  }

  isFull(): boolean {
    return this.currentOccupancy >= this.capacity;
  }

  addEmployee(): boolean {
    if (!this.isFull()) {
      this.currentOccupancy++;
      return true;
    } else {
      return false;
    }
  }
  removeEmployee(): void {
    if (this.currentOccupancy > 0) {
      this.currentOccupancy--;
    }
  }
  hasEmployee(): boolean {
    return this.employees.length > 0;
  }
}
