interface Employee{
    firstName:String,
    lastName:String
}
export {}

function employeeDetailsNew(employee:Employee)
{
    console.log(`The Full Name is ${employee.firstName} ${employee.lastName}`)

}
let emp1={firstName:"Ayush",lastName:"Yadav"}
employeeDetailsNew(emp1);