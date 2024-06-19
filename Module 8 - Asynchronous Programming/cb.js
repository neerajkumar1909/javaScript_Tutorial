const fs = require('fs')

console.log("first line")


// synchronous method
let data = fs.readFileSync('file1.txt')
console.log("File 1 data -> " + data)


// asynchronous
fs.readFile('file2.txt', cb2)

function cb2(err, data) {
    if (err) {
        console.log(err)
    }

    console.log("File 2 data -> " + data)
}



// asynchronous
fs.readFile('file3.txt', cb3)

function cb3(err, data) {
    if (err) {
        console.log(err)
    }

    console.log("File 3 data -> " + data)
}

// asynchronous
fs.readFile('file4.txt', cb4)

function cb4(err, data) {
    if (err) {
        console.log(err)
    }

    console.log("File 4 data -> " + data)
}

console.log("last line")

// NOTE : In output we can see that the output is random and we can see that the output is not in the serial.. so we get the output in serial wise, we use the same code in file serialWise.js 