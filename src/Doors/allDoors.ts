import {
  transactionZone,
  externalZone,
  operationalZone,
  securityZone,
} from "../Zones/allZones.js";
import { DoorFactory } from "./DoorFactory.js";

const doorConfigs = [
  {
    doorId: 0,
    sourceZoneId: 4,
    targetZone: transactionZone,
    description: "Wejście do strefy Transakcji",
  },
  {
    doorId: 1,
    sourceZoneId: 3,
    targetZone: externalZone,
    description: "Wyjście ze strefy Transakcji",
  },
  {
    doorId: 2,
    sourceZoneId: 2,
    targetZone: transactionZone,
    description: "Wyjście ze strefy Operacyjnej",
  },
  {
    doorId: 3,
    sourceZoneId: 3,
    targetZone: operationalZone,
    description: "Wejście do strefy Operacyjnej",
  },
  {
    doorId: 4,
    sourceZoneId: 1,
    targetZone: operationalZone,
    description: "Wyjście ze strefy Zabezpieczonej",
  },
  {
    doorId: 5,
    sourceZoneId: 2,
    targetZone: securityZone,
    description: "Wejście do strefy Zabezpieczonej",
  },
];
export const doors = doorConfigs.map((config) =>
  DoorFactory.createDoor(
    config.doorId,
    config.sourceZoneId,
    config.targetZone,
    config.description
  )
);
