//1. Write a Typescript function to calculate the factorial of a number with proper type of annotaions.
function factorial(num) {
    if (num == 0 || num == 1)
        return 1;
    return num * factorial(num - 1); //recurssive function
}
console.log(factorial(4));
function formatedData(user) {
    return "USer ".concat(user === null || user === void 0 ? void 0 : user.name, " ").concat(user.age, " years can be contacted via ").concat(user.email);
}
var userData = {
    name: "Nikhil",
    age: 21,
    email: "nsi@narola.email"
};
console.log(formatedData(userData));
function calTotal(products) {
    return products.reduce(function (total, currproduct) { return (total + (currproduct.price * currproduct.quality)); }, 0);
}
var cart = [
    { price: 100, quality: 2 },
    { price: 200, quality: 1 },
    { price: 300, quality: 3 },
    { price: 400, quality: 4 },
];
console.log("totalPrice: ", calTotal(cart));
function getVehicleDetails(vehicle) {
    if (vehicle.type === "car") {
        console.log("Car: ".concat(vehicle.maker, " ").concat(vehicle.model, ", ").concat(vehicle.year));
    }
    else if (vehicle.type === "bike") {
        console.log("Car: ".concat(vehicle.brand, " ").concat(vehicle.cc));
    }
}
var bike = {
    type: "bike",
    brand: "Hero",
    cc: 500
};
var car = {
    type: "car",
    maker: "TATA",
    model: "TATAPUNCH",
    year: 2003
};
getVehicleDetails(car);
