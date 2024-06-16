// Imperative way (without reduce method)  ============================================

// Ques : find the sum of the element of an array

let num = [1, 2, 3, 4, 5];

let sum = 0;   // (works as an accumulator in reduce method)

for (let i = 0; i < num.length; i++) {
    sum += num[i]
}
console.log(sum)




// Declarative Way ( Reduce Method )  =======================================================

// Reduce method : the reduce method return only single result as an output (no array, no object)

let numbers = [1, 2, 3, 4, 5];

let sumResult = numbers.reduce((acc, value) => {
    let updatedSum = acc + value
    return updatedSum
}, 0)
console.log("sum reduce", sumResult)  // ouput : 15



let product = numbers.reduce((acc, value) => {
    let updatedProduct = acc * value
    return updatedProduct
}, 1)  // accumulator is one here, if we initialize it with zero the product will become zero
console.log("product reduce", product)  // output : 120