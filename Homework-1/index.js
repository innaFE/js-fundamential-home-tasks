//2
console.log(`Denhub`)
//3
let a = 2;
let b = "Hello";

document.write(a,b)
document.write("<br>")
 b = a;
 document.write(b)
 document.write("<br>")

//4
let obg = { 
"String": "Hello",
"Number": 2,
"Boolean": true ,
"Undefined": undefined,
"Null":null 
}

//5
result = confirm("Are you adult?")

//6
const myFirstName =  "Inna";
const  mySecondName = "Denhub";
const myGroup = "js Fundamental June";
const birthYear = 1993;
const married = true;
let pet;
let badHabbits = null;

console.log(typeof(birthYear), typeof(married), typeof(myFirstName),typeof(mySecondName), typeof(myGroup), typeof(pet),typeof(badHabbits));

//7
let login = prompt(`Type your login`);
let email = prompt(`Type your email`);
let password = prompt(`Type your password`);

document.write(`Dear user, your login is ${login}, your email is ${email}, your password is ${password}`);
document.write("<br>")
//8
const secondsInHour = 60*60
const secondsInDay = secondsInHour * 24
const secondsInMonth = secondsInDay*30

document.write(`In one hour ${secondsInHour} seconds, in one day ${secondsInDay} in month ${secondsInMonth}`)

