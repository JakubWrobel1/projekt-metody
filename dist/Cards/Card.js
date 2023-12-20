export class Card {
    constructor(number, type, minNumber, maxNumber) {
        this.type = type;
        this.minNumber = minNumber;
        this.maxNumber = maxNumber;
        if (this.isValidNumber(number)) {
            this.number = number;
        }
        else {
            throw new Error("Numer karty jest nieprawidłowy.");
        }
    }
    isValidNumber(number) {
        return number >= this.minNumber && number <= this.maxNumber;
    }
}
