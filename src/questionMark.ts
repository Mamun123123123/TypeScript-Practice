//ternery operator
const x = (age:number)=>{
    const result = age>=18 ? "yes" : "No"
    console.log(result);
    
}
x(22)
//nullish
// const y = 10; // 10
const y = null;//nullish
const z = y ?? "nullish" // y ar value null / undefiend hole kaj korbe
console.log(z);
 //x?.address optional chaining
