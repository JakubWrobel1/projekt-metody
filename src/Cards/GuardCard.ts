import { Card } from "./Card.js";

export class GuardCard extends Card {
    constructor(number: number) {
        super(number, "Guard", 100 , 200);
    }
  }