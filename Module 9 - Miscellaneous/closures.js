/* Closure Function ====================================
function test() {
    let a = 2;

    function test1() {
        console.log(a)
    }
    return test1
}

const func = test()

func();

*/


// Nested Closure Function ============================================================
function greet() {
    let name = "Virat Kohli" 

    function displayName() {
        console.log(`Hello ${name}`)

        let age = 24;

        function displayAge() {
            console.log(`My age is ${age} and my fav cricket player is ${name}`)
        }
        return displayAge;
    }
    return displayName;
}

let g1 = greet();
// g1();            // basically, we are calling displayName()   here

let g2 = g1();      // calling displayAge() here
g2()