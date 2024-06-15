// destructuring of an object

let person = {
    name: "Neeraj",
    age: 24,
    course: "Frontend Developer",
    address: {
        city: "New Delhi",
        country: "India"
    }
}

// destructuring ==============================================

/*
// way 1 : we cannot destructure an object like array

let { a, b, c, d } = person
console.log(a) // output : undefined
*/

/*
// way 2 : 

let { name, age, course, address:{country} } = person
console.log(name)  // output : Neeraj
console.log(country)  // output : India;

*/


// way 3 : by changing the name of keys
let { name: n, age: a, course: c, address: { country: co } } = person;
console.log(n) // Neeraj
console.log(a) // 24
console.log(c) // Frontend Developer
console.log(co) // India


