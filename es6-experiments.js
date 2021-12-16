// const person = {
//     name: 'ahmed',
//     walk() {
//         console.log(this);
//     }
// };
// const walk = person.walk.bind(person)
// walk();



//arrow function 
// const fun = name => name;
// const fun = () => { return any thing };
// const fun = number => number * number;
// const fun = name => { return name };
// const fun = (name, age) => { };



// filter method
// const jobs = [
//     { id: 1, isActive: true },
//     { id: 2, isActive: true },
//     { id: 3, isActive: false },
// ];
// const activeJobs = jobs.filter( job =>  job.isActive );



//this with arrow function 
// const testThis = {
//     name: 'test',
//     def() {
//         // here this is returned window object
//         setTimeout(function () {
//             console.log(this);
//         });
//         // here this is returned this object
//         setTimeout(() => {
//             console.log(this);
//         });
//     }
// }



//array map
// const colors = ['red','green','blue'];
// const items  = colors.map(color => `<li>${color}</li>`);



//object destructing
// const address = {
//     street:'test',
//     city:'',
//     country:''
// }

// if you need use this method you must need the :st like as st 
// const {street:st , city, country} = address;
// console.log(st); // return street value in address object



//spread operator with array
// const first  = [1,2,3];
// const second = [4,5,6];
// const combined = [...first,...second];

//the next ex is just working with array
// const combined = first.concat(second);



//spread operator with object
// const first  = {name:'ahmed'};
// const second = {job:'developer'};
// const combined = {...first,...second};



//classes

// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     getName(){
//         console.log(this.name);
//     }
// }

// const person = new Person('ahmed');
// person.getName();



// //inheritance
// class Teacher extends Person{
//     constructor(name,degree){
//         //if you want to  parent override use super to define basic args in parent  
//         super(name);
//         this.degree = degree;
//     }
// }

// const teacher = new Teacher('mahmoud');
// teacher.getName();