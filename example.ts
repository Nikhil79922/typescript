function AddNumbers(pric: number, shipping: number): number {
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

//Never type, which are useded were the function will never return , basically has no Endpoint.
function infiniteLoop(): never{
while(true){
    console.log(1);
}
}

