"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function employeeDetails(employee) {
    console.log("The Full Name is ".concat(employee.firstName, " ").concat(employee.lastName));
}
var emp1 = { firstName: "Ayush", lastName: "Yadav" };
employeeDetails(emp1);
