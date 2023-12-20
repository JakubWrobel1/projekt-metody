import { Card } from "./Card.js";

export class ManagerCard extends Card {
    constructor(number: number, fullEmployeeName: string) {
        super(number, "Manager", 0, 99, fullEmployeeName);
    }
 }