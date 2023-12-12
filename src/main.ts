
class SecurityZone{
     capacity:number = 2;
     employeeCount = 0;

     constructor(){
        const capacity:number = this.capacity;
        let employeeCount:number = this.employeeCount;
     }

     Check = ()=>{
        console.log(this.employeeCount)
     }
     
     Entry = (employee:EmployeeTypeGuard) =>{
     this.employeeCount++
}

}


class EmployeeTypeGuard{
    employeeName:string ="";
    
    constructor(employeeName:string){
        this.employeeName = employeeName
    }
}

class CardTypeGuard{

}

let strefa1 = new SecurityZone()
let pracownik = new EmployeeTypeGuard("TEST")
let pracownik2 = new EmployeeTypeGuard("TEST2")

strefa1.Entry(pracownik)
strefa1.Entry(pracownik2)
strefa1.Check()

