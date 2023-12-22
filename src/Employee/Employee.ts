import { Zone } from "../Zones/Zone.js";
import { externalZone } from "../Zones/allZones.js";
import { Card } from "../Cards/Card.js";

export class Employee {
  id: number;
  galleryId: number;
  fullName: string;
  Card: Card;
  currentZone: Zone;
  constructor(
    id: number,
    galleryId: number,
    fullName: string,
    Card: Card,
    currentZone: Zone = externalZone
  ) {
    this.id = id;
    this.galleryId = galleryId;
    this.fullName = fullName;
    this.Card = Card;
    this.currentZone = currentZone;
  }

  updateZone(newZone: Zone) {
    this.currentZone = newZone;
  }
  getCard() {
    return this.Card;
  }
  getFullName() {
    return this.fullName;
  }

  getEmployeeId() {
    return this.id;
  }
  getZoneName(): Zone {
    return this.currentZone;
  }
}
