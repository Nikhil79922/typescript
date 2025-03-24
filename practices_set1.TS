//1. Write a Typescript function to calculate the factorial of a number with proper type of annotaions.
function factorial(num: number): number {
    if (num == 0 || num == 1) return 1;
    return num * factorial(num - 1);   //recurssive function
}

console.log(factorial(4))

//2. Define a function that accepts a user object (with naem, age , email) and returns a formatted string.
interface User {
    name?: string;
    age: number;
    email: string;
}

function formatedData(user: User): string {
    return `USer ${user?.name} ${user.age} years can be contacted via ${user.email}`;
}

const userData: User = {
    name: "Nikhil",
    age: 21,
    email: "nsi@narola.email"
}
console.log(formatedData(userData))

//3. calculate Total price: write a typescript function that calculates the toatl price of an array of product objects.Each product has a price and quality.


interface productData {
    price: number;
    quality: number;
}
function calTotal(products:productData[]):number{
    return products.reduce((total,currproduct)=> {return (total+(currproduct.price*currproduct.quality))},0)
}

const cart:productData[]=[
    {price:100,quality:2},
    {price:200,quality:1},
    {price:300,quality:3},
    {price:400,quality:4},
]

console.log("totalPrice: ",calTotal(cart))


//4. Define a union type for a vehicle that can either be a Car or bike with different properties. Write a function to log details on the vehicle type.

type vehicle1 ={
      type:"car",
    maker:string;
    model:string;
    year:number;
}
type Bike={
      type:"bike",
    brand:string;
    cc:number;
}

type vehicleData=Bike|vehicle1;

function getVehicleDetails(vehicle: vehicleData){
    if(vehicle.type==="car"){
        console.log(`Car: ${vehicle.maker} ${vehicle.model}, ${vehicle.year}`);
    }
    else if(vehicle.type==="bike"){
        console.log(`Car: ${vehicle.brand} ${vehicle.cc}`);
    }
}

const bike:Bike={
    type:"bike",
    brand:"Hero",
    cc:500
}
const car:vehicle1={
  type:"car",
    maker:"TATA",
    model:"TATAPUNCH",
    year:2003
}

getVehicleDetails(car)