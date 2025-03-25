// Type Guards :- specially used for union types
//ways to use :- 1) typeof , 2) instanceof , 3) Custom type guard fn


function printID(id:string |number){
    if(typeof id==="string"){
        console.log(`id is a string ${id}`)
    }else{
        console.log(`id is a number ${id}`)
    }
}

class Dog1{
    bark():void{
        console.log("Bou Bou");
    }
}

class Cat{
    meow():void{
        console.log("meow meow!");
    }
}

function animal1(pet:Dog1|Cat){
if(pet instanceof Dog1){
    pet.bark()
}else{
    pet.meow()
}
}
const cat = new Cat();
animal1(cat)


//custom guards

interface fish{
    swim():void;
}
interface Bird{
    fly():void
}

function isFish(pet:fish|Bird):pet is fish{
    return (pet as fish).swim()!== undefined;
}

function move(pet:fish|Bird){
    if(isFish(pet)){
        pet.swim();
    }
    else{
        pet.fly();
    }
}
