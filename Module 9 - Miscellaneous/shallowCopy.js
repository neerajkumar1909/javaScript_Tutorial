// using spread operator (...)

let firstPerson = {
    name: "Neeraj",
    age: 24,

    address: {
        city: "New Dehi",
        country: "India"
    }
}

let secondPerson = { ...firstPerson }

secondPerson.name = "Rahul";
secondPerson.address.city = "Rajasthan"


// see the difference in console, that the values are not copied properly 

console.log("First Person : ", firstPerson)  
console.log("Second Person : ", secondPerson)



// To overcome from the use of shallow copy, we use Deep copy ====