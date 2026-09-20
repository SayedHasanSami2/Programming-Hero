function studentIntroduction(student) {
  if (!student || typeof student !== "object" || Array.isArray(student)) {
    return "Invalid";
  }

  const { name, age, course } = student;

  if (!name || !age || !course) {
    return "Invalid";
  }

  return `My name is ${name}. I am ${age} years old. I am learning ${course}.`;
}

console.log(studentIntroduction({ name: "Sadia", age: 22, course: "React" }));
console.log(studentIntroduction({}));
console.log(studentIntroduction("student"));