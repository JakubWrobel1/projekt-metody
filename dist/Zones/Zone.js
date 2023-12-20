export class Zone {
    constructor(name, capacity, id) {
        this.employees = [];
        this.name = name;
        this.capacity = capacity;
        this.id = id;
        this.currentOccupancy = 0;
    }
    getZoneName() {
        return this.name;
    }
    getZoneId() {
        return this.id;
    }
    isFull() {
        return this.currentOccupancy >= this.capacity;
    }
    addEmployee() {
        if (!this.isFull()) {
            this.currentOccupancy++;
            return true;
        }
        else {
            return false;
        }
    }
    removeEmployee() {
        if (this.currentOccupancy > 0) {
            this.currentOccupancy--;
        }
    }
    hasEmployee() {
        return this.employees.length > 0;
    }
}
