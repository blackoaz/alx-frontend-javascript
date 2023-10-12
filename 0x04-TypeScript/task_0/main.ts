interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student1: Student = {
    firstName: "Paul",
    lastName: "Akello",
    age: 20,
    location: "California"
}

const student2: Student = {
    firstName: "Paulo",
    lastName: "Akello",
    age: 22,
    location: "Nairobi"
}

const studentsList: Student[]  = [student1, student2]

const table = document.createElement("table");

const headerRow = table.insertRow(0);
const headerCell1 = headerRow.insertCell(0);
headerCell1.textContent = "First Name";
const headerCell2 = headerRow.insertCell(1);
headerCell2.textContent = "Location";

studentsList.forEach((student, index) => {
  const row = table.insertRow(index + 1);
  const cell1 = row.insertCell(0);
  cell1.textContent = student.firstName;
  const cell2 = row.insertCell(1);
  cell2.textContent = student.location;
});





