"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let isdriveingAllowed=true;
var isdriveingAllowed = true; //same as above 
var age = 21;
var name = "Ayush Yadav";
// template string or templte literals aloow us to write a paragraph in different line 
var para = "Hello I am ".concat(name, " i am learning Typescript an \ni am allowed for driving ").concat(isdriveingAllowed);
console.log(para);
var num1List = [2, 4, 6];
var numlist2 = [2, 5, 6];
// tuple used to store multiple data type data but sequence should be followed and it can store only one item
var empList = ["Ayush", 21,];
// enum is used to giving friendly name value to set of numbers
var month;
(function (month) {
    month[month["Jan"] = 0] = "Jan";
    month[month["Feb"] = 1] = "Feb";
    month[month["March"] = 2] = "March";
    month[month["April"] = 9] = "April";
    month[month["May"] = 10] = "May";
})(month || (month = {}));
;
var m = month.May;
console.log(m);
//  any data type 
var xvar = 10;
xvar = "Ayush";
console.log(xvar);
var xvalue = [1, 2, 3, 4, 5];
xvalue = ["Ayush", "Yadav"];
console.log(xvalue);
var somewher = 10;
somewher.concat('abc');
function hasIdProperty(obj) {
    return !!obj && typeof obj === "object" && "id" in obj;
}
if (hasIdProperty(somewher))
    console.log(somewher.id);
