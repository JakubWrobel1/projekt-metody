import { employees } from "../Employee/employees.js";
import { securityZone } from "./allZones.js";
import { operationalZone } from "./allZones.js";
import { transactionZone } from "./allZones.js";
import { externalZone } from "./allZones.js";
export class ZoneManager {
    constructor(zones) {
        this.zones = zones;
    }
    updateZoneLists() {
        const listSecurity = document.getElementById("listSecurity");
        const listOperational = document.getElementById("listOperational");
        const listTransaction = document.getElementById("listTransaction");
        const listExternal = document.getElementById("listExternal");
        if (listSecurity && listOperational && listTransaction && listExternal) {
            // Wyczyść obecne listy
            listSecurity.innerHTML = "";
            listOperational.innerHTML = "";
            listTransaction.innerHTML = "";
            listExternal.innerHTML = "";
            // Iteruj przez pracowników i dodaj ich do odpowiednich list
            employees.forEach((employee) => {
                const listItem = document.createElement("li");
                listItem.textContent = employee.fullName;
                switch (employee.currentZone) {
                    case securityZone:
                        listSecurity.appendChild(listItem);
                        break;
                    case operationalZone:
                        listOperational.appendChild(listItem);
                        break;
                    case transactionZone:
                        listTransaction.appendChild(listItem);
                        break;
                    case externalZone:
                        listExternal.appendChild(listItem);
                        break;
                }
            });
        }
    }
}
