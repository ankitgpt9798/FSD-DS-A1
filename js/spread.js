const arr1=[1,2,3];
const arr2=[...arr1,4,5,6]
console.log(arr2)


let arr3 = [1, 2];
let arr4 = [3, 4];
let merged = [...arr3, ...arr4];
console.log(merged); 

function sum(a, b, c) {
 return a + b + c;
}
let numbers = [10, 20, 30];
console.log(sum(...numbers)); 

const obj1 = { name: 'Alice', age: 25 };
const obj2 = { location: 'NYC', age: 30 };
const mergede = { ...obj1, ...obj2 };
console.log(mergede); 