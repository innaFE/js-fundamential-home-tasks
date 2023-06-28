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