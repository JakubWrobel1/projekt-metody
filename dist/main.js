import { Tester } from "./Tester.js";
import { CardFactory } from "./CardFactory.js";
import { Zone } from "./Zone.js";
import { EmployeeType } from "./EmployeeType.js";
import { Employee } from "./Employee.js";
const secureZone = new Zone("Strefa Zabezpieczona", 2, [EmployeeType.Guard, EmployeeType.Manager]);
const operationalZone = new Zone("Strefa Operacyjna", 5, [
    EmployeeType.Guard,
    EmployeeType.Operator,
    EmployeeType.Manager,
    EmployeeType.Janitor
]);
const transactionZone = new Zone("Strefa Transakcji", 7, [
    EmployeeType.ArtGuard,
    EmployeeType.Guard,
    EmployeeType.Manager,
    EmployeeType.Operator,
    EmployeeType.Janitor
]);
const externalZone = new Zone("Strefa Zewnętrzna", Infinity, [
    EmployeeType.ArtGuard,
    EmployeeType.Manager,
    EmployeeType.Janitor
]);
const cardFactory = new CardFactory(secureZone, operationalZone, transactionZone, externalZone);
const employeesData = [
    { id: 22, name: "Marek Nowak", type: EmployeeType.Manager },
    { id: 123, name: "Anna Kowalska", type: EmployeeType.Guard },
    { id: 107, name: "Krzysztof Jankowski", type: EmployeeType.Guard },
    { id: 230, name: "Agnieszka Wojcik", type: EmployeeType.Operator },
    { id: 412, name: "Pawel Nowicki", type: EmployeeType.Operator },
    { id: 351, name: "Katarzyna Kaczmarek", type: EmployeeType.Operator },
    { id: 665, name: "Tomasz Adamczyk", type: EmployeeType.Seller },
    { id: 725, name: "Joanna Sikora", type: EmployeeType.Seller },
    { id: 1128, name: "Piotr Gorski", type: EmployeeType.Janitor },
    { id: 1032, name: "Marta Zawdzki", type: EmployeeType.Janitor },
];
const employees = employeesData.map((empData) => new Employee(empData.id, empData.name, empData.type, cardFactory, externalZone));
console.log(employees[0]);
console.log(employees[1]);
console.log(employees[2]);
document.addEventListener("DOMContentLoaded", () => {
    populateEmployeeSelect(employees);
    // ... (rest of your DOMContentLoaded code)
});
// Function to populate the select dropdown with employee options
function populateEmployeeSelect(employees) {
    const employeeSelect = document.getElementById('employee-select');
    // Add a change event listener to handle employee selection
    employeeSelect.addEventListener('change', (event) => {
        const selectedId = parseInt(event.target.value, 10);
        // Now you can use selectedId to get the employee object and perform actions
        // ...
    });
    employees.forEach(employee => {
        const option = document.createElement('option');
        option.value = employee.id.toString();
        option.textContent = `${employee.name} - ${EmployeeType[employee.type]} (Location: ${employee.currentZone.name})`;
        employeeSelect.appendChild(option);
    });
}
function updateZoneDisplays() {
    // Example for one zone, repeat for others
    const externalZoneElement = document.getElementById('external-zone-employees');
    externalZoneElement.innerHTML = ''; // Clear current list
    externalZone.employees.forEach(employee => {
        const employeeElement = document.createElement('div');
        employeeElement.textContent = `${employee.name} (${EmployeeType[employee.type]})`;
        externalZoneElement.appendChild(employeeElement);
    });
    const transactionZoneElement = document.getElementById('transaction-zone-employees');
    transactionZoneElement.innerHTML = ''; // Clear current list
    transactionZone.employees.forEach(employee => {
        const employeeElement = document.createElement('div');
        employeeElement.textContent = `${employee.name} (${EmployeeType[employee.type]})`;
        transactionZoneElement.appendChild(employeeElement);
    });
    const operationalZoneElement = document.getElementById('operational-zone-employees');
    operationalZoneElement.innerHTML = ''; // Clear current list
    operationalZone.employees.forEach(employee => {
        const employeeElement = document.createElement('div');
        employeeElement.textContent = `${employee.name} (${EmployeeType[employee.type]})`;
        operationalZoneElement.appendChild(employeeElement);
    });
    const secureZoneElement = document.getElementById('secure-zone-employees');
    secureZoneElement.innerHTML = ''; // Clear current list
    secureZone.employees.forEach(employee => {
        const employeeElement = document.createElement('div');
        employeeElement.textContent = `${employee.name} (${EmployeeType[employee.type]})`;
        secureZoneElement.appendChild(employeeElement);
    });
    const employeeSelect = document.getElementById('employee-select');
    for (let i = 0; i < employeeSelect.options.length; i++) {
        const option = employeeSelect.options[i];
        const employee = employees.find(emp => emp.id.toString() === option.value);
        if (employee) {
            option.textContent = `${employee.name} - ${EmployeeType[employee.type]} (Location: ${employee.currentZone.name})`;
        }
    }
    // ... repeat for operationalZone, transactionZone, and externalZone
}
// Assume that employees array and DOM elements are correctly set up
let selectedEmployee = null;
const employeeSelect = document.getElementById('employee-select');
employeeSelect.addEventListener('change', () => {
    const selectedId = parseInt(employeeSelect.value, 10);
    selectedEmployee = employees.find(e => e.id === selectedId) || null;
});
const doorButtons = document.querySelectorAll('.door');
doorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (selectedEmployee && canMoveThroughDoor(selectedEmployee, button.id)) {
            const targetZone = getTargetZone(button.id);
            if (targetZone) { // Check if targetZone is not undefined
                // Move employee from current zone to target zone
                selectedEmployee.currentZone.removeEmployee(selectedEmployee);
                targetZone.addEmployee(selectedEmployee);
                // Update the current zone of the employee
                selectedEmployee.currentZone = targetZone;
                // Refresh the UI to show updated employee locations
                updateZoneDisplays();
            }
        }
    });
});
function getTargetZone(doorId) {
    // Implement logic to determine the target zone based on the doorId
    switch (doorId) {
        case 'door-0':
            return transactionZone;
        // Add cases for other doors
        case 'door-1':
            return externalZone;
        case 'door-2':
            return transactionZone;
        case 'door-3':
            return operationalZone;
        case 'door-4':
            return operationalZone;
        case 'door-5':
            return secureZone;
        default:
            return undefined;
    }
}
// Define the canMoveThroughDoor function based on your system's logic
function canMoveThroughDoor(employee, doorId) {
    // Determine the current and target zones based on the doorId
    const currentZone = employee.currentZone;
    const targetZone = getTargetZone(doorId);
    // Define the valid transitions from one zone to another
    const validTransitions = new Map([
        [externalZone, [transactionZone]],
        [transactionZone, [operationalZone, externalZone]], // From 'Transakcji' only to 'Operacyjna'
        [operationalZone, [transactionZone, secureZone]],
        // From 'Operacyjna' to 'Transakcji' or 'Zabezpieczona'
        // Define other valid transitions
        [secureZone, [operationalZone]]
    ]);
    if (!targetZone) {
        console.error(`Door ID ${doorId} does not lead to a valid zone`);
        return false;
    }
    // Check if the transition from the currentZone to the targetZone is allowed
    const allowedTransitions = validTransitions.get(currentZone);
    if (!allowedTransitions || !allowedTransitions.includes(targetZone)) {
        return false; // The transition is not valid
    }
    // Perform additional checks as before (card access, max capacity, etc.)
    // ...
    return true; // All checks passed
}
externalZone.employees = [...employees]; // Add all employees to the external zone initially
updateZoneDisplays();
const tester = new Tester();
tester.runAllTests();
