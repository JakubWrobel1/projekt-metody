import { EmployeeType } from "./EmployeeType.js";
import { Employee } from "./Employee.js";

export class Zone {
    name: string;
    maxCapacity: number;
    allowedEmployeeTypes: EmployeeType[];
    employees: Employee[];

    constructor(name: string, maxCapacity: number, allowedEmployeeTypes: EmployeeType[]) {
        this.name = name;
        this.maxCapacity = maxCapacity;
        this.allowedEmployeeTypes = allowedEmployeeTypes;
        this.employees = [];
    }

    canEnter(employee: Employee): boolean {
        return this.employees.length < this.maxCapacity && 
               this.allowedEmployeeTypes.includes(employee.type);
    }
}