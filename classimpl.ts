export {}
class Student{
    name:String

    constructor(name:String){
        this.name=name;
    }
    display(){
        console.log(`my name is ${this.name}`);
    }

}
let stu1=new Student("Ayush")
console.log(stu1.name);
stu1.display(); 

class HeadStudent extends Student{
    isHead:boolean=true;

    constructor(headStudentName:String){
        super(headStudentName);
    }
    detailsOfHead(){
        console.log("i am Head Student")
    }
    
    
}
let hs=new HeadStudent("Ayush");
hs.detailsOfHead();
console.log(hs.display());
console.log(hs.isHead);