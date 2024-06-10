// in js objects are in key value pairs

var person = {
    name: "Neeraj",
    lastName: "Kumar",
    age: 24,
    
    course : "Java full Stack",

    friends: ["Rahul", "Sanjay", "Harkesh"],

    address: {
        country: "India",
        state: "New Delhi",

        localAddress: {
            home: "G-169 Sangam Vihar",
            pincode: 110080
        }
    }
}


// console.log(person.friends[2])  // output :  harkesh

// console.log(person.address.localAddress.pincode) // output : 110080


// Adding some new key values to the person
person.favActors = ["Salman Khan", "SRK", "Aamir Khan"]
// console.log(person)


//  we can delete something also
delete person.course
console.log(person)