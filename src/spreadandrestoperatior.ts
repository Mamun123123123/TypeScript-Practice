//spread operator
const friends = ["mamun","rahim"]
const clgFriends = ["am","jam"]
const unfriends = ["ch","jk"]
friends.push(...clgFriends)
// console.log(friends);

const user = {
  name:"Mamun",
  phonNo:12343435
}
const otherinfo = {
    address:"Dhaka"
}
const userInfo = {...user,...otherinfo}
console.log(userInfo);

//rest Operator

const allFriends = (...f:string[]) =>{
    f.forEach((item:string)=>console.log(item));
    
}
allFriends("mamun","all","e")

