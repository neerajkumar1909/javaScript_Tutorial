// IN javascript, the for-in loop allows you to loop through the properties of an object
// The statements of code found within the loop body will be executed once for each property of the object...

// lets create an object
var colors = {
    one: "red",
    two: "green",
    three: "black"
}

for (var color in colors) {
    // console.log(colors);  // output : one two three
    // console.log(color);   // output : one two three
    // console.log(colors[color])  // output : red green black

    // console.log(color + '->' + colors[color])  // output : one->red  two->green three->black
}



// for in loop with an Array 

var fruits = ["Apple", "Mango", "Banana", "Papaya"];

for (var fruit in fruits) {
    // console.log(fruit)  // output : 0 1 2 3
    console.log(fruit + ' -> ' + fruits[fruit])  // output : 0 -> Apple   1 -> Mango  2 -> Banana   3 -> Papaya
}