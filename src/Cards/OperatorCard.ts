import { Card } from "./Card.js";

export class OperatorCard extends Card {
    constructor(number: number, fullEmployeeName: string) {
        super(number, "Operator", 201, 500, fullEmployeeName);
    }
 }