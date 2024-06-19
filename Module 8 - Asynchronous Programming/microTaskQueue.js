function logA() { console.log('A') }
function logB() { console.log('B') }
function logC() { console.log('C') }
function logD() { console.log('D') }


logA();

setTimeout(logB, 0);  // Task Queue

Promise.resolve().then(logC);     // Micro Task

logD();


// output : A D C B