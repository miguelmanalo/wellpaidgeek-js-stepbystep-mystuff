function User (email, password) {
    this.email = email;
    this.password = password;
}

const user = new User('wellpaidgeek@gmail.com', 'supersecret123');

console.log(user);

const anotherUser = new User (`email@email.com`, `secret11111`);
console.log(anotherUser);

const userWithoutNew = new User(`email@test1.com`, `secret`);
console.log(userWithoutNew);

function modify (a, obj) {
    a++;
    obj.extra = true;
    console.log('In function', a, obj);
}
    
var arg = 1;
const objectArg = {value: 100}
modify(arg, objectArg);
console.log('Global', arg, objectArg);

var num1 = 4;
var num2 = num1;
num1++;
console.log(num2);

//references
//you just refer to the "true" object that's in memory
let object1 = { val: 100 };
var object2 = object1;
object1.extra = true;
console.log(object1);
console.log(object2);

var obj1 = {}
var obj2 = {}
console.log(obj1 === obj2);

var objA = {};
var objB = objA;
console.log(objA === objB);
objA = {};
console.log(objA === objB);
objA.extra = true;
console.log(objA);
console.log(objB);

//Inheritance notes
function Employee (firstName, lastName, deptCode, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.deptCode = deptCode;
    this.salary = salary;
}

Employee.prototype.getSummary = function () {
    return `Name: ${this.firstName} ${this.lastName} | Dept: ${this.deptCode}`;
}

//add a new function to Employee prototype
Employee.prototype.getMonthlySalary = function () {
    return Number((this.salary / 12).toFixed(2));
}

Employee.prototype.runPayroll = function () {
    return `${this.lastName}, ${this.firstName} $${this.getMonthlySalary()} \n
    `;
}

//Make a Manager constructor from just the bits we need from Employee constructor
//Can reuse Employee prototype with Employee.call
//We pass in the this from Manager constructor and that this gets all the properties from Employee. We effectively use Employee constructor on calling Manager constructor
//Why not call "new Employee" inside Manager? Well that makes a new Employee. We don't want a new Employee, we want a new Manager
function Manager (firstName, lastName, deptCode, salary) {
    Employee.call(this, firstName, lastName, deptCode, salary);
    this.staff = [];
}

//right now the Manager prototype has no reference to the Employee prototype
// engineeringManager.runPayroll();

//The wrong way
// Manager.prototype = Employee.prototype;

//The right way
Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.manage = () => {
    console.log(`Manager yells: Get back to work!`);
    return `Manager yells: Get back to work!`;
};

//Call Employee's getSummary on this, the Manager object
//When adding function to protoype Objects, they have to use the word function, they cannot be arrow functions or everything breaks
Manager.prototype.getSummary = function () {
    const summary = Employee.prototype.getSummary.call(this);
    return `${summary} Staff: ${this.staff.map(
        employee => employee.firstName + ' ' + employee.lastName).join(', ')}`
};

const geek = new Employee(`WellPaid`, `Geek`, `ENG`, 200000);
const engineeringManager = new Manager(`Miguel`, `Manalo`, `ENG`, 115000);
const amy = new Employee(`Amy`, `Johnston`, `ENG`, 200000);

engineeringManager.staff.push(geek);
engineeringManager.staff.push(amy);

console.log(engineeringManager.staff);
console.log(engineeringManager.getSummary());
console.log(engineeringManager.manage());
// console.log(geek.manage()); //geek is only Employee, cannot manage
console.log(engineeringManager.runPayroll());
console.log(geek.getSummary());
console.log(geek.runPayroll());
console.log(engineeringManager.firstName);
console.log(amy.getSummary());

//How does Object.create add to the prototype chain from Employee?
console.log(engineeringManager.__proto__.__proto__);
console.log(engineeringManager.__proto__);

function Employee1 (firstName, lastName, deptCode) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.deptCode = deptCode;
}

const monica = new Employee(`Monica`, `Manalo-Hosenball`, `ART`);
console.log(monica.getSummary());
console.log(monica);

const phil = new Employee(`Phil`, `Rochelle`, `FIN`);

//both phil and monica reference the same prototype object "parent"
console.log(phil.__proto__ === monica.__proto__);
console.log(monica.__proto__ === Employee.prototype);

Employee.prototype.sayHello = function () {
    return `Hello I am ${this.firstName} ${this.lastName}`;
}

console.log(monica.sayHello());

console.log(geek.getSummary());
//Even though both Employee prototype and Manager prototype have the same named getSummary function, we want the Manager one to do different things.
//So you can 'hide' functionality earlier in the chain.
//Manger getSummary is found and executed before it ever goes to looks for Employee getSummary
console.log(engineeringManager.getSummary());







/////////////////////////////////
// Classes
////////////////
// less confusing than constructor functions and prototypes
// blueprint that says what an object can be like in terms of the data it can hold and the functionality
// uses the new keyword
// essentially a different syntax for the object constructor stuff, same stuff under the hood

// function Monster (attackPower, accuracy, armourStrength) {
//     this.attackPower = attackPower;
//     this.accuracy = accuracy;
//     this.currentArmourtrength = armourStrength;
// }

// Monster.prototype.attack = function () {
//     if (Math. random() <= this.accuracy) {
//         return this.attackPower;
//     }
//     return 0;
// };

// Monster.prototype.defend = function (hitStrength) {
//     const newStrength = this.currentArmourStrength - hitStrength;
//     this.currentArmourStrength = Math.max(0, newStrength);
// };

// class syntax verus constructor syntax from above
// remove the function keyword and equals sign when adding functions to a class
// can't put random code inside a class, it has to be a function
class Monster {
    constructor (attackPower, accuracy, armourStrength) {
        this.attackPower = attackPower;
        this.accuracy = accuracy;
        this.currentArmourStrength = armourStrength;
    }

    attack () {
        if (Math. random() <= this.accuracy) {
            return this.attackPower;
        }
        return 0;
    };

    defend (hitStrength) {
        const newStrength = this.currentArmourStrength - hitStrength;
        this.currentArmourStrength = Math.max(0, newStrength);
    };
}

console.log(Monster.prototype);

const dalek = new Monster (70, 0.4, 200);
const cyberman = new Monster (20, 0.5, 100);

// Dalek attacks
cyberman.defend(dalek.attack());
console.log(cyberman.currentArmourStrength);

// Cyberman attacks
dalek.defend(cyberman.attack());
console.log(dalek.currentArmourStrength);

// Inheritance with Classes
// Old way
// function Dalek () {

// };

// New way with class inheritance
// extends is the equivalent of
// Dalek.prototype = Object.create(Monster.prototype);
// put constructor inside
class Dalek extends Monster {
    constructor () {
        super(70, 0.4, 200);
        // super is like doing
        // Monster.call(this)
    }

    exterminate () {
        console.log(`Ex-TER-min-ate!!`);
        return `Ex-TER-min-ate!!`;
    }
}

// Dalek.prototype.exterminate = function () {
//     console.log(`Ex-TER-min-ate!!`);
//     return `Ex-TER-min-ate!!`;
// }

const daleks = [];
for (let i = 1; i <= 10; i++) {
    daleks.push(new Dalek());
}

// console.log(daleks);

// Have them all attack
daleks.forEach((dalek, i) => {
    dalek.exterminate();
    console.log(`Dalek ${i} attacks and deals ${dalek.attack()} damage`);
});