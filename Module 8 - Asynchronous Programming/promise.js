// there are four stages of promise : Pending state, Fulfilled State, Rejected, Setteled


// How to produce promise

/*
// 1. Pending State ============================================================================
let myPromise = new Promise(function (resolve, rejected) {
    const a = 4;
    const b = 4;

    setTimeout(() => {
        if (a === b) {
            resolve()
        }
        else {
            rejected()
        }
    }, 2000)
})

console.log(myPromise)  // output : Promise { <pending> }
*/

/*
// 2. Fulfilled Method  ==========================================================================
let myPromise = new Promise(function (resolve, rejected) {
    const a = 4;
    const b = 5;

    setTimeout(() => {
        if (a === b) {
            resolve('Both the values are equal')
        }
        else {
            rejected('The values are not equal')
        }
    }, 2000)
})

myPromise
    .then(function (result) {         // here, function(result) is equal to the resolve()
        console.log(result)
    })

// here , if we changes the value of variable a and b, it and without catch method writing here, it will throw an error, because we haven't define the rejected function

*/


// 3. Rejected Method  ==========================================================================
let myPromise = new Promise(function (resolve, rejected) {
    const a = 4;
    const b = 5;

    setTimeout(() => {
        if (a === b) {
            resolve('Both the values are equal')
        }
        else {
            rejected('The values are not equal')
        }
    }, 2000)
})

myPromise
    .then(function (result) {         // here, function(result) is equal to the resolve()
        console.log(result)
    })
    .catch(function (rej) {
        console.log(rej)
    })




// 4. So, whether your promise will get resolved and rejected your promise SETTELED .