import { Employee } from "../Employee/Employee.js";
import { CardFactory } from "../Cards/CardFactory.js";
const cardFactory = new CardFactory();
const galleryId = 1;
const employeeData = [
    { id: 22, name: "Marek Nowak", cardType: "Manager" },
    { id: 123, name: "Anna Kowalska", cardType: "Guard" },
    { id: 107, name: "Krzysztof Jankowski", cardType: "Guard" },
    { id: 230, name: "Agnieszka Wojcik", cardType: "Operator" },
    { id: 412, name: "Pawel Nowicki", cardType: "Operator" },
    { id: 351, name: "Katarzyna Kaczmarek", cardType: "Operator" },
    { id: 665, name: "Tomasz Adamczyk", cardType: "Handlarz" },
    { id: 725, name: "Joanna Sikora", cardType: "Handlarz" },
    { id: 1128, name: "Piotr Gorski", cardType: "Dozorca" },
    { id: 1032, name: "Marta Zawadzki", cardType: "Dozorca" }
];
export let allTestEmployees = employeeData.map(emp => new Employee(emp.id, galleryId, emp.name, cardFactory.createCard(emp.cardType, emp.id, emp.name, galleryId)));
