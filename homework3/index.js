//1
function createArray(start, end){
    let arr = [];
   for(let i = start; i <= end; i++) {
        arr.push(i)
   }
   return arr;
}
console.log(createArray(2,10))

//2
//Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
// 1,2,2,3,3,3...

function integerArray(a,b){
   let arr = [];
   for (let i = a;i<b; i++ ){
        for (let m = 0; m < i - a+1; m++ ){
            arr.push(i)
        }
   }
   return arr;
}

console.log(integerArray(1,10))

//3
function randArray(k){
    let arr = [];
    for(let i = 0; i<k; i++ ){
        const randomNumber = Math.floor(Math.random()*500 + 1);
        arr.push(randomNumber)
    }

    return  arr
}

console.log(randArray(7))

//4
function compact(arr) {
    const newArr = [];
    for(i=0; i < arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr
}
const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2);

//5

function sortedArray(arr3) {
    let numbersArray = [];
    let stringArray = [];
  
    for (let i = 0; i < arr3.length; i++) {
      if (Array.isArray(arr3[i])) {
        let nestedArrays = sortedArray(arr3[i]);
        numbersArray = numbersArray.concat(nestedArrays[0]);
        stringArray = stringArray.concat(nestedArrays[1]);
      } else if (typeof arr3[i] === "number") {
        numbersArray.push(arr3[i]);
      } else if (typeof arr3[i] === "string") {
        stringArray.push(arr3[i]);
      }
    }
  
    return [numbersArray, stringArray];
  }
  
  let arr3 = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
  let arrNew = sortedArray(arr3);
  
  console.log(arrNew);

  //6
  function calc(a, b, op) {
    let result;
  
    switch (op) {
      case 1:
        result = a - b;
        break;
      case 2:
        result = a * b;
        break;
      case 3:
        result = a / b;
        break;
      default:
        result = a + b;
        break;
    }
  
    return result;
  }
  
  console.log(calc(10, 3, 1));

 //7
 function findUnique(arr){
    const counter = {};
    for (let i = 0; i<arr.length; i++){
        const element = arr[i];
        counter[element] = (counter[element] || 0 ) + 1
    if (counter[element] > 1){
        return false
    }
    }
return true;
 }
 console.log(findUnique([1, 2, 3, 5, 3]));
 console.log(findUnique([1, 2, 3, 5, 11]))




