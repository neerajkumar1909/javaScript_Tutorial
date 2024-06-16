// Impure Function  ===============================================

let a = 2;
function addImpure(x) {
    console.log(x + a);
    a++
}
addImpure(2)
addImpure(2)
addImpure(2)
addImpure(2)  // the output depends on the external factor


// Pure Function ===========================================================

let addPure = (x, n) => {
    return x + n
}
console.log(addPure(2, 5))  // output : 7