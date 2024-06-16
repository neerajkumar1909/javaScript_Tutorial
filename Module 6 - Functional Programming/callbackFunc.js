// Callback : In JavaScript, a callback is a function in which a function is passed as an argument

/*
function printFirstName(firstName, callback) {
    console.log(firstName);
    callback('Jobs')
}



function printLastName(lastName) {
    console.log(lastName)
}


printFirstName("Steve", printLastName)   // here callback works

*/


// Lets take another example of callback function

function isEven(n) {
    return n % 2 == 0     // this condition will return true and false 
}

let printResult = (evenFn, num) => {
    const isEvenNum = evenFn(num)

    console.log(`The given number ${num} is even : ${isEvenNum}`)
}

printResult(isEven, 9)