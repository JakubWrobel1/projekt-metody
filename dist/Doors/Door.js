export class Door {
    constructor(doorId, sourceZoneId, targetZone, accessCardTypes, doorDescription) {
        this.cityGallery = null;
        this.observers = [];
        this.isOpen = false;
        this.lastEmployee = null;
        this.doorId = doorId;
        this.sourceZoneId = sourceZoneId;
        this.targetZone = targetZone;
        this.accessCardTypes = accessCardTypes;
        this.doorDescription = doorDescription;
    }
    setCityGallery(cityGallery) {
        this.cityGallery = cityGallery;
    }
    canEmployeeAccess(employee, employees, targetZone) {
        if (!this.cityGallery) {
            console.error("Brak przypisanej CityGallery do drzwi.");
            return false;
        }
        if (employee.getCard().galleryId !== this.cityGallery.id) {
            return false; // Pracownik nie ma dostępu, jeśli id galerii się nie zgadza
        }
        if (employee.Card.type === "Dozorca") {
            return employees.some((emp) => emp.currentZone.id === targetZone.id && emp.Card.type !== "Dozorca"); // Uproszczona logika dla dozorców
        }
        return this.accessCardTypes.includes(employee.Card.type);
    }
    canEmployeeUseDoor(employee) {
        return employee.currentZone.id === this.sourceZoneId;
    }
    getIsOpen() {
        return this.isOpen;
    }
    attach(observer) {
        this.observers.push(observer);
    }
    detach(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    openDoorFor(employee) {
        this.lastEmployee = employee;
        this.notify(); // Zakładam, że ta metoda zmienia stan drzwi i wywołuje notify
    }
    getLastEmployee() {
        return this.lastEmployee;
    }
    getTargetZoneName() {
        return this.targetZone.getZoneName();
    }
}
