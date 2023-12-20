import { Card } from "./Card.js";

export class ManagerCard extends Card {
    constructor(number: number) {
        super(number, "Manager", 0, 99);
    }
 }