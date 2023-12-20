import { Employee } from "./Employee.js";
import { ManagerCard } from "../Cards/ManagerCard.js";
import { GuardCard } from "../Cards/GuardCard.js";
import { SellerCard } from "../Cards/Seller.js";
import { OperatorCard } from "../Cards/OperatorCard.js";
import { JanitorCard } from "../Cards/Janitor.js";

export let employees: Employee[] = [
  new Employee(22, "Marek Nowak", new ManagerCard(50, "Marek Nowak")),
  new Employee(123, "Anna Kowalska", new JanitorCard(1028, "Anna Kowalska")),
  new Employee(
    107,
    "Krzysztof Jankowski",
    new GuardCard(107, "Krzysztof Jankowski")
  ),
  new Employee(
    230,
    "Agnieszka Wojcik",
    new OperatorCard(230, "Agnieszka Wojcik")
  ),
  new Employee(412, "Pawel Nowicki", new OperatorCard(412, "Pawel Nowicki")),
  new Employee(
    351,
    "Katarzyna Kaczmarek",
    new OperatorCard(351, "Katarzyna Kaczmarek")
  ),
  new Employee(665, "Tomasz Adamczyk", new SellerCard(665, "Tomasz Adamczyk")),
  new Employee(725, "Joanna Sikora", new SellerCard(725, "Joanna Sikora")),
  new Employee(1128, "Piotr Gorski", new JanitorCard(1128, "Piotr Gorski")),
  new Employee(1032, "Marta Zawadzki", new JanitorCard(1032, "Marta Zawadzki")),
];
