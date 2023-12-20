import { Card } from "./Card.js";
export class GuardCard extends Card {
    constructor(number, fullEmployeeName) {
        super(number, "Guard", 100, 200, fullEmployeeName);
    }
}
