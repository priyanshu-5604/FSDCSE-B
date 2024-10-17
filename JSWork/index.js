console.log("Welcome");
var a=12;
console.log(a);
if(a>10){
    var a=23;
    console.log("a inside"+a);
}
console.log("a outside"+a);
let myname="Amul"
let col = "ABES"
let res = `HI,my name is ${myname}`;
console.log(res);

// Objects in Js 

const student=[
{
    sname:"Amit",
    course:"B.tech",
    college:"ABES"
},
{
    sname:"Amit2",
    course:"B.tech1",
    college:"ABES1"
}
]
console.log(student[1]);
// console.log("name "+student.sname+" course "+student.course);
// const {sname}=student;  //destructuring of object
// console.log(sname);

//function
function greeting(msg="Welcome"){
    console.log("good noon "+msg);
}
greeting("greetings");

function sum(a,b,c=23){
    return a+b+c;
}
let d = sum(12,20);
console.log(d);


// function SelectLanguage(lang){
//    let data;
//    if(lang=="c"){
//        function cCompiler(){
//            return "ccompiler";
//         }
//         data = cCompiler();
//     }
//     if(lang=="java"){
//         function jCompiler(){
//             return "Jcompiler";
//         }
//         data = jCompiler();
//     }
//     return data;
// }
// let result = SelectLanguage("c");
// console.log(result);

console.log("Hello, World");
let parent = document.getElementsByClassName("parent");
console.log(parent);
parent[0].innerText = "Data has changed";