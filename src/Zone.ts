import { CardType } from "./CardType.js";
import { Employee } from "./Employee.js";

export class Zone {
    name: string;
    maxCapacity: number;
    allowedCardTypes: CardType[];
    employees: Employee[] = [];

    constructor(name: string, maxCapacity: number, allowedCardTypes: CardType[]) {
        this.name = name;
        this.maxCapacity = maxCapacity;
        this.allowedCardTypes = allowedCardTypes;
        this.employees = [];
    }

    canEnter(employee: Employee): boolean {
        return this.employees.length < this.maxCapacity && 
               this.allowedCardTypes.includes(employee.type);
    }
    addEmployee(employee: Employee): void {
        if (this.canEnter(employee)) {
            this.employees.push(employee);
            // Update the UI here or trigger an event that will lead to a UI update
        } else {
            // Handle the case where the employee cannot enter (e.g., zone is at max capacity)
        }
    }
    removeEmployee(employee: Employee): void {
        const index = this.employees.findIndex(emp => emp.id === employee.id);
        if (index !== -1) {
            this.employees.splice(index, 1);
            // Update the UI here or trigger an event that will lead to a UI update
        }
    }
}