// getting the output in the serial wise  =====================

const fs = require('fs')


// asynchronous
fs.readFile('file2.txt', cb2)

function cb2(err, data) {
    if (err) {
        console.log(err)
    }

    console.log("File 2 data -> " + data)
    fs.readFile('file3.txt', cb3)   // using file3.txt here so that the output will be next to the file2
}



// asynchronous
function cb3(err, data) {
    if (err) {
        console.log(err)
    }

    console.log("File 3 data -> " + data)
    fs.readFile('file4.txt', cb4)   // using file3.txt here so that the output will be next to the file2
}

// asynchronous
function cb4(err, data) {
    if (err) {
        console.log(err)
    }

    console.log("File 4 data -> " + data)
}
