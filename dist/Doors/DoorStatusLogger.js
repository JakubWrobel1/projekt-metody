import { Door } from "./Door.js";
export class DoorStatusLogger {
    update(subject) {
        if (subject instanceof Door) {
            const lastEmployee = subject.getLastEmployee();
            const employeeName = lastEmployee
                ? lastEmployee.fullName
                : "Nieznany pracownik";
            const targetZoneName = subject.getTargetZoneName();
            console.log(`Drzwi do ${targetZoneName} zostały użyte przez ${employeeName}.`);
        }
    }
}
