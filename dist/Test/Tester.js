import { CityGallery } from "../CityGallery.js";
import { allTestDoors } from "./TestDoors.js";
import { allTestZones } from "./TestZones.js";
import { allTestEmployees } from "./TestEmployees.js";
export class Tester {
    constructor() {
        const employees = this.createEmployees();
        const zones = this.createZones();
        const doors = this.createDoors();
        this.cityGallery = new CityGallery(2, employees, doors, zones);
    }
    createEmployees() {
        return allTestEmployees;
    }
    createZones() {
        return allTestZones;
    }
    createDoors() {
        return allTestDoors;
    }
    moveEmployeeToTransactionZone(employeeId) {
        const employee = this.cityGallery.employees.find((e) => e.id === employeeId);
        const transactionZone = this.cityGallery.zones.find((z) => z.name === "Strefa Transakcji");
        if (employee && transactionZone) {
            this.cityGallery.updateEmployeeZone(employeeId, transactionZone);
            console.log(`Pracownik ${employee.fullName} przeniesiony do strefy Transakcji.`);
        }
    }
    moveEmployeeToOperationalZone(employeeId) {
        const employee = this.cityGallery.employees.find((e) => e.id === employeeId);
        const operationalZone = this.cityGallery.zones.find((z) => z.name === "Strefa Operacyjna");
        if (employee && operationalZone) {
            this.cityGallery.updateEmployeeZone(employeeId, operationalZone);
            console.log(`Pracownik ${employee.fullName} przeniesiony do strefy Operacyjnej.`);
        }
    }
    checkSecurityZoneCapacity() {
        const securityZone = this.cityGallery.zones.find((z) => z.name === "Strefa Zabezpieczeń");
        if (securityZone && securityZone.currentOccupancy > 2) {
            console.error("Błąd: W strefie Zabezpieczeń przebywa więcej niż 2 pracowników.");
        }
        else {
            console.log("W strefie Zabezpieczeń jest odpowiednia liczba pracowników.");
        }
    }
    checkJanitorAccess(employeeId) {
        const janitor = this.cityGallery.employees.find((e) => e.id === employeeId && e.getCard().type === "Janitor");
        const zone = this.cityGallery.zones.find((z) => z.name === "Strefa Transakcji");
        if (janitor && zone) {
            const doorToTransaction = this.cityGallery.doors.find((d) => d.targetZone === zone);
            if (doorToTransaction &&
                doorToTransaction.canEmployeeAccess(janitor, this.cityGallery.employees, zone)) {
                console.log("Dozorca może wejść do strefy Transakcji.");
            }
            else {
                console.error("Dozorca nie może wejść do strefy Transakcji bez innego pracownika.");
            }
        }
    }
    checkEmployeeRestrictionInOperationalZone(employeeId) {
        const employee = this.cityGallery.employees.find((e) => e.id === employeeId && e.getCard().type === "Trader");
        const operationalZone = this.cityGallery.zones.find((z) => z.name === "Strefa Operacyjna");
        if (employee &&
            operationalZone &&
            employee.currentZone === operationalZone) {
            console.error("Błąd: Pracownik Transakcji przebywa w Strefie Operacyjnej.");
        }
        else {
            console.log("Nie ma pracownika Transakcji w Strefie Operacyjnej.");
        }
    }
    runAllTests() {
        console.log("Rozpoczynanie wszystkich testów:");
        this.moveEmployeeToTransactionZone(123);
        this.moveEmployeeToOperationalZone(123);
        this.checkSecurityZoneCapacity();
        this.checkJanitorAccess(1128);
        this.checkEmployeeRestrictionInOperationalZone(665);
    }
}
