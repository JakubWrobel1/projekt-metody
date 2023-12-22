import { CityGallery } from "../CityGallery.js";
import { employees } from "../Employee/employees.js";
import { securityZone, operationalZone, transactionZone, externalZone } from "../Zones/allZones.js";
import { doors } from "../Doors/allDoors.js";
export class Tester {
    constructor() {
        // Załóżmy, że mamy funkcje, które stworzą nowe instancje pracowników, stref i drzwi:
        const employees = this.createEmployees(); // Ta funkcja zwraca nowe instancje pracowników
        const zones = this.createZones(); // Ta funkcja zwraca nowe instancje stref
        const doors = this.createDoors(zones); // Ta funkcja zwraca nowe instancje drzwi
        this.cityGallery = new CityGallery(2, employees, doors, zones);
    }
    createEmployees() {
        return employees;
    }
    createZones() {
        const zones = [externalZone, transactionZone, operationalZone, securityZone];
        return zones;
    }
    createDoors(zones) {
        return doors;
    }
    moveEmployeeToTransactionZone(employeeId) {
        const employee = this.cityGallery.employees.find(e => e.id === employeeId);
        const transactionZone = this.cityGallery.zones.find(z => z.name === "Strefa Transakcji");
        if (employee && transactionZone) {
            this.cityGallery.updateEmployeeZone(employeeId, transactionZone);
            console.log(`Pracownik ${employee.fullName} przeniesiony do strefy Transakcji.`);
        }
    }
    moveEmployeeToOperationalZone(employeeId) {
        const employee = this.cityGallery.employees.find(e => e.id === employeeId);
        const operationalZone = this.cityGallery.zones.find(z => z.name === "Strefa Operacyjna");
        if (employee && operationalZone) {
            this.cityGallery.updateEmployeeZone(employeeId, operationalZone);
            console.log(`Pracownik ${employee.fullName} przeniesiony do strefy Operacyjnej.`);
        }
    }
    checkSecurityZoneCapacity() {
        const securityZone = this.cityGallery.zones.find(z => z.name === "Strefa Zabezpieczeń");
        if (securityZone && securityZone.currentOccupancy > 2) {
            console.error("Błąd: W strefie Zabezpieczeń przebywa więcej niż 2 pracowników.");
        }
        else {
            console.log("W strefie Zabezpieczeń jest odpowiednia liczba pracowników.");
        }
    }
    checkJanitorAccess(employeeId) {
        const janitor = this.cityGallery.employees.find(e => e.id === employeeId && e.getCard().type === "Janitor");
        const zone = this.cityGallery.zones.find(z => z.name === "Strefa Transakcji");
        if (janitor && zone) {
            // Przykład sprawdzenia dostępu Dozorcy do strefy Transakcji
            const doorToTransaction = this.cityGallery.doors.find(d => d.targetZone === zone);
            if (doorToTransaction && doorToTransaction.canEmployeeAccess(janitor, this.cityGallery.employees, zone)) {
                console.log("Dozorca może wejść do strefy Transakcji.");
            }
            else {
                console.error("Dozorca nie może wejść do strefy Transakcji bez innego pracownika.");
            }
        }
    }
    checkEmployeeRestrictionInOperationalZone(employeeId) {
        const employee = this.cityGallery.employees.find(e => e.id === employeeId && e.getCard().type === "Trader");
        const operationalZone = this.cityGallery.zones.find(z => z.name === "Strefa Operacyjna");
        if (employee && operationalZone && employee.currentZone === operationalZone) {
            console.error("Błąd: Pracownik Transakcji przebywa w Strefie Operacyjnej.");
        }
        else {
            console.log("Nie ma pracownika Transakcji w Strefie Operacyjnej.");
        }
    }
    // Dodatkowe metody testujące inne scenariusze
    runAllTests() {
        // Tutaj możesz wywołać wszystkie metody testujące
        console.log("Rozpoczynanie wszystkich testów:");
        // Przykładowe wywołania testów
        this.moveEmployeeToTransactionZone(123); // Przykładowe ID pracownika
        this.moveEmployeeToOperationalZone(107); // Przykładowe ID pracownika
        this.checkSecurityZoneCapacity();
        this.checkJanitorAccess(1128); // Przykładowe ID Dozorcy
        this.checkEmployeeRestrictionInOperationalZone(665); // Przykładowe ID pracownika Transakcji
    }
}
