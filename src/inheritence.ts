class Parent {
    constructor(public name : string,public age : number,public address : string){}
    getSleep(numOfHours:number):void{
        console.log(`${this.name} Daily ${numOfHours} gumai`);
        
    }
}
class Student extends Parent {}
const Student1 = new Student("mamun",22,'Dhaka')
Student1.getSleep(22)