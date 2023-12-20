import { Card } from "./Card.js";

export class GuardCard extends Card {
    constructor(number: number, fullEmployeeName: string) {
        super(number, "Guard", 100 , 200, fullEmployeeName);
    }
  }