function AddNumbers (pric: number, shipping: number): number {
    return pric + shipping;
}
console.log(AddNumbers(10, 12)); 
const Name : string | number =22; 
var roll: any=null
console.log(roll)

let arr : string[] | number[] = [];
arr[0]="nikhil";
arr[1]=3;
console.log(arr)

let obje:{
    name:string,
    roll:number,
    status:boolean,
    prizes?:null,
}={
    name:"Nikhil",
    roll:22,
    status:true,
}
console.log(obje.name)
let Account: {}[];

enum color {
    green,
    red,
    blue
}
console.log(color.green)

let notsure:unknown="King";
if(typeof(notsure)== 'number'){
notsure.toFixed(2);
} else if(typeof(notsure)=="string"){
  console.log("length of the string",notsure.length);
}

// Never type, which are used were the function will never return , basically has no Endpoint.
function infiniteLoop() : never{
while(true){
    console.log(1);
}
}

//Void type, which are used when we don't wants to return anything, basically wants to return nothing
function logmessage():void{
    console.log("testing void")
    //return null;  will pass an error.
}

// Type infernece  
let user : "Nikhil";
// user =1; error , it is assigned as string 

// Type assertions
let strvalue: any = "Hello world";
let strLenght:number =(strvalue as string).length;//specifying the datatype of varibale explicitively

// Union type
let union : string | number;
// union=2;  // both can be used 
// union="nikhil"; // both can be used 

// Type narrowing 
function printfn(id:string | number){
    if(typeof(id)=='string'){
        console.log("id is a string: ",id.toLocaleUpperCase());
    }
    else {
        console.log(`Id is a number ${id}`)
    }
}
printfn(10) 
printfn("Nikhil")

// Interfaces
interface person {
    name : string;
    userID : number;
    active : boolean;
    greet: ()=> void; 
}

function greet (){
    console.log("working")
}

let person:person = {
    name : "Nikhil",
    userID:21,
    active:true,
    // greet(){
    //     console.log(2)
    // }
    greet
    
}
person.greet()

//Interface with function type
interface mathop {
(a:number,b:number): number
}

const add :mathop =(x,y)=> x+y;
const sub :mathop =(x,y)=> x-y;

console.log(add(1,2));
console.log(sub(3,2));

//type alias
// type aliasName =TypeDefination ; //syntax 

type UserID= string;
const ID : UserID="2";

type Person1={
    name: string;
    roll: number;
}

const person1:Person1={
    name:"Nikhil",
    roll:12
}

console.log("person1 name details",person1.name)

type ID= string | number;
let userID: ID="1";
let orderID: ID=2;

console.log(userID)
console.log(orderID)

//interface vs Type alias
interface user1 {
    name: string;
    id: number;
}

interface customer extends user1{
    order:string;
}

const bill : customer={
    name: "Nikhil",
    id:1,
    order:"Tea"
}

type vehicle={
    maker:string;
    model:string;
}

// &-> intersection type
type car=vehicle & {
    isElectric:boolean;
}

const myCar:car={
    maker:"TATA",
    model:"TATA PUNCH",
    isElectric:true
}

type add1=(a:number,b:number)=> number;
 
let add1:add1= (x,y)=>x+y;
console.log("Type function",add1(1,2))

type status="active"|"inactive"|"pending";
const Userstatus:status="pending";
console.log(Userstatus)


// difference -> rather than extending the interface can use same name interfaces but type alias can't do that 
interface user3{
    name: string,
    roll: number,
}
interface user3{
    subject:string
}
const student:user3 = {
    name:"Nikhil",
    roll:21,
    subject: "Science"
}
console.log(student.name)


//Can't perform this in type alias
// type vehicle1={
//     maker:string;
//     model:string;
// }
// type vehicle1{
//     isElectric:boolean;
// }


//Recursive type in type alias
type Tree={
    value:string;
    children:Tree[];
}

const inherite :Tree={
    value:"Parent",
    children:[{
        value:"Child",
        children:[
            {
                value:"grandChild",
                children:[]
            }
        ]
    }]
}

console.log("Recursive inherite",inherite)


// Intersection types
const config:{server:string; port:number} & {secure: boolean; timeout:number}={
    server:'localhost',
    port:8080,
    secure:true,
    timeout:5000
}

//Optinal feilds ----> denoted by "?"

interface user5{
    name: string,
    roll?: number,
}
const Stud:user5={
    name:"Nikhil"
}

console.log("optional properties",Stud.roll) //undefined
