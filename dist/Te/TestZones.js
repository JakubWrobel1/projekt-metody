import { Zone } from "../Zones/Zone.js";
export let securityZone = new Zone("Strefa Zabezpieczeń", 2, 1);
export let operationalZone = new Zone("Strefa Operacyjna", 5, 2);
export let transactionZone = new Zone("Strefa Transakcji", 7, 3);
export let externalZone = new Zone("Strefa Zewnętrzna", Infinity, 4);
export const allTestZones = [
    securityZone, operationalZone, transactionZone, externalZone
];
