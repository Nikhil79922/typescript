//Generics are a way to create  components (functions, classes or interfaces) that work wth different types without losing type safety
//generic function 
function genericType(arg) {
    return arg;
}
console.log(genericType("Nikhil"));
console.log(genericType(12));
console.log(genericType(true));
var valuePair = {
    key: 12,
    value: "sorted"
};
//generic constraints
function getLength(item) {
    return item.length;
}
console.log(getLength("Hello")); // only print the value which can have countable length.
console.log(getLength([1, 2, 4, 56, 7, 8]));
// geenric classes
var Box = /** @class */ (function () {
    function Box(contents) {
        this.contents = contents;
    }
    Box.prototype.getContents = function () {
        return this.contents;
    };
    return Box;
}());
var numberbox = new Box(2);
console.log(numberbox.getContents());
var stringbox = new Box("Boxxy");
console.log(stringbox.getContents());
var stack = /** @class */ (function () {
    function stack() {
        this.item = [];
    }
    stack.prototype.push = function (item) {
        this.item.push(item);
    };
    stack.prototype.pop = function () {
        return this.item.pop();
    };
    stack.prototype.getStack = function () {
        return this.item;
    };
    return stack;
}());
var numberStack = new stack;
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.getStack());
numberStack.pop();
console.log(numberStack.getStack());
var stringStack = new stack;
stringStack.push("Nikhil");
stringStack.push("Bhavesh");
stringStack.push("Diven");
console.log(stringStack.getStack());
stringStack.pop();
console.log(stringStack.getStack());
