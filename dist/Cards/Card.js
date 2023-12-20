export class Card {
    constructor(number, type, minNumber, maxNumber, fullEmployeeName) {
        this.type = type;
        this.minNumber = minNumber;
        this.maxNumber = maxNumber;
        this.fullName = fullEmployeeName;
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
