//1


function isTrue(a,b,c){
   if(a<b && b<c === true){
   return(`True`)
} else {
    return(`False`)
}
}

console.log(isTrue (3,4,7));

//2
let x = 1;
let y = 2;

let res1 = `${x}${y}`
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 =`${x<y}2` // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x<y// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 =(y / (x-1))*0 ;// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""\\


//3
let answer = +prompt(`Are you adult? Type here your age `);

function isAdult(answer){
if(answer >= 18){
    return `You are adult` 
} else {
  return `You are too young!`
}
}

console.log(isAdult(answer));

//4
let a = parseFloat(prompt(`Length first side of triangle`));
let b = parseFloat(prompt(`Length second side of triangle`));
let c = parseFloat(prompt(`Length third side of triangle`));

function isCorrect(){
    if(a > 0 && b > 0 && c > 0 ){
        return `everthyng is ok`
    } else {
        return `incorrect data`
    }
}
console.log(isCorrect(a,b,c))

let semiPerimeter = (a+ b + c) / 2;
let area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));

console.log(`Area of triangle is ${area.toFixed(3)}`)

function isRightTriangle (){
    if((a * a + b * b === c * c) || (a * a + c * c === b * b) || (b * b + c * c === a * a)){
        return `Triangle is right`
    } else {
        return `Triangle isn't right`
    }
}

console.log(isRightTriangle(a,b,c))

//5

let now = new Date();
let currentHour = now.getHours()
console.log(currentHour)

function sayHello(){
    if (currentHour >= 23 && currentHour < 5 ){
        return `Доброї ночі`
    } else if (currentHour >= 5 && currentHour < 11){
        return `Доброго ранку`
    } else if (currentHour >= 11 && currentHour < 17){
        return `Доброго дня`
    } else if (currentHour >= 17 && currentHour <  23){
        return `Доброго вечора`
    } 
}

console.log(sayHello());


switch (true) {
  case (currentHour >= 23 || currentHour < 5):
    console.log("Доброї ночі");
    break;
  case (currentHour >= 5 && currentHour < 11):
    console.log("Доброго ранку");
    break;
  case (currentHour >= 11 && currentHour < 17):
    console.log("Доброго дня");
    break;
  default:
    console.log("Доброго вечора");
    break;
}

//6 


