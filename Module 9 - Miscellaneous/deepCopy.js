let firstPerson = {
    name: "Neeraj",
    age: 24,

    address: {
        city: "New Dehi",
        country: "India"
    }
}

let secondPerson = JSON.parse(JSON.stringify(firstPerson));

secondPerson.name = "Rahul"
secondPerson.address.city = "Rajasthan"


console.log(firstPerson)
console.log(secondPerson)