"use strict";
class SecurityZone {
    constructor() {
        this.capacity = 2;
        this.employeeCount = 0;
        this.Check = () => {
            console.log(this.employeeCount);
        };
        this.Entry = (employee) => {
            this.employeeCount++;
        };
        const capacity = this.capacity;
        let employeeCount = this.employeeCount;
    }
}
class EmployeeTypeGuard {
    constructor(employeeName) {
        this.employeeName = "";
        this.employeeName = employeeName;
    }
}
class CardTypeGuard {
}
let strefa1 = new SecurityZone();
let pracownik = new EmployeeTypeGuard("TEST");
let pracownik2 = new EmployeeTypeGuard("TEST2");
strefa1.Entry(pracownik);
strefa1.Entry(pracownik2);
strefa1.Check();
