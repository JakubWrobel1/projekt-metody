import { employees } from "./Employee/employees.js";
import { securityZone, operationalZone, transactionZone, externalZone } from "./Zones/allZones.js";
import { CityGallery } from "./CityGallery.js";
import { DoorFactory } from "./DoorFactory.js";
const door0 = DoorFactory.createDoor(0, 4, transactionZone, "Wejście do strefy Transakcji");
const door1 = DoorFactory.createDoor(1, 3, externalZone, "Wyjście ze strefy Transakcji");
const door2 = DoorFactory.createDoor(2, 2, externalZone, "Wyjście ze strefy Transakcji");
const door3 = DoorFactory.createDoor(3, 3, externalZone, "Wyjście ze strefy Transakcji");
const door4 = DoorFactory.createDoor(4, 1, externalZone, "Wyjście ze strefy Transakcji");
const door5 = DoorFactory.createDoor(5, 2, externalZone, "Wyjście ze strefy Transakcji");
const myCityGallery = new CityGallery(employees, [door0, door1, door2, door3, door4, door5], [securityZone, operationalZone, transactionZone, externalZone]);
window.onload = () => {
    myCityGallery.initialize();
};
