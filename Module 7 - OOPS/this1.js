// Topic :- this with node.js (without strict mode)  

//=============================================================
// console.log(this)  // ouput :  {} (empty object)


/*
// this in a function  =============================================================

function test() {
    console.log(this)  // Global object
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


// console.log(myObj.myFunc())  // undefined
// console.log(myObj.myFunc)   // [Function: myFunc]

*/



// ================================================================

let myObj2 = {
    name: "Neeraj",
    age: 24,

    myFunc2: function () {
        function myFunc3() {
            console.log(this)   // here also global object
        }
        myFunc3()
    }
}
myObj2.myFunc2()