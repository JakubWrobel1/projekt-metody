import { Card } from "./Card.js";

export class SellerCard extends Card {
    constructor(number: number, fullEmployeeName: string) {
        super(number, "Handlarz", 501, 999, fullEmployeeName);
    }
 }