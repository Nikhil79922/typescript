function AddNumbers(pric, shipping) {
    return pric + shipping;
}
console.log(AddNumbers(10, 12));
var Name = 22;
var roll = null;
console.log(roll);
var arr = [];
arr[0] = "nikhil";
arr[1] = 3;
console.log(arr);
var obje = {
    name: "Nikhil",
    roll: 22,
    status: true,
};
console.log(obje.name);
var Account;
var color;
(function (color) {
    color[color["green"] = 0] = "green";
    color[color["red"] = 1] = "red";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
console.log(color.green);
var notsure = "King";
if (typeof (notsure) == 'number') {
    notsure.toFixed(2);
}
else if (typeof (notsure) == "string") {
    console.log("length of the string", notsure.length);
}
// Never type, which are used were the function will never return , basically has no Endpoint.
function infiniteLoop() {
    while (true) {
        console.log(1);
    }
}
//Void type, which are used when we don't wants to return anything, basically wants to return nothing
function logmessage() {
    console.log("testing void");
    //return null;  will pass an error.
}
// Type infernece  
var user;
// user =1; error , it is assigned as string 
// Type assertions
var strvalue = "Hello world";
var strLenght = strvalue.length; //specifying the datatype of varibale explicitively
// Union type
var union;
// union=2;  // both can be used 
// union="nikhil"; // both can be used 
// Type narrowing 
function printfn(id) {
    if (typeof (id) == 'string') {
        console.log("id is a string: ", id.toLocaleUpperCase());
    }
    else {
        console.log("Id is a number ".concat(id));
    }
}
printfn(10);
printfn("Nikhil");
function greet() {
    console.log("working");
}
var person = {
    name: "Nikhil",
    userID: 21,
    active: true,
    // greet(){
    //     console.log(2)
    // }
    greet: greet
};
person.greet();
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
console.log(add(1, 2));
console.log(sub(3, 2));
var ID = "2";
var person1 = {
    name: "Nikhil",
    roll: 12
};
console.log("person1 name details", person1.name);
var userID = "1";
var orderID = 2;
console.log(userID);
console.log(orderID);
var bill = {
    name: "Nikhil",
    id: 1,
    order: "Tea"
};
var myCar = {
    maker: "TATA",
    model: "TATA PUNCH",
    isElectric: true
};
var add1 = function (x, y) { return x + y; };
console.log("Type function", add1(1, 2));
var Userstatus = "pending";
console.log(Userstatus);
var student = {
    name: "Nikhil",
    roll: 21,
    subject: "Science"
};
console.log(student.name);
var inherite = {
    value: "Parent",
    children: [{
            value: "Child",
            children: [
                {
                    value: "grandChild",
                    children: []
                }
            ]
        }]
};
console.log("Recursive inherite", inherite);
// Intersection types
var config = {
    server: 'localhost',
    port: 8080,
    secure: true,
    timeout: 5000
};
var Stud = {
    name: "Nikhil"
};
console.log("optional properties", Stud.roll);
