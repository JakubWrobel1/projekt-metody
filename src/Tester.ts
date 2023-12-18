import { Employee } from "./Employee.js";
import { CardType } from "./CardType.js";
import { AccessControlSystem } from "./AccessControlSystem.js";
import { Zone } from "./Zone.js";
import { CardFactory } from "./CardFactory.js";


export class Tester {
    artGuardSystem: AccessControlSystem;
    cardFactory: CardFactory;
    janitor: Employee;
    manager: Employee;
    seller: Employee;
    secureZone: Zone;
    operationalZone: Zone;
    transactionZone: Zone;
    externalZone: Zone;
  
    constructor() {
        // Initialize zones
        this.secureZone = new Zone("Strefa Zabezpieczona", 2, [CardType.Guard]);
        this.operationalZone = new Zone("Strefa Operacyjna", 5, [CardType.Guard, CardType.Operator]);
        this.transactionZone = new Zone("Strefa Transakcji", 7, [CardType.Guard, CardType.Operator, CardType.ArtGuard]);
        this.externalZone = new Zone("Strefa Zewnętrzna", Infinity, [CardType.Guard, CardType.Operator, CardType.ArtGuard]);

        // Initialize AccessControlSystem
        this.artGuardSystem = new AccessControlSystem();
        this.artGuardSystem.addZone(this.secureZone);
        this.artGuardSystem.addZone(this.operationalZone);
        this.artGuardSystem.addZone(this.transactionZone);
        this.artGuardSystem.addZone(this.externalZone);

        // Create a CardFactory with the zones
        this.cardFactory = new CardFactory(this.secureZone, this.operationalZone, this.transactionZone, this.externalZone);

        // Create Employees with cards
        this.janitor = new Employee(1001, "Janitor Tester", CardType.Janitor, this.cardFactory, this.externalZone);
        this.manager = new Employee(1002, "Manager Tester", CardType.Manager, this.cardFactory, this.externalZone);
        this.seller = new Employee(1003, "Seller Tester", CardType.Seller, this.cardFactory, this.externalZone);
    }
  
    moveCardFromExternalToTransaction(employee: Employee): boolean {
        const externalZoneIndex = this.artGuardSystem.zones.findIndex(z => z.name === "Strefa Zewnętrzna");
        const transactionZoneIndex = this.artGuardSystem.zones.findIndex(z => z.name === "Strefa Transakcji");
        
        if (employee.card && employee.card.canAccess(this.artGuardSystem.zones[transactionZoneIndex])) {
          return this.artGuardSystem.zones[transactionZoneIndex].canEnter(employee);
        }
        return false;
      }
    
      moveCardFromTransactionToOperation(employee: Employee): boolean {
        const transactionZoneIndex = this.artGuardSystem.zones.findIndex(z => z.name === "Strefa Transakcji");
        const operationZoneIndex = this.artGuardSystem.zones.findIndex(z => z.name === "Strefa Operacyjna");
        
        if (employee.card && employee.card.canAccess(this.artGuardSystem.zones[operationZoneIndex])) {
          return this.artGuardSystem.zones[operationZoneIndex].canEnter(employee);
        }
        return false;
      }
    
      checkMaxCapacityInSecureZone(): boolean {
        const secureZoneIndex = this.artGuardSystem.zones.findIndex(z => z.name === "Strefa Zabezpieczona");
        return this.artGuardSystem.zones[secureZoneIndex].employees.length <= this.artGuardSystem.zones[secureZoneIndex].maxCapacity;
      }
    
      checkJanitorAccessWithoutOtherEmployee(janitor: Employee): boolean {
        const accessibleZones = this.artGuardSystem.zones.filter(zone => 
          janitor.card && janitor.card.canAccess(zone)
        );
      
        return accessibleZones.every(zone => 
          zone.employees.some(e => e.type !== CardType.Janitor)
        );
      }
    
      checkOperationZoneWithoutSeller(seller: Employee): boolean {
        const operationZoneIndex = this.artGuardSystem.zones.findIndex(z => z.name === "Strefa Operacyjna");
        return !seller.card || !seller.card.canAccess(this.artGuardSystem.zones[operationZoneIndex]);
      }
  
    runAllTests() {
      // Run all the tests and log the results to the console
      console.log("Test moveCardFromExternalToTransaction:", this.moveCardFromExternalToTransaction(this.manager));
      console.log("Test moveCardFromTransactionToOperation:", this.moveCardFromTransactionToOperation(this.manager));
      console.log("Test checkMaxCapacityInSecureZone:", this.checkMaxCapacityInSecureZone());
      console.log("Test checkJanitorAccessWithoutOtherEmployee:", this.checkJanitorAccessWithoutOtherEmployee(this.janitor));
      console.log("Test checkOperationZoneWithoutSeller:", this.checkOperationZoneWithoutSeller(this.seller));
    }
  }