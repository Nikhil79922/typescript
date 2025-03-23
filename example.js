// ✅ Function to add numbers
function AddNumbers(price, shipping) {
    return price + shipping;
}
console.log(AddNumbers(10, 12)); // Output: 22
// ✅ Union type variable
var Name = 22;
// ✅ Using `any` type
var roll = null;
console.log(roll); // Output: null
// ✅ Fix: Allowing both string & number values
var arr = []; // Now allows both
arr[0] = "nikhil";
arr[1] = 3;
console.log(arr); // Output: ["nikhil", 3]
// ✅ Object with optional property
var objData = {
    name: "Nikhil",
    roll: 22,
    status: true,
};
console.log(objData.name); // Output: "Nikhil"
// ✅ Fix: Initialize Account properly
var Account = [];
Account.push({ name: "John Doe", balance: 1000 });
console.log(Account);
// ✅ Enum example
var Color;
(function (Color) {
    Color[Color["green"] = 0] = "green";
    Color[Color["red"] = 1] = "red";
    Color[Color["blue"] = 2] = "blue"; // 2
})(Color || (Color = {}));
console.log(Color.green); // Output: 0
// ✅ Unknown type with type checking
var unsure = "King";
if (typeof unsure === 'number') {
    console.log(unsure.toFixed(2));
}
else if (typeof unsure === "string") {
    console.log("Length of the string:", unsure.length); // Output: Length of the string: 4
}
// ✅ Never type function (Infinite loop)
function infiniteLoop() {
    while (true) {
        console.log(1);
    }
}
