import { ZoneManager } from "./Zones/ZoneManager.js";
export class CityGallery {
    constructor(employees, doors, zones) {
        this.employees = employees;
        this.doors = doors;
        this.zones = zones;
        this.zoneManager = new ZoneManager(zones);
    }
    initialize() {
        this.zoneManager.updateZoneLists();
        this.updateEmployeeList();
        this.assignDoorListeners();
    }
    updateEmployeeList() {
        let selectElement = document.getElementById("employeeList");
        selectElement.innerHTML = '';
        const defaultOption = document.createElement("option");
        defaultOption.text = "Wybierz pracownika";
        selectElement.appendChild(defaultOption);
        this.employees.forEach(employee => {
            const option = document.createElement("option");
            option.value = employee.id.toString();
            option.text = `${employee.fullName} - ${employee.getCard().type} - ${employee.getZoneName().getZoneName()}`;
            selectElement.appendChild(option);
        });
    }
    assignDoorListeners() {
        this.doors.forEach(door => {
            const doorElement = document.getElementById(`door-${door.doorId}`);
            doorElement === null || doorElement === void 0 ? void 0 : doorElement.addEventListener('click', () => this.handleDoorInteraction(door));
        });
    }
    handleDoorInteraction(door) {
        const selectedEmployee = this.getSelectedEmployee();
        if (selectedEmployee !== null) {
            const selectedEmployeeId = selectedEmployee.getEmployeeId();
            let employeeCard = selectedEmployee.getCard();
            if (employeeCard && door.canEmployeeAccess(selectedEmployee, this.employees, door.targetZone) && door.canEmployeeUseDoor(selectedEmployee)) {
                this.updateEmployeeZone(selectedEmployeeId, door.targetZone);
                this.updateEmployeeList();
                this.zoneManager.updateZoneLists();
            }
            else {
                console.log("ERROR: Pracownik nie może przejść przez te drzwi.");
            }
        }
    }
    getSelectedEmployee() {
        const selectedEmployeeId = parseInt(document.getElementById("employeeList").value, 10);
        if (!isNaN(selectedEmployeeId)) {
            return this.employees.find(e => e.id === selectedEmployeeId) || null;
        }
        return null;
    }
    updateEmployeeZone(employeeId, newZone) {
        const employee = this.employees.find(e => e.id === employeeId);
        if (employee) {
            if (!newZone.isFull()) {
                employee.currentZone.removeEmployee();
                newZone.addEmployee();
                employee.updateZone(newZone);
                console.log(`${employee.fullName} przeniósł się do ${newZone.getZoneName()}`);
            }
        }
    }
}
