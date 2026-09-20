let array = [1, 2, 3, 4, 5]
let double = []

// for(let i =0 ; i < array.length; i++){
//     double.push(array[i] * 2)
// }

double = array.map((num) => num * 2);

console.log(double);

// for each method
let rools = [10 , 20, 30, 40, 50]
rools.forEach((element, index, arr)=> {
    console.log(element, index, arr);
})


// filter method
let elements = [10, 20, 30, 40, 50]
let filtered = elements.filter((num) => num > 25);

console.log(filtered);

// find method
let found = elements.find((num) => num > 25);
console.log(found);

// slice method
let sliced = elements.slice(1, 4);
console.log(sliced);

// template string
let name = "Alice";
let age = 30;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);