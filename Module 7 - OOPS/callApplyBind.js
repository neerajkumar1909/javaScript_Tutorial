let person1 = {
    firstName: "Neeraj",
    lastName: "Kumar",
    age: 24,

    // printDetails: function () {
    //     console.log(`Hello, I am ${this.firstName} ${this.lastName}, I am ${this.age} years old`)
    // }
}

// Making it global :
let printDetails = function (city, post) {
    console.log(`Hello, I am ${this.firstName} ${this.lastName}, I am ${this.age} years old, 
                 I am from ${city}, I am ${post} in Paramount`)
}



// person1.printDetails()   // uncomment the printdetails first



//============================= CALL METHOD ===================================================
let person2 = {
    firstName: "Harkesh",
    lastName: "Kumar",
    age: 25
}

printDetails.call(person2, 'New Delhi', 'TPA')   // output : Hello, I am Harkesh Kumar, I am 25 years old, I am from New Delhi, I am TPA in Paramount



//============================= APPLY METHOD ===================================================
// the only difference with call method is that we pass the arguments in the form of an array instead string

printDetails.apply(person2, ['New Delhi', 'TPA'])   // output : Hello, I am Harkesh Kumar, I am 25 years old, I am from New Delhi, I am TPA in Paramount



//============================= BIND METHOD ===================================================
// Bind : Bind is a method in which we store detail of a funtion and call it later stage of time, when needed

let myFunc = printDetails.bind(person2, 'New Delhi', 'TPA')
console.log(myFunc) // output : [Function: bound printDetails]


// calling after console to get the output 

myFunc()  // // output : Hello, I am Harkesh Kumar, I am 25 years old, I am from New Delhi, I am TPA in Paramount