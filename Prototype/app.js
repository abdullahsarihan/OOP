// const object = new Object(); // Object Literal
// const object2 = new Object();
// object.name = "Abdullah"
// console.log(object);

// function Employee(name,age){
//     this.name = name;
//     this.age = age;
//     this.showInfos = function(){
//         console.log("Bilgiler Gösteriliyor...");
//     }
//     this.toString = function(){
//         console.log("Bu bir Employee Objesidir...");
//     }
// }
// const emp1 = new Employee("Abdullah",30);
// console.log(emp1);

// console.log(emp1,toString());

function Employee(name,age){
        this.name = name;
        this.age = age;
   
}
Employee.prototype.showInfos = function(){
    console.log("isim: " + this.name + " Yaş: " + this.age);
}



const emp1 = new Employee("Abdullah",30);
const emp2 = new Employee("Ahmet",25);

emp2.showInfos();
console.log(emp1);
console.log(emp2);
