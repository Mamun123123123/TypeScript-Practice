const add = (num1 : number | string,num2:number|string) =>{
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1+num2
    }else{

       return num1.toString() + num2.toString()
    }
}
console.log(add(2,"3"));
const sub = (num1 : number | string,num2:number|string) =>{
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1-num2
    }else{

       return num1.toString() + num2.toString()
    }
}
console.log(sub(2,"3"));

// in guard
