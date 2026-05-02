//array , object

let arr = [1,2,3,4]
let str:(string | number)[]= [1,"mamun"]

// console.log(str);

let all:[string,boolean,boolean] = ["hello",false,true]

//reference type : object

// object type
const user: {
  readonly organization: string;
  firstName: string;
  LastName: string;
  isActive: boolean;
  description: {
    address: string;
    location: string;
  };
} = {
  organization: "Hello",
  firstName: "Abdullah",
  LastName: "Mamun",
  isActive: true,
  description: {
    address: "Dhaka",
    location: "None",
  },
};

const x = user.description.address;
console.log(x);