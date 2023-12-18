export class Zone {
    constructor(name, maxCapacity, allowedCardTypes) {
        this.employees = [];
        this.name = name;
        this.maxCapacity = maxCapacity;
        this.allowedCardTypes = allowedCardTypes;
        this.employees = [];
    }
    canEnter(employee) {
        return this.employees.length < this.maxCapacity &&
            this.allowedCardTypes.includes(employee.type);
    }
    addEmployee(employee) {
        if (this.canEnter(employee)) {
            this.employees.push(employee);
            // Update the UI here or trigger an event that will lead to a UI update
        }
        else {
            // Handle the case where the employee cannot enter (e.g., zone is at max capacity)
        }
    }
    removeEmployee(employee) {
        const index = this.employees.findIndex(emp => emp.id === employee.id);
        if (index !== -1) {
            this.employees.splice(index, 1);
            // Update the UI here or trigger an event that will lead to a UI update
        }
    }
}
