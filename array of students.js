
// Array of student objects
const students = [
    { name: "max", age: 18, grade: "A" },
    { name: "sandy", age: 19, grade: "B" },
    { name: "Charity", age: 17, grade: "A" },
    { name: "David", age: 20, grade: "C" },
    { name: "samson", age: 18, grade: "B" }
];


function filterByGrade(studentsArray, grade) {
    return studentsArray.filter(student => student.grade === grade);
}

function averageAge(studentsArray) {
    const totalAge = studentsArray.reduce((sum, student) => sum + student.age, 0);
    return totalAge / studentsArray.length;
}

const gradeAStudents = filterByGrade(students, "A");
console.log("Students with grade A:", gradeAStudents);

const avgAge = averageAge(students);
console.log("Average age of students:", avgAge);
