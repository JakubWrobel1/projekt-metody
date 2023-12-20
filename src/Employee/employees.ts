import { Employee } from "./Employee.js";
import { ManagerCard } from "../Cards/ManagerCard.js";
import { GuardCard } from "../Cards/GuardCard.js";
import { SellerCard } from "../Cards/Seller.js";
import { OperatorCard } from "../Cards/OperatorCard.js";
import { JanitorCard } from "../Cards/Janitor.js";

let managerCard = new ManagerCard(50);
let guardCard = new GuardCard(102);
let operatorCard = new OperatorCard(250);
let sellerCard = new SellerCard(550);
let janitorCard = new JanitorCard(1400);

export let employees: Employee[] = [
    new Employee(22, "Marek Nowak", managerCard),
    new Employee(123, "Anna Kowalska", janitorCard),
    new Employee(107, "Krzysztof Jankowski", guardCard),
    new Employee(230, "Agnieszka Wojcik", operatorCard),
    new Employee(412, "Pawel Nowicki", operatorCard),
    new Employee(351, "Katarzyna Kaczmarek", operatorCard),
    new Employee(665, "Tomasz Adamczyk", sellerCard),
    new Employee(725, "Joanna Sikora", sellerCard),
    new Employee(1128, "Piotr Gorski", janitorCard),
    new Employee(1032, "Marta Zawadzki", janitorCard),
  ];