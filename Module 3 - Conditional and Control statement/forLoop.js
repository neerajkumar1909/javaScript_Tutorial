// for loop ==============================

var a = "Hello world";
for (i = 0; i <= 10; i++) {
    console.log(a)
}

// you have an array and you have to square each element of that array

var num = [2, 3, 4, 5, 6, 7, 8];

/*  explaination , how to sqare one by one
var firstNum = num[0] * num[0];
var squaredArray = [firstNum];

var secondNum = num[1] * num[1];
squaredArray.push(secondNum);

console.log(squaredArray);
*/

let squaredArray = [];
for (i = 0; i < num.length; i++) {
    squaredArray.push(num[i] * num[i])
}
console.log(squaredArray)