export {}
function multiply(num1,num2)
{
    return  num1*num2;
}
console.log(multiply(2,2));

function typecheckMul(num1:number,num2:number):number// with return type number 
{
    return num1*num2;
}
console.log(typecheckMul(2,3));
// console.log(typecheckMul(2,"3")); not aloowed 

// number 2 is optional 
function optionalTypecheckMul(num1:number,num2?:number):number// with return type number 
{
    if(num2){
        return num1*num2;

    }
    return num1;
}
console.log(optionalTypecheckMul(5));
console.log(optionalTypecheckMul(5,2));

// default value 
function optionalTypecheckMulDef(num1:number=2,num2:number=3):number// with return type number 
{
    if(num2){
        return num1*num2;

    }
    return num1;
}
// default value takes undefine it value
console.log(optionalTypecheckMulDef(5,2));
console.log(optionalTypecheckMulDef());