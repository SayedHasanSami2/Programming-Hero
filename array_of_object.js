const addGrade = ( students) =>{
    const students2 = students.map((student) => {
        return {
            CGPA : student.mark / 20,
        }
    });
    console.log(students);
    console.log(students2);
}

let students = [
    {name: "Habib", mark: 90},
    {name: "Rafi", mark: 80},
    {name: "Rafi", mark: 70},
]

addGrade(students);