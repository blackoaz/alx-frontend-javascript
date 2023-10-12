;
var student1 = {
    firstName: "Paul",
    lastName: "Akello",
    age: 20,
    location: "California"
};
var student2 = {
    firstName: "Paulo",
    lastName: "Akello",
    age: 22,
    location: "Nairobi"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var headerRow = table.insertRow(0);
var headerCell1 = headerRow.insertCell(0);
headerCell1.textContent = "First Name";
var headerCell2 = headerRow.insertCell(1);
headerCell2.textContent = "Location";
studentsList.forEach(function (student, index) {
    var row = table.insertRow(index + 1);
    var cell1 = row.insertCell(0);
    cell1.textContent = student.firstName;
    var cell2 = row.insertCell(1);
    cell2.textContent = student.location;
});
