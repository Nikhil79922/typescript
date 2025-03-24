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
// user =1;  error , it is assigned as string 

// Type assertions
let strvalue: any = "Hello world";
let strLenght:number =(strvalue as string).length;//specifying the datatype of varibale   explicitively

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

