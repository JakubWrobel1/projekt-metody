import { Employee } from "./Employee/Employee.js";
import { Zone } from "./Zones/Zone.js";
import { Door } from "./Doors/Door.js";
import { ZoneManager } from "./Zones/ZoneManager.js";
import { DoorStatusLogger } from "./Doors/DoorStatusLogger.js";

export class CityGallery {
  id: number;
  employees: Employee[];
  doors: Door[];
  zones: Zone[];
  zoneManager: ZoneManager;
  doorStatusLogger: DoorStatusLogger;

  constructor(id: number, employees: Employee[], doors: Door[], zones: Zone[]) {
    this.id = id;
    this.employees = employees;
    this.doors = doors;
    this.zones = zones;
    this.zoneManager = new ZoneManager(zones);
    this.doorStatusLogger = new DoorStatusLogger();
  }

  initialize() {
    this.zoneManager.updateZoneLists();
    this.updateEmployeeList();
    this.assignDoorListeners();
    this.doors.forEach((door) => door.attach(this.doorStatusLogger));
  }

  updateEmployeeList() {
    let selectElement = document.getElementById(
      "employeeList"
    ) as HTMLSelectElement;
    selectElement.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.text = "Wybierz pracownika";
    selectElement.appendChild(defaultOption);

    this.employees.forEach((employee) => {
      const option = document.createElement("option");
      option.value = employee.id.toString();
      option.text = `${employee.fullName} - ${
        employee.getCard().type
      } - ${employee.getZoneName().getZoneName()}`;
      selectElement.appendChild(option);
    });
  }

  assignDoorListeners() {
    this.doors.forEach((door) => {
      const doorElement = document.getElementById(`door-${door.doorId}`);
      doorElement?.addEventListener("click", () =>
        this.handleDoorInteraction(door)
      );
    });
  }

  handleDoorInteraction(door: Door) {
    const selectedEmployee = this.getSelectedEmployee();
    if (selectedEmployee !== null) {
      const selectedEmployeeId = selectedEmployee.getEmployeeId();
      let employeeCard = selectedEmployee.getCard();

      if (
        employeeCard &&
        door.canEmployeeAccess(
          selectedEmployee,
          this.employees,
          door.targetZone
        ) &&
        door.canEmployeeUseDoor(selectedEmployee)
      ) {
        this.updateEmployeeZone(selectedEmployeeId, door.targetZone);
        this.updateEmployeeList();
        this.zoneManager.updateZoneLists();
        door.openDoorFor(selectedEmployee);
      } else {
        console.log("ERROR: Pracownik nie może przejść przez te drzwi.");
      }
    }
  }

  getSelectedEmployee(): Employee | null {
    const selectedEmployeeId = parseInt(
      (document.getElementById("employeeList") as HTMLSelectElement).value,
      10
    );
    if (!isNaN(selectedEmployeeId)) {
      return this.employees.find((e) => e.id === selectedEmployeeId) || null;
    }
    return null;
  }

  updateEmployeeZone(employeeId: number, newZone: Zone) {
    const employee = this.employees.find((e) => e.id === employeeId);
    if (employee) {
      if (!newZone.isFull()) {
        employee.currentZone.removeEmployee();
        newZone.addEmployee();
        employee.updateZone(newZone);
      }
    }
  }
}
