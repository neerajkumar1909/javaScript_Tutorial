'use strict'
// this keyword in browser  (without use strict)

// ==============================================
// console.log(this)    // output : window object

/*
// this in a function  =============================================================

function test() {
    console.log(this)  // output : window object
}
test()
*/


/*
// =============================================================

// if the function that is being referenced is a method in an object, "this" references the object itself

let myObj = {
    name: "Neeraj",
    age: 24,

    myFunc: function () {
        console.log(this)  // { name: 'Neeraj', age: 24, myFunc: [Function: myFunc] }
        console.log(this.name)  // Neeraj
    }
}
myObj.myFunc()
*/


/*
// ================================================================

let myObj2 = {
    name: "Neeraj",
    age: 24,

    myFunc2: function () {
        function myFunc3() {
            console.log(this)   // ouput : window object 
        }
        myFunc3()
    }
}
myObj2.myFunc2()
*/