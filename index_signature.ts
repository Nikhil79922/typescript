 interface StringArray{
    [index:number]:string;
 }
 const channel :StringArray=["Nikhil","Singh","coding"];

 console.log(channel[1]);


 interface fruits{
    [key:string]:string;
 }
 const fruitsArray:fruits={
    apple:"A red fruit",
    banana:"A yellow fruit"
 }
 console.log(fruitsArray["banana"])