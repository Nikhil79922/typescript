var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
    Student.prototype.getdetail = function () {
        console.log("student id:".concat(this.id, ", name:").concat(this.name, ", role:").concat(this.role, " "));
    };
    return Student;
}());
var new_student = new Student(1, "Nikhil", "SD");
new_student.getdetail();
//access specifier (public , private , protected) // by default it is public
var Vechicle = /** @class */ (function () {
    function Vechicle(model, name, cc) {
        this.model = model;
        this.name = name;
        this.cc = cc;
    }
    Vechicle.prototype.getdetail = function () {
        console.log("Vehicle model:".concat(this.model, ", name:").concat(this.name, ", cc:").concat(this.cc, " "));
    };
    return Vechicle;
}());
var new_vehicle = new Vechicle(1, "Honda Shine", 400);
new_vehicle.getdetail();
//Inheritance
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        console.log(name);
    }
    Animal.prototype.getSound = function () {
        console.log("".concat(this.name, " , woaf woaf!"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, sound) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.sound = sound;
        return _this;
    }
    return Dog;
}(Animal));
var dog = new Dog("puppy", "Bou bou!");
dog.getSound();
// Abstract class
var shape = /** @class */ (function () {
    function shape() {
    }
    shape.prototype.printArea = function () {
        console.log("Area of the shape is: ".concat(this.getarea()));
    };
    return shape;
}());
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(height, width) {
        var _this = _super.call(this) || this;
        _this.height = height;
        _this.width = width;
        return _this;
    }
    Rect.prototype.getarea = function () {
        return this.height * this.width;
    };
    return Rect;
}(shape));
var rect = new Rect(10, 20);
rect.printArea();
//Setter and Getter.
var circle = /** @class */ (function () {
    function circle(radius) {
        this._radius = radius;
    }
    Object.defineProperty(circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            if (value <= 0) {
                throw new Error("Radius must be positive");
            }
            else {
                this._radius = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return circle;
}());
var C = new circle(10);
console.log(C.radius);
C.radius = 12;
console.log(C.radius);
// C.radius=-4;    //Throw the custom error
// console.log(C.radius)
