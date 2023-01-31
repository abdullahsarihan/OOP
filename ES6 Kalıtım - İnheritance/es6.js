class Person { // Superclass, BaseClass, Üst Sınıf
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim: " + this.name + " Yaş: " + this.age);
    }
}

class Employee extends Person { // DerivedClass, Subclass, ChildClass 
    constructor(name,age,salary){
        // this.name = name;
        // this.age = age;
        super(name,age); //üst sınıfın constructor ını kullanmak istediğimizi belirtir.
        this.salary = salary;
    }
    showInfos(){ // Overriding
        console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }
    toString(){ // Overriding
        console.log("Employee");
    }
    raiseSalary(amount){ // Ekstra Metot
        this.salary +=  amount;
    }
}
const emp = new Employee("Abdullah",30,15000);
emp.raiseSalary(500);
// console.log(emp);
// emp.showInfos();

emp.showInfos();
emp.toString();