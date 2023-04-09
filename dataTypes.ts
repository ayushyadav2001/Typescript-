export{}
// let isdriveingAllowed=true;
let isdriveingAllowed :boolean=true; //same as above 
let age :number=21;
let name:string="Ayush Yadav"

// template string or templte literals aloow us to write a paragraph in different line 
let para=`Hello I am ${name} i am learning Typescript an 
i am allowed for driving ${isdriveingAllowed}`
console.log(para);

let num1List:number[]=[2,4,6];
let numlist2:Array<number>=[2,5,6];

// tuple used to store multiple data type data but sequence should be followed and it can store only one item


let empList:[String,number]=["Ayush",21,];
// enum is used to giving friendly name value to set of numbers
enum month {Jan,Feb,March,April=9,May };
 let m :month=month.May;
 console.log(m);

//  any data type 
let xvar:any=10;
xvar="Ayush";
console.log(xvar);

let xvalue:any[]=[1,2,3,4,5];
xvalue=["Ayush","Yadav"];
console.log(xvalue);

let somewher:unknown=10; 
(somewher as String).concat('abc')
function hasIdProperty(obj:any):obj is{id:number}{
    return !!obj &&typeof obj ==="object" && "id" in obj;

}
if(hasIdProperty(somewher))
console.log(somewher.id)