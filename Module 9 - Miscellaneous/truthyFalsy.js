// let a = 2                // truthy
// let a = 0                // falsy
// let a = 'JavaScript'     // truthy
// let a = ''               // falsy


// if (a) {
//     console.log("I am truthy")
// } else {
//     console.log("I am falsy")
// }



// Question : ===================================================================================================

(function () {
    if ((-100 && 100 && "0") || [] == true || 0) {
        console.log(1);

        if ([] || (0 && false)) {
            console.log(2)
        }
        if (Infinity && NaN && 'false') {
            console.log(3);
            if ("") {
                console.log(4)
            }
        } else {
            console.log(5);
            if (({} || false === "") && !(null && undefined)) {
                console.log(6)
            }
        }
    }
})();