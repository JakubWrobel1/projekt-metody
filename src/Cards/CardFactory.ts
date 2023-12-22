import { Card } from "./Card.js";
import { CardTypeConfigs } from "./ICardTypeConfigs.js";

export class CardFactory {
  cardTypes: CardTypeConfigs = {
    Guard: { minNumber: 100, maxNumber: 200 },
    Manager: { minNumber: 0, maxNumber: 99 },
    Operator: { minNumber: 201, maxNumber: 500 },
    Handlarz: { minNumber: 501, maxNumber: 999 },
    Dozorca: { minNumber: 1000, maxNumber: Infinity },
  };

  createCard(
    type: string,
    number: number,
    fullEmployeeName: string,
    galleryId: number
  ): Card {
    const config = this.cardTypes[type];
    if (!config) {
      throw new Error("Nieznany typ karty.");
    }
    return new Card(
      number,
      type,
      config.minNumber,
      config.maxNumber,
      fullEmployeeName,
      galleryId
    );
  }
}
