import { Zone } from "./Zone.js";
import { Employee } from "./Employee.js";

export class AccessControlSystem {
    zones: Zone[];
    employees: Employee[];

    constructor() {
        this.zones = [];
        this.employees = [];
    }

    addZone(zone: Zone) {
        this.zones.push(zone);
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }
}