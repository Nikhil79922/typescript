function addNum(a, b) {
    return a + b;
}
console.log(addNum(2, 5));
//function expression 
var divide = function (a, b) {
    return a / b;
};
console.log(divide(8, 2));
// arrow function (mostly used in mordern angular)
var multiply = function (a, b) {
    return a * b;
};
console.log(multiply(8, 2));
//optional parameters  "?"
function greetUser(username, greet) {
    return ("".concat(greet ? greet : 'Hello', " ").concat(username)); //ternary operation.
}
console.log(greetUser("Nikhil"));
console.log(greetUser("Nikhil", "Hi"));
// default values 
function greetYou(username, greet) {
    if (greet === void 0) { greet = "Welcome"; }
    return ("".concat(greet ? greet : 'Hello', " ").concat(username)); //ternary operation.
}
console.log(greetYou("Bhavesh")); // output:- Welcome Bhavesh
console.log(greetYou("Bhavesh", "Hey")); // output:- Hey Bhavesh
function getLength(value) {
    return value.length;
}
console.log(getLength("12"));
console.log(getLength([1, 2, 3, 4, 5, 7, 9, 90]));
//REST operator
function restNumber() {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    return number.reduce(function (prev, curr) {
        return prev + curr;
    });
}
console.log(restNumber(1, 2, 3, 4));
function restString(greet) {
    var username = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        username[_i - 1] = arguments[_i];
    }
    username.forEach(function (e) {
        console.log("".concat(greet, " ").concat(e));
    });
}
restString("Welcome", "Nikhil", "Diven", "Bhavesh", "Sachin", "Ankit", "Vikas");
