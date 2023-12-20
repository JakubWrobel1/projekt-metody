window.onload = () => {
 
  updateZoneLists();
  // Obsługa kliknięcia przycisku
  document.getElementById('door-1')?.addEventListener('click', () => {
      const selectedEmployeeId = getSelectedEmployeeId();
      let employee = getEmployeeCardTypeById(selectedEmployeeId)
      if (employee && door1.canEmployeeAccess(employee)) {
          updateEmployeeZone(selectedEmployeeId, transactionZone);
        
          updateEmployeeList();
          updateZoneLists();
      }else{
        console.log("ERROR")
      }
      
      
  });

  // ... reszta kodu
};
enum CardType {
  Manager = "Manager",
  Guard = "Guard",
  Operator = "Operator",
  Trader = "Trader",
  Janitor = "Janitor"
}


class Door{
  doorId: number;
  accessCardTypes: CardType[]
  constructor(doorId: number, accessCardTypes: CardType[]){
    this.doorId = doorId;
    this.accessCardTypes = accessCardTypes;
  }

  canEmployeeAccess(cardType: CardType): boolean {
    return this.accessCardTypes.includes(cardType);
}
}

const door1 = new Door(1, [CardType.Manager ,CardType.Janitor])

class Zone {
  name: string;
  capacity: number;

  constructor(name: string, capacity: number) {
      this.name = name;
      this.capacity = capacity;
  }
  getZoneName(){
    return this.name
  }
}

let securityZone = new Zone("Strefa Zabezpieczeń", 10);
let operationalZone = new Zone("Strefa Operacyjna", 20);
let transactionZone = new Zone("Strefa Transakcji", 30);
let externalZone = new Zone("Strefa Zewnętrzna", 40);

// Możesz przechowywać te strefy w tablicy lub innym odpowiednim miejscu.


class Employee {
    id: number;
    fullName: string;
    cardType: CardType;
    currentZone: Zone;
    constructor(id: number, fullName: string, cardType: CardType, currentZone: Zone = externalZone) {
        this.id = id;
        this.fullName = fullName;
        this.cardType = cardType;
        this.currentZone = currentZone
    }


    updateZone(newZone: Zone) {
      this.currentZone = newZone;
  }
  getCardType(){
    return this.cardType
  }

    getZoneName(): Zone{
      return this.currentZone
    }
}

// Przykład użycia
// Kontynuacja z poprzedniego przykładu...

let employees: Employee[] = [
  new Employee(22, "Marek Nowak", CardType.Manager),
  new Employee(123, "Anna Kowalska", CardType.Guard),
  // ... więcej pracowników
];

      

function updateEmployeeList() {
  let selectElement = document.getElementById('employeeList') as HTMLSelectElement;
  selectElement.innerHTML = ''; // Wyczyść obecną listę

  // Dodaj opcję domyślną
  const defaultOption = document.createElement('option');
  defaultOption.text = 'Wybierz pracownika';
  selectElement.appendChild(defaultOption);

  // Dodaj pracowników do listy
  employees.forEach(employee => {
      const option = document.createElement('option');
      option.value = employee.id.toString();
      option.text = employee.fullName + ' - ' + employee.cardType + ' - ' + employee.getZoneName().getZoneName();
      selectElement.appendChild(option);
  });
}
updateEmployeeList()

function updateEmployeeZone(employeeId: number,newZone: Zone) {
  const employee = employees.find(e => e.id === employeeId);
  if (employee) {
      employee.updateZone(newZone);
      console.log(`${employee.fullName} przeniósł się do strefy ${newZone.getZoneName()}`);
  }
}
function getSelectedEmployeeId(): number {
  return parseInt((document.getElementById('employeeList') as HTMLSelectElement).value, 10);
}

function getEmployeeCardTypeById(employeeId: number): CardType | null {
  const employee = employees.find(e => e.id === employeeId);

  if (employee) {
      return employee.cardType;
  } else {
      return null;
  }
}



function updateZoneLists() {
  // Pobierz elementy i sprawdź, czy istnieją
  const listSecurity = document.getElementById('listSecurity');
  const listOperational = document.getElementById('listOperational');
  const listTransaction = document.getElementById('listTransaction');
  const listExternal = document.getElementById('listExternal');

  if(listSecurity && listOperational && listTransaction && listExternal) {
      // Wyczyść obecne listy
      listSecurity.innerHTML = '';
      listOperational.innerHTML = '';
      listTransaction.innerHTML = '';
      listExternal.innerHTML = '';

      // Iteruj przez pracowników i dodaj ich do odpowiednich list
      employees.forEach(employee => {
          const listItem = document.createElement('li');
          listItem.textContent = employee.fullName;

          switch(employee.currentZone) {
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
