// Type Guards :- specially used for union types
//ways to use :- 1) typeof , 2) instanceof , 3) Custom type guard fn
function printID(id) {
    if (typeof id === "string") {
        console.log("id is a string ".concat(id));
    }
    else {
        console.log("id is a number ".concat(id));
    }
}
var Dog1 = /** @class */ (function () {
    function Dog1() {
    }
    Dog1.prototype.bark = function () {
        console.log("Bou Bou");
    };
    return Dog1;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("meow meow!");
    };
    return Cat;
}());
function animal1(pet) {
    if (pet instanceof Dog1) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
var cat = new Cat();
animal1(cat);
function isFish(pet) {
    return pet.swim() !== undefined;
}
function move(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
