export {}

function employeeDetails(employee:{firstName:String,lastName:String})
{
    console.log(`The Full Name is ${employee.firstName} ${employee.lastName}`)

}
let emp1={firstName:"Ayush",lastName:"Yadav"}
employeeDetails(emp1);