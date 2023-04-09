"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.display = function () {
        console.log("my name is ".concat(this.name));
    };
    return Student;
}());
var stu1 = new Student("Ayush");
console.log(stu1.name);
stu1.display();
var HeadStudent = /** @class */ (function (_super) {
    __extends(HeadStudent, _super);
    function HeadStudent(headStudentName) {
        var _this = _super.call(this, headStudentName) || this;
        _this.isHead = true;
        return _this;
    }
    HeadStudent.prototype.detailsOfHead = function () {
        console.log("i am Head Student");
    };
    return HeadStudent;
}(Student));
var hs = new HeadStudent("Ayush");
hs.detailsOfHead();
console.log(hs.display());
console.log(hs.isHead);
