// syntax :  setInterval(cbFunc, 2000)

/*
function greet() {
    console.log("Hello")
}

setInterval(greet, 1000)   // but this code runs infinitely, because we haven't set the timer
*/



// clear interval method to the timer after the time we want  ====================================


function greet(){
    console.log('Hello')
}

let timer = setInterval(greet, 2000);

setTimeout(function(){
    clearInterval(timer)
}, 7000)
