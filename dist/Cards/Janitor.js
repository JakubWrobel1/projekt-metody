import { Card } from "./Card.js";
export class JanitorCard extends Card {
    constructor(number, fullEmployeeName) {
        super(number, "Dozorca", 1000, Infinity, fullEmployeeName);
    }
}
