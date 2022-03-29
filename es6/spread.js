let arr=[1,2,3,4];
let arr2=[5,6,7,8];
let combo=[...arr,...arr2];
let obj={
    name: "sam", city:"pune"
}
let newobj={
    ...obj,city:"Mumbai",age:22
}

console.log(combo);
console.log(newobj);