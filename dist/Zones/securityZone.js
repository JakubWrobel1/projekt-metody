import { Zone } from "../Zone.js";
let securityZone = new Zone("Strefa Zabezpieczeń", 2, 1);
let operationalZone = new Zone("Strefa Operacyjna", 5, 2);
let transactionZone = new Zone("Strefa Transakcji", 7, 3);
let externalZone = new Zone("Strefa Zewnętrzna", Infinity, 4);
export let zones = [
    securityZone,
    operationalZone,
    transactionZone,
    externalZone
];
