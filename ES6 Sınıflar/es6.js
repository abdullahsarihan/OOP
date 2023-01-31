// Syntactic Sugar

// function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype.showInfos = function(){
//     console.log("İsim" + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
// }
// const emp = new Employee("Abdullah",30,15000);

// console.log(emp);

class Employee {

    constructor(name,age,salary){ // Constructor
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    // Prototype i bu class ın içinde yazınca otomatik olarak
    //prototype ine ekler

    showInfos(){
        console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }

}

const emp = new Employee("Abdullah",30,15000);

// console.log(emp);
emp.showInfos();