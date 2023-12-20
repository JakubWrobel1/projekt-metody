import { Card } from "./Card.js";

export class OperatorCard extends Card {
    constructor(number: number) {
        super(number, "Operator", 201, 500);
    }
 }