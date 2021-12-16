import { Person } from './Person.js';
export class Teacher extends Person{
    constructor(name,degree){
        //if you need parent override use super to define basic args in parent  
        super(name);
        this.degree = degree;
    }
}

const teacher = new Teacher('mahmoud');
teacher.getName();

// if you use export default in parent class you dont need use  this {} with import
// else actually you need use this {} 