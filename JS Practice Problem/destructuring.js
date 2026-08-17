numbers = [1, 2, 3, 4, 5];
const [first, second,,, fifth] = numbers;
console.log(first, second, fifth); // Output: 1 2 5

const student = {
    name: "Utsho",
    roll: 29,
    age: 26, 
    marks: {
        physics: 95,
        philosophy: 91,
        math: 44
    }
}
// const name = student.name
// const roll = student.roll
// const math = student.marks.math
const { age , name:fullName, marks: { philosophy, physics:myPhysics } } = student

console.log(age, fullName,  philosophy, myPhysics);