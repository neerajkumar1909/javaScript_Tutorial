// undefined ===========================================================

let a;
console.log(a);

let arr = [1, 2, 3, , 4];
console.log(arr[3]);

function add(a, b) {
    let c = a + b
    // return c
}
let sum = add(2, 3);
console.log(sum)


// null ============================================================
// null is basically a value that we assign with no value

let myLife = null;
console.log(myLife)


// not defined ================================================================
console.log(notDefined)  // output : ReferenceError: notDefined is not defined