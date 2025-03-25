interface Person12{
    name:string;
    age:number;
    role:string;
}

type PresonKey= keyof Person12; //keyof will extract the Key values from the interface , obj , basically used for extracting key value.
let Key:PresonKey="name" 