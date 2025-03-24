//Generics are a way to create  components (functions, classes or interfaces) that work wth different types without losing type safety


//generic function 
function genericType<T>(arg:T):T{
    return arg;
}

console.log(genericType<string>("Nikhil"))
console.log(genericType<number>(12))
console.log(genericType(true));


//generic interfaces
interface keypair<T,U>{
key:T;
value:U;
}

const valuePair:keypair<number,string>={
    key:12,
    value:"sorted"
}

//generic constraints
function getLength <T extends {length:number}>(item:T):number{
return item.length;
}

console.log(getLength("Hello"))// only print the value which can have countable length.
console.log(getLength([1,2,4,56,7,8]))


// geenric classes
class Box<T>{
    contents:T;

    constructor(contents:T){
        this.contents=contents
    }

    getContents():T{
        return this.contents;
    }
}

const numberbox=new Box<number>(2)
console.log(numberbox.getContents())

const stringbox=new Box<string>("Boxxy")
console.log(stringbox.getContents())

class stack<T>{
    private item:T[]=[];

    push(item :T):void{
        this.item.push(item)
    }
    pop():T|undefined{

        return this.item.pop();
    }
    getStack():T[]{
        return this.item;
    }
}

const numberStack=new stack<number>;
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.getStack());
numberStack.pop();
console.log(numberStack.getStack())


const stringStack=new stack<string>;
stringStack.push("Nikhil");
stringStack.push("Bhavesh");
stringStack.push("Diven");
console.log(stringStack.getStack());
stringStack.pop();
console.log(stringStack.getStack())