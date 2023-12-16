export class Zone {
    constructor(name, maxCapacity, allowedEmployeeTypes) {
        this.name = name;
        this.maxCapacity = maxCapacity;
        this.allowedEmployeeTypes = allowedEmployeeTypes;
        this.employees = [];
    }
    canEnter(employee) {
        return this.employees.length < this.maxCapacity &&
            this.allowedEmployeeTypes.includes(employee.type);
    }
}
