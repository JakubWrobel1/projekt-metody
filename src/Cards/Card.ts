export class Card {
    number: number;
    type: string;
    minNumber: number;
    maxNumber: number;

    constructor(number: number, type: string, minNumber: number, maxNumber: number) {
        this.type = type;
        this.minNumber = minNumber;
        this.maxNumber = maxNumber;

        if (this.isValidNumber(number)) {
            this.number = number;
        } else {
            throw new Error("Numer karty jest nieprawidłowy.");
        }
    }

    isValidNumber(number: number): boolean {
        return number >= this.minNumber && number <= this.maxNumber;
    }
}