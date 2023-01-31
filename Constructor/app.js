// console.log(window);
// console.log(this); // Global Scope

// const emp1 = { // Object Literal
//     name: "Abdullah",
//     age:30,
//     showInfos:function() {console.log("Bilgiler gösteriliyor");}
// };

// const emp2 = {
//     name: "Kumru",
//     age:24,
// };
// // emp1.salary = 15000;
// // emp1.showInfos();

// console.log(emp1);

// function Employee() { // Yapıcı Fonksiyon - Constructor
    // this.name = "Abdullah";

// }

// const emp1 = new Employee();
// const emp2 = new Employee();
// console.log(emp1);
// console.log(emp2);

function Employee(name,age,salary) { // Yapıcı Fonksiyon - Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
    // console.log(this);

}

const emp1 = new Employee("Abdullah",30,15000)
const emp2 = new Employee("Ahmet",25,5000)

// console.log(emp1);

emp1.showInfos();
emp2.showInfos();