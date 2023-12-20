import { ManagerCard } from "./Cards/ManagerCard.js";
import { GuardCard } from "./Cards/GuardCard.js";
import { OperatorCard } from "./Cards/OperatorCard.js";
import { SellerCard } from "./Cards/Seller.js";
import { JanitorCard } from "./Cards/Janitor.js";
import { employees } from "./Employee/employees.js";
import { securityZone, operationalZone, transactionZone, externalZone } from "./Zones/allZones.js";
import { Door } from "./Door.js";
import { CityGallery } from "./CityGallery.js";

const door0 = new Door(
    0,
    4,
    transactionZone,
    [ManagerCard, GuardCard, OperatorCard, SellerCard, JanitorCard],
    "Wejście do strefy Transakcji"
);
const door1 = new Door(
    1,
    3,
    externalZone,
    [ManagerCard, GuardCard, OperatorCard, SellerCard, JanitorCard],
    "Wyjście ze strefy Transakcji"
);
const door2 = new Door(
    2,
    2,
    transactionZone,
    [ManagerCard, GuardCard, OperatorCard, JanitorCard],
    "Wejście do strefy Operacyjnej"
);
const door3 = new Door(
    3,
    3,
    operationalZone,
    [ManagerCard, GuardCard, OperatorCard, JanitorCard],
    "Wyjście ze strefy Operacyjnej"
);
const door5 = new Door(
  5,
  2,
  securityZone,
  [ManagerCard, GuardCard, OperatorCard, JanitorCard],
  "Wejście do strefy zabezpieczeń"
);
const door4 = new Door(
  4,
  1,
  operationalZone,
  [ManagerCard, GuardCard, OperatorCard, JanitorCard],
  "Wyjście ze Zabezpieczeń"
);



const myCityGallery = new CityGallery(employees, [door0, door1, door2, door3, door4, door5], [securityZone, operationalZone, transactionZone, externalZone]);

window.onload = () => {
    myCityGallery.initialize();
};
