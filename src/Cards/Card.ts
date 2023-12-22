export class Card {
  number: number;
  type: string;
  minNumber: number;
  maxNumber: number;
  fullName: string;
  galleryId: number;
  constructor(
    number: number,
    type: string,
    minNumber: number,
    maxNumber: number,
    fullEmployeeName: string,
    galleryId: number
  ) {
    this.type = type;
    this.minNumber = minNumber;
    this.maxNumber = maxNumber;
    this.fullName = fullEmployeeName;
    this.galleryId = galleryId;
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
