import {square, add, getName} from "./link";

alert(square(20));
alert(add(30));


let userInfo = {
    name: "megha",
    age: "22",

    "education": {
        school: "H. B. Vidhyalaya",
        college: "Ganpat Univercity"
    }
};
let {name, age} = userInfo;

alert(getName(name));

let {school} = userInfo.education;
let detail = "My school name is: " + school;
let myAge = " \n I am " + age + " years old.";
alert(detail+myAge);


//==> for function
/*let printMessage=(hello)=>{
    alert(hello);

};*/

//printMessage("hello megha!!!");
/*import date from "./datetime";

alert (date.myDateTime());*/

