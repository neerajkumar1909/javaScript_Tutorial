// syntax :  setTimeout(cbFunc, 2000)         // 2000 is 2 second

/*
function greet() {
    console.log("Hello from setTimeout")
}

setTimeout(greet, 2000)  // the output will show after 2 seconds
*/


// Note : as we know setTimeout is asynchronous so what will happen here : ===============================================================================

console.log("Before")

setTimeout(() => {
    console.log("set timeout")
},2000)

console.log('After')