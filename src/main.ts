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
    operationalZone,
    [ManagerCard, GuardCard, OperatorCard, SellerCard, JanitorCard],
    "Wejście do strefy Operacyjnej"
);
const door3 = new Door(
    3,
    3,
    transactionZone,
    [ManagerCard, GuardCard, OperatorCard, SellerCard, JanitorCard],
    "Wyjście ze strefy Operacyjnej"
);

const myCityGallery = new CityGallery(employees, [door0, door1, door2, door3], [securityZone, operationalZone, transactionZone, externalZone]);

window.onload = () => {
    myCityGallery.initialize();
};
