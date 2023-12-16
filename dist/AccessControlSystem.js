export class AccessControlSystem {
    constructor() {
        this.zones = [];
        this.employees = [];
    }
    addZone(zone) {
        this.zones.push(zone);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
