function addNum(a: number, b: number): number {
    return a + b;
}
console.log(addNum(2, 5))

//function expression 
const divide = function (a: number, b: number): number {
    return a / b;
}
console.log(divide(8, 2));

// arrow function (mostly used in mordern angular)
const multiply = function (a: number, b: number): number {
    return a * b;
}
console.log(multiply(8, 2));

//optional parameters  "?"
function greetUser(username: string, greet?: string): string {
    return (`${greet ? greet : 'Hello'} ${username}`) //ternary operation.
}

console.log(greetUser("Nikhil"))
console.log(greetUser("Nikhil","Hi"))

// default values 
function greetYou(username: string, greet: string="Welcome"): string {
    return (`${greet ? greet : 'Hello'} ${username}`) //ternary operation.
}

console.log(greetYou("Bhavesh")) // output:- Welcome Bhavesh
console.log(greetYou("Bhavesh","Hey")) // output:- Hey Bhavesh

//Function overloading
function getLength(value:string):number;
function getLength(value:any[]) : number;
function getLength(value:any):number{
    return value.length;
}
console.log(getLength("12"));
console.log(getLength([1,2,3,4,5,7,9,90]))

//REST operator

function restNumber(...number:number[]):number{
    return number.reduce((prev,curr)=>{
        return prev+curr;
    })
}
console.log(restNumber(1,2,3,4));


function restString(greet: string,...username:string[]): void{
    username.forEach((e)=>{
console.log(`${greet} ${e}`);
    })
}
restString("Welcome", "Nikhil","Diven", "Bhavesh", "Sachin","Ankit","Vikas");