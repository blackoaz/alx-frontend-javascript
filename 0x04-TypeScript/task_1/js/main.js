var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    var initial = firstName.charAt(0);
    var fullName = "".concat(initial, ". ").concat(lastName);
    return fullName;
};
console.log(printTeacher('Jane', 'Doe'));
