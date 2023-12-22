import { employees } from "./Employee/employees.js";
import { securityZone, operationalZone, transactionZone, externalZone, } from "./Zones/allZones.js";
import { CityGallery } from "./CityGallery.js";
import { doors } from "./Doors/allDoors.js";
import { Tester } from "./Te/Tester.js";
const myCityGallery = new CityGallery(1, employees, [], [securityZone, operationalZone, transactionZone, externalZone]);
doors.forEach((door) => door.setCityGallery(myCityGallery));
myCityGallery.doors = doors;
const tester = new Tester();
window.onload = () => {
    myCityGallery.initialize();
    tester.runAllTests();
};
