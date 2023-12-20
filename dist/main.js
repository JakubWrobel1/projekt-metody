import { ManagerCard } from "./Cards/ManagerCard.js";
import { GuardCard } from "./Cards/GuardCard.js";
import { OperatorCard } from "./Cards/OperatorCard.js";
import { SellerCard } from "./Cards/Seller.js";
import { JanitorCard } from "./Cards/Janitor.js";
import { ZoneManager } from "./Zones/ZoneManager.js";
import { employees } from "./Employee/employees.js";
import { securityZone } from "./Zones/allZones.js";
import { operationalZone } from "./Zones/allZones.js";
import { transactionZone } from "./Zones/allZones.js";
import { externalZone } from "./Zones/allZones.js";
window.onload = () => {
    var _a, _b;
    zoneManager.updateZoneLists();
    // Obsługa kliknięcia przycisku
    (_a = document.getElementById("door-0")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        handleDoorInteraction(door0, transactionZone);
    });
    (_b = document.getElementById("door-1")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        handleDoorInteraction(door1, externalZone);
    });
};
class Door {
    constructor(doorId, sourceZoneId, accessCards, doorDescription) {
        this.doorId = doorId;
        this.sourceZoneId = sourceZoneId;
        this.accessCards = accessCards;
        this.doorDescription = doorDescription;
    }
    canEmployeeAccess(employee, employees, targetZone) {
        if (employee.Card instanceof JanitorCard) {
            return (employees.some((emp) => emp.currentZone.id === targetZone.id &&
                !(emp.Card instanceof JanitorCard)) &&
                !employees.some((emp) => emp.currentZone.id === targetZone.id &&
                    emp.Card instanceof JanitorCard &&
                    emp.id !== employee.id));
        }
        return this.accessCards.some((cardType) => employee.Card instanceof cardType);
    }
    canEmployeeUseDoor(employee) {
        return employee.currentZone.id === this.sourceZoneId;
    }
}
const door0 = new Door(0, 4, [ManagerCard, GuardCard, OperatorCard, SellerCard, JanitorCard], "Wejście ze strefy Zewnątrz do strefy Transakcji");
const door1 = new Door(1, 3, [ManagerCard, GuardCard, OperatorCard, SellerCard, JanitorCard], "Wyjście ze strefy Transakcji do strefy Zewnątrz");
function updateEmployeeList() {
    let selectElement = document.getElementById("employeeList");
    selectElement.innerHTML = ""; // Wyczyść obecną listę
    // Dodaj opcję domyślną
    const defaultOption = document.createElement("option");
    defaultOption.text = "Wybierz pracownika";
    selectElement.appendChild(defaultOption);
    // Dodaj pracowników do listy
    employees.forEach((employee) => {
        const option = document.createElement("option");
        option.value = employee.id.toString();
        option.text =
            employee.fullName +
                " - " +
                employee.getCard().type +
                " - " +
                employee.getZoneName().getZoneName();
        selectElement.appendChild(option);
    });
}
updateEmployeeList();
function updateEmployeeZone(employeeId, newZone) {
    const employee = employees.find((e) => e.id === employeeId);
    if (employee) {
        if (!newZone.isFull()) {
            employee.currentZone.removeEmployee();
            newZone.addEmployee();
            employee.updateZone(newZone);
            console.log(`${employee.fullName} przeniósł się do ${newZone.getZoneName()}`);
        }
    }
}
function getSelectedEmployee() {
    const selectedEmployeeId = parseInt(document.getElementById("employeeList").value, 10);
    if (!isNaN(selectedEmployeeId)) {
        const employee = employees.find((e) => e.id === selectedEmployeeId);
        return employee || null;
    }
    else {
        return null;
    }
}
function getEmployeeCardById(employeeId) {
    const employee = employees.find((e) => e.id === employeeId);
    if (employee) {
        return employee.Card;
    }
    else {
        return null;
    }
}
function handleDoorInteraction(door, targetZone) {
    const selectedEmployee = getSelectedEmployee();
    if (selectedEmployee !== null) {
        const selectedEmployeeId = selectedEmployee.getEmployeeId();
        let employeeCard = getEmployeeCardById(selectedEmployeeId);
        if (employeeCard &&
            door.canEmployeeAccess(selectedEmployee, employees, targetZone) &&
            door.canEmployeeUseDoor(selectedEmployee)) {
            updateEmployeeZone(selectedEmployeeId, targetZone);
            updateEmployeeList();
            zoneManager.updateZoneLists();
        }
        else {
            console.log("ERROR: Pracownik nie może przejść przez te drzwi.");
        }
    }
}
const zoneManager = new ZoneManager([securityZone, operationalZone, transactionZone, externalZone]);
zoneManager.updateZoneLists();
