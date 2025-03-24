class Student {
    id: number;
    name: string;
    role: string;

    constructor(id: number, name: string, role: string) {
        this.id = id;
        this.name = name;
        this.role = role;
    }

    getdetail() {
        console.log(`student id:${this.id}, name:${this.name}, role:${this.role} `)
    }
}

const new_student = new Student(1, "Nikhil", "SD");
new_student.getdetail();


//access specifier (public , private , protected) // by default it is public
class Vechicle {
    public model: number;
    protected name: string;
    private cc: number;

    constructor(model: number, name: string, cc: number) {
        this.model = model;
        this.name = name;
        this.cc = cc;
    }

    getdetail() {
        console.log(`Vehicle model:${this.model}, name:${this.name}, cc:${this.cc} `)
    }
}

const new_vehicle = new Vechicle(1, "Honda Shine", 400);
new_vehicle.getdetail();

//Inheritance

class Animal {
    constructor(public name: string) {
        console.log(name);
    }
    getSound(): void {
        console.log(`${this.name} , woaf woaf!`)
    }
}

class Dog extends Animal {
    sound: string;
    constructor(public name: string, sound: string) {
        super(name)
        this.sound = sound;
    }
    // getSound(): void{
    //     console.log(`${this.name} ,${this.sound}`)
    // }   
}

const dog = new Dog("puppy", "Bou bou!")
dog.getSound()

// Abstract class

abstract class shape {   // every class has a default constructor
    protected abstract getarea(): number;

    printArea() {
        console.log(`Area of the shape is: ${this.getarea()}`)
    }

}

class Rect extends shape {
    constructor(private height: number, private width: number) {
        super();
    }
    protected getarea() {
        return this.height * this.width;
    }
}
const rect = new Rect(10, 20);
rect.printArea();

//Setter and Getter.

class circle {
    public _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }
    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        if (value <= 0) {
         throw new Error("Radius must be positive")  
        }
        else{
        this._radius=value;
        }
    }
}

const C= new circle(10);
console.log(C.radius)
C.radius=12;
console.log(C.radius) 
// C.radius=-4;    //Throw the custom error
// console.log(C.radius)
