export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  const studentsInCity = students.filter((student) => student.location === city);

  const updatedStudents = studentsInCity.map((student) => {
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

    if (gradeObject) {
      return { ...student, grade: gradeObject.grade };
    }
    return { ...student, grade: 'N/A' };
  });

  return updatedStudents;
}
