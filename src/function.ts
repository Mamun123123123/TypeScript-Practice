function add (num1:number,num2:number):number {
    return num1+num2;
}
const x = add(2,4)
// console.log(x);

const addArrow = (num1:number,num2:number) : number => num1 + num2
const z = addArrow(5,6)
// console.log(z);

//object => function => method

const poorUser = {
    name:"mamun",
    balance:0,
    addBalance(value:number):number {
       const total =  this.balance + value
       return total
    }
}
const u = poorUser.addBalance(100)
// console.log(u);

const arr:number[] =[1,2,3,4]
const result = arr.map((item:number):number=>item*2)
console.log(result);

