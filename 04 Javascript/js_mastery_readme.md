# JS Mastery 🚀

A comprehensive guide to mastering JavaScript from foundations to advanced concepts.

## 📚 Table of Contents

- [JS Foundations](#js-foundations)
- [JS OOP](#js-oop)
- [JS DOM & BOM](#js-dom--bom)
- [JS Advanced Concepts](#js-advanced-concepts)

---

## JS Foundations

### Variables and Data Types
JavaScript supports dynamic typing with primitives (string, number, boolean, null, undefined, symbol, bigint) and reference types (objects, arrays, functions). Variables can be declared using `var`, `let`, or `const`, each with different scoping rules.

```javascript
// Primitive types
let name = "John";              // string
let age = 25;                   // number
let isActive = true;            // boolean
let salary = null;              // null
let address;                    // undefined
let id = Symbol('id');          // symbol
let bigNumber = 9007199254740991n; // bigint

// Reference types
let person = { name: "Alice" }; // object
let numbers = [1, 2, 3];        // array
let greet = function() {};      // function

// Variable declarations
var x = 10;    // function-scoped, can be redeclared
let y = 20;    // block-scoped, cannot be redeclared
const z = 30;  // block-scoped, cannot be reassigned
```

### Operators
Arithmetic, comparison, logical, assignment, and ternary operators form the backbone of JavaScript expressions. Understanding operator precedence and type coercion is essential for writing predictable code.

```javascript
// Arithmetic operators
let sum = 10 + 5;        // 15
let diff = 10 - 5;       // 5
let product = 10 * 5;    // 50
let quotient = 10 / 5;   // 2
let remainder = 10 % 3;  // 1
let power = 2 ** 3;      // 8

// Comparison operators
console.log(5 == "5");   // true (loose equality)
console.log(5 === "5");  // false (strict equality)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(10 > 5);     // true
console.log(10 <= 10);   // true

// Logical operators
console.log(true && false);  // false (AND)
console.log(true || false);  // true (OR)
console.log(!true);          // false (NOT)

// Assignment operators
let a = 10;
a += 5;  // a = a + 5 => 15
a -= 3;  // a = a - 3 => 12
a *= 2;  // a = a * 2 => 24

// Ternary operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";  // "Yes"
```

### Control Flow
Conditional statements (`if/else`, `switch`) and loops (`for`, `while`, `do-while`, `for...in`, `for...of`) control program execution flow. Modern JavaScript also includes `break` and `continue` for fine-grained loop control.

```javascript
// If-else statement
let score = 85;
if (score >= 90) {
    console.log("A Grade");
} else if (score >= 80) {
    console.log("B Grade");
} else {
    console.log("C Grade");
}

// Switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of week");
        break;
    case "Friday":
        console.log("End of week");
        break;
    default:
        console.log("Midweek");
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// While loop
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// Do-while loop
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);

// For...in (objects)
let person = { name: "John", age: 30 };
for (let key in person) {
    console.log(key, person[key]);
}

// For...of (arrays)
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

// Break and continue
for (let i = 0; i < 10; i++) {
    if (i === 5) break;      // exits loop
    if (i === 3) continue;   // skips to next iteration
    console.log(i);
}
```

### Functions
Functions are first-class citizens in JavaScript. They can be declared as function declarations, function expressions, or arrow functions. Understanding scope, hoisting, and the differences between function types is crucial.

```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));  // "Hello, Alice!"

// Function expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3));  // 8

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));  // 20

// Arrow function with multiple statements
const getDiscount = (price) => {
    let discount = price * 0.1;
    return price - discount;
};

// Default parameters
function power(base, exponent = 2) {
    return base ** exponent;
}
console.log(power(5));     // 25
console.log(power(5, 3));  // 125

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4));  // 10

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This runs immediately!");
})();
```

### Arrays and Objects
Arrays are ordered collections with numerous built-in methods for manipulation (map, filter, reduce, forEach). Objects are key-value pairs that form the foundation of JavaScript's data structures and can be created using object literals, constructors, or `Object.create()`.

```javascript
// Array creation and methods
let fruits = ["apple", "banana", "orange"];
fruits.push("grape");           // add to end
fruits.pop();                   // remove from end
fruits.unshift("mango");        // add to start
fruits.shift();                 // remove from start

// Array iteration methods
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(n => n * 2);        // [2, 4, 6, 8, 10]
let evens = numbers.filter(n => n % 2 === 0); // [2, 4]
let sum = numbers.reduce((acc, n) => acc + n, 0); // 15
numbers.forEach(n => console.log(n));

// Array searching
console.log(numbers.includes(3));  // true
console.log(numbers.indexOf(3));   // 2
console.log(numbers.find(n => n > 3)); // 4

// Object creation
let person = {
    name: "John",
    age: 30,
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

// Accessing properties
console.log(person.name);        // dot notation
console.log(person["age"]);      // bracket notation

// Object methods
let keys = Object.keys(person);     // ["name", "age", "greet"]
let values = Object.values(person); // ["John", 30, function]
let entries = Object.entries(person); // [["name", "John"], ...]

// Object destructuring
let { name, age } = person;
console.log(name, age);  // "John" 30

// Object spread
let newPerson = { ...person, city: "NYC" };
```

### Type Coercion
JavaScript performs implicit type conversion in various operations. Understanding explicit conversion using `String()`, `Number()`, `Boolean()` and the rules of implicit coercion prevents unexpected bugs.

```javascript
// Implicit coercion
console.log("5" + 3);      // "53" (number to string)
console.log("5" - 3);      // 2 (string to number)
console.log("5" * "2");    // 10 (both to numbers)
console.log(true + 1);     // 2 (boolean to number)
console.log(false + 1);    // 1

// Explicit conversion
console.log(String(123));      // "123"
console.log(Number("456"));    // 456
console.log(Number("abc"));    // NaN
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean("hello")); // true

// Truthy and Falsy values
// Falsy: false, 0, "", null, undefined, NaN
// Everything else is truthy

if ("hello") {
    console.log("Truthy!");
}

// parseInt and parseFloat
console.log(parseInt("42px"));      // 42
console.log(parseFloat("3.14pi"));  // 3.14
console.log(parseInt("1010", 2));   // 10 (binary to decimal)
```

### Scope and Hoisting
Scope determines variable accessibility (global, function, block). Hoisting moves declarations to the top of their scope, affecting how `var`, `let`, `const`, and function declarations behave during execution.

```javascript
// Global scope
var globalVar = "I'm global";

function testScope() {
    // Function scope
    var functionVar = "I'm in function";
    
    if (true) {
        // Block scope
        let blockVar = "I'm in block";
        const blockConst = "I'm also in block";
        var functionScoped = "I'm function scoped even here";
    }
    
    console.log(functionVar);      // ✓ Works
    console.log(functionScoped);   // ✓ Works (var is function-scoped)
    // console.log(blockVar);      // ✗ Error (let is block-scoped)
}

// Hoisting with var
console.log(hoistedVar);  // undefined (not ReferenceError)
var hoistedVar = "I'm hoisted";

// Hoisting with let/const (Temporal Dead Zone)
// console.log(notHoisted);  // ✗ ReferenceError
let notHoisted = "I'm not accessible before declaration";

// Function hoisting
sayHello();  // ✓ Works! Function declarations are hoisted
function sayHello() {
    console.log("Hello!");
}

// Function expressions are NOT hoisted
// sayBye();  // ✗ Error
const sayBye = function() {
    console.log("Bye!");
};

// Closure example (accessing outer scope)
function outer() {
    let outerVar = "I'm outer";
    
    function inner() {
        console.log(outerVar);  // Can access outer variable
    }
    
    return inner;
}

let closureFunc = outer();
closureFunc();  // "I'm outer"
```

---

## JS OOP

### Objects and Prototypes
JavaScript uses prototype-based inheritance where objects inherit properties and methods from their prototype chain. Every object has an internal `[[Prototype]]` link accessible via `__proto__` or `Object.getPrototypeOf()`.

```javascript
// Creating objects
let person = {
    name: "John",
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

// Prototype chain
console.log(person.__proto__ === Object.prototype);  // true
console.log(Object.prototype.__proto__);  // null (end of chain)

// Adding to prototype
let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;  // Set animal as prototype
console.log(rabbit.eats);   // true (inherited)
console.log(rabbit.jumps);  // true (own property)

// Object.create()
let dog = Object.create(animal);
dog.barks = true;
console.log(dog.eats);   // true (from prototype)
console.log(dog.barks);  // true (own property)

// Checking properties
console.log(rabbit.hasOwnProperty('jumps'));  // true
console.log(rabbit.hasOwnProperty('eats'));   // false (inherited)
```

### Constructor Functions
Functions invoked with the `new` keyword create object instances. The constructor initializes properties, and methods added to `Constructor.prototype` are shared across all instances, optimizing memory usage.

```javascript
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding methods to prototype
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}, ${this.age} years old`;
};

Person.prototype.getOlder = function() {
    this.age++;
};

// Creating instances
let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

console.log(person1.greet());  // "Hello, I'm Alice, 25 years old"
person1.getOlder();
console.log(person1.age);      // 26

// All instances share the same prototype methods
console.log(person1.greet === person2.greet);  // true (same reference)

// instanceof operator
console.log(person1 instanceof Person);  // true
console.log(person1 instanceof Object);  // true
```

### Classes (ES6+)
Classes provide syntactic sugar over prototype-based inheritance. They support constructors, methods, static methods, getters, setters, and inheritance through the `extends` keyword, making OOP more intuitive.

```javascript
// Class declaration
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    // Instance method
    getArea() {
        return this.width * this.height;
    }
    
    // Getter
    get perimeter() {
        return 2 * (this.width + this.height);
    }
    
    // Setter
    set dimensions({ width, height }) {
        this.width = width;
        this.height = height;
    }
    
    // Static method
    static compare(rect1, rect2) {
        return rect1.getArea() - rect2.getArea();
    }
}

// Creating instances
let rect1 = new Rectangle(10, 5);
console.log(rect1.getArea());      // 50
console.log(rect1.perimeter);      // 30 (getter)

rect1.dimensions = { width: 20, height: 10 };  // setter
console.log(rect1.getArea());      // 200

// Static method call
let rect2 = new Rectangle(5, 5);
console.log(Rectangle.compare(rect1, rect2));  // 175

// Class expression
const Square = class {
    constructor(side) {
        this.side = side;
    }
    
    getArea() {
        return this.side ** 2;
    }
};
```

### Inheritance
JavaScript supports inheritance through prototypal chains or the `extends` keyword in classes. Child classes inherit properties and methods from parent classes and can override them or call parent methods using `super`.

```javascript
// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a sound`);
    }
    
    move() {
        console.log(`${this.name} is moving`);
    }
}

// Child class
class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Call parent constructor
        this.breed = breed;
    }
    
    // Override parent method
    speak() {
        console.log(`${this.name} barks`);
    }
    
    // Call parent method
    moveAndSpeak() {
        super.move();
        this.speak();
    }
    
    // New method
    fetch() {
        console.log(`${this.name} is fetching`);
    }
}

let dog = new Dog("Buddy", "Golden Retriever");
dog.speak();          // "Buddy barks" (overridden)
dog.move();           // "Buddy is moving" (inherited)
dog.fetch();          // "Buddy is fetching" (own method)
dog.moveAndSpeak();   // Calls both parent and child methods

console.log(dog instanceof Dog);     // true
console.log(dog instanceof Animal);  // true

// Prototypal inheritance with constructor functions
function Cat(name) {
    Animal.call(this, name);  // Call parent constructor
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.speak = function() {
    console.log(`${this.name} meows`);
};

let cat = new Cat("Whiskers");
cat.speak();  // "Whiskers meows"
cat.move();   // "Whiskers is moving"
```

### Encapsulation
While JavaScript lacks true private members, encapsulation can be achieved using closures, naming conventions (underscore prefix), or ES2022 private fields (hash prefix `#`). This protects internal state from external interference.

```javascript
// Using closures for encapsulation
function BankAccount(initialBalance) {
    let balance = initialBalance;  // Private variable
    
    this.deposit = function(amount) {
        if (amount > 0) {
            balance += amount;
            return balance;
        }
    };
    
    this.withdraw = function(amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return balance;
        }
        return "Insufficient funds";
    };
    
    this.getBalance = function() {
        return balance;
    };
}

let account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance());  // 1500
// console.log(account.balance);    // undefined (truly private)

// ES2022 Private fields (# prefix)
class User {
    #password;  // Private field
    
    constructor(username, password) {
        this.username = username;  // Public
        this.#password = password; // Private
    }
    
    #hashPassword() {  // Private method
        return `hashed_${this.#password}`;
    }
    
    validatePassword(input) {
        return this.#hashPassword() === `hashed_${input}`;
    }
    
    // Cannot access #password directly from outside
}

let user = new User("john", "secret123");
console.log(user.username);           // "john"
// console.log(user.#password);       // SyntaxError
console.log(user.validatePassword("secret123"));  // true

// Convention: underscore prefix (not truly private)
class Counter {
    constructor() {
        this._count = 0;  // "Private" by convention
    }
    
    increment() {
        this._count++;
    }
    
    getCount() {
        return this._count;
    }
}

let counter = new Counter();
counter.increment();
console.log(counter.getCount());  // 1
console.log(counter._count);      // 1 (still accessible, but discouraged)
```

### Polymorphism
Methods can be overridden in derived classes to provide different implementations. JavaScript's dynamic typing also enables duck typing, where objects are used based on their methods and properties rather than their type.

```javascript
// Method overriding
class Shape {
    constructor(name) {
        this.name = name;
    }
    
    getArea() {
        return 0;
    }
    
    describe() {
        return `This is a ${this.name} with area ${this.getArea()}`;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Square extends Shape {
    constructor(side) {
        super("Square");
        this.side = side;
    }
    
    getArea() {
        return this.side ** 2;
    }
}

// Polymorphism in action
let shapes = [
    new Circle(5),
    new Square(4),
    new Circle(3)
];

shapes.forEach(shape => {
    console.log(shape.describe());
    // Each shape calculates area differently
});

// Duck typing
function makeItQuack(duck) {
    if (typeof duck.quack === 'function') {
        duck.quack();
    }
}

let realDuck = {
    quack: () => console.log("Quack! Quack!")
};

let person = {
    quack: () => console.log("I'm pretending to be a duck!")
};

makeItQuack(realDuck);  // "Quack! Quack!"
makeItQuack(person);    // "I'm pretending to be a duck!"

// Interface-like behavior
class PaymentProcessor {
    process(payment) {
        if (typeof payment.pay !== 'function') {
            throw new Error("Payment must have a pay method");
        }
        return payment.pay();
    }
}

class CreditCard {
    pay() {
        return "Processing credit card payment";
    }
}

class PayPal {
    pay() {
        return "Processing PayPal payment";
    }
}

let processor = new PaymentProcessor();
console.log(processor.process(new CreditCard()));  // Works
console.log(processor.process(new PayPal()));      // Works
```

### `this` Keyword
The `this` context depends on how a function is called: as a method, standalone function, with `new`, or using `call/apply/bind`. Arrow functions inherit `this` from their enclosing scope, unlike regular functions.

```javascript
// Global context
console.log(this);  // window (browser) or global (Node.js)

// Object method
let person = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};
person.greet();  // "Hello, I'm Alice" (this = person)

// Function context (strict mode)
function showThis() {
    "use strict";
    console.log(this);
}
showThis();  // undefined (strict mode)

// Constructor function
function Person(name) {
    this.name = name;
    console.log(this);
}
let p = new Person("Bob");  // this = new object instance

// Arrow functions (lexical this)
let obj = {
    name: "Charlie",
    regularFunc: function() {
        console.log(this.name);  // "Charlie"
        
        setTimeout(function() {
            console.log(this.name);  // undefined (this is global/undefined)
        }, 100);
        
        setTimeout(() => {
            console.log(this.name);  // "Charlie" (inherits this from outer scope)
        }, 100);
    }
};

// Explicit binding with call, apply, bind
function introduce(greeting, punctuation) {
    console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

let person1 = { name: "David" };
let person2 = { name: "Emma" };

introduce.call(person1, "Hello", "!");     // "Hello, I'm David!"
introduce.apply(person2, ["Hi", "."]);     // "Hi, I'm Emma."

let boundIntroduce = introduce.bind(person1, "Hey");
boundIntroduce("!!!");  // "Hey, I'm David!!!"

// Event handler context
let button = {
    text: "Click me",
    handleClick: function() {
        console.log(this.text);
    }
};

// If used as event handler: this would be the button element
// To preserve context:
let boundHandler = button.handleClick.bind(button);
```

---

## JS DOM & BOM

### Document Object Model (DOM)
The DOM represents HTML documents as a tree structure where each element is a node. JavaScript can traverse, modify, create, and delete nodes, enabling dynamic content manipulation.

```javascript
// DOM tree structure example
/*
document
  └─ html
      ├─ head
      │   └─ title
      └─ body
          ├─ div
          │   └─ p
          └─ ul
              ├─ li
              └─ li
*/

// Accessing document properties
console.log(document.title);
console.log(document.URL);
console.log(document.domain);

// Node properties
let element = document.getElementById('myDiv');
console.log(element.nodeName);      // "DIV"
console.log(element.nodeType);      // 1 (Element node)
console.log(element.nodeValue);     // null
console.log(element.textContent);   // text content

// Traversing the DOM
console.log(element.parentNode);
console.log(element.childNodes);
console.log(element.children);           // Only element children
console.log(element.firstChild);
console.log(element.firstElementChild);
console.log(element.lastChild);
console.log(element.lastElementChild);
console.log(element.nextSibling);
console.log(element.nextElementSibling);
console.log(element.previousSibling);
console.log(element.previousElementSibling);
```

### Selecting Elements
Methods like `getElementById()`, `querySelector()`, `querySelectorAll()`, `getElementsByClassName()`, and `getElementsByTagName()` allow precise element selection. Modern code typically uses `querySelector` for its CSS-selector syntax.

```javascript
// Select by ID
let header = document.getElementById('header');

// Select by class name (returns HTMLCollection - live)
let items = document.getElementsByClassName('item');

// Select by tag name (returns HTMLCollection - live)
let paragraphs = document.getElementsByTagName('p');

// querySelector (returns first match)
let firstButton = document.querySelector('.btn');
let specificDiv = document.querySelector('#container .content');
let inputEmail = document.querySelector('input[type="email"]');

// querySelectorAll (returns NodeList - static)
let allButtons = document.querySelectorAll('.btn');
let allLinks = document.querySelectorAll('a[href^="https"]');

// Converting to array for easier manipulation
let itemsArray = Array.from(items);
let buttonsArray = [...allButtons];

// Iterating over NodeList
allButtons.forEach(button => {
    console.log(button.textContent);
});

// Complex selectors
let nestedElement = document.querySelector('.container > .row:first-child .col');
let evenItems = document.querySelectorAll('.list li:nth-child(even)');
let notFirst = document.querySelectorAll('.item:not(:first-child)');

// Checking if element exists
let element = document.querySelector('#maybe-exists');
if (element) {
    // Safe to use element
    console.log(element.textContent);
}
```

### Manipulating Elements
Properties like `innerHTML`, `textContent`, `innerText`, and methods like `setAttribute()`, `classList.add/remove/toggle()` enable content and attribute modification. Creating elements uses `createElement()` and `appendChild()`.

```javascript
// Changing content
let div = document.querySelector('#myDiv');
div.innerHTML = '<p>New <strong>HTML</strong> content</p>';
div.textContent = 'Plain text content';  // No HTML parsing
div.innerText = 'Visible text only';     // Respects CSS visibility

// Attributes
let link = document.querySelector('a');
link.setAttribute('href', 'https://example.com');
link.setAttribute('target', '_blank');
console.log(link.getAttribute('href'));
link.removeAttribute('target');

// Modern attribute access
link.href = 'https://example.com';
link.id = 'my-link';
console.log(link.href);

// Class manipulation
let element = document.querySelector('.box');
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('highlight');
element.classList.contains('active');  // true/false
element.classList.replace('old-class', 'new-class');

// Style manipulation
element.style.color = 'blue';
element.style.backgroundColor = 'yellow';
element.style.fontSize = '20px';
element.style.cssText = 'color: red; font-size: 24px; margin: 10px;';

// Getting computed styles
let styles = window.getComputedStyle(element);
console.log(styles.color);
console.log(styles.fontSize);

// Creating new elements
let newDiv = document.createElement('div');
newDiv.textContent = 'I am a new div';
newDiv.classList.add('new-element');
newDiv.id = 'dynamic-div';

// Inserting elements
let container = document.querySelector('#container');
container.appendChild(newDiv);           // Add to end
container.insertBefore(newDiv, container.firstChild);  // Add to start

// Modern insertion methods
container.prepend(newDiv);               // Add to start
container.append(newDiv);                // Add to end
container.before(newDiv);                // Before the container
container.after(newDiv);                 // After the container

// Replacing elements
let oldElement = document.querySelector('.old');
let newElement = document.createElement('div');
newElement.textContent = 'Replacement';
oldElement.replaceWith(newElement);

// Removing elements
element.remove();                        // Modern way
container.removeChild(element);          // Old way

// Cloning elements
let clone = element.cloneNode(true);     // true = deep clone (with children)
container.appendChild(clone);

// Data attributes
element.setAttribute('data-user-id', '123');
console.log(element.dataset.userId);     // "123"
element.dataset.userName = 'John';
```

### Event Handling
Events represent user interactions (clicks, key presses, mouse movements). Event listeners attach handlers to elements using `addEventListener()`. Event flow includes capturing, target, and bubbling phases, and events can be prevented or stopped.

```javascript
// Basic event listener
let button = document.querySelector('#myButton');
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log(event.target);  // The element that triggered the event
});

// Arrow function event handler
button.addEventListener('click', (e) => {
    console.log('Clicked with arrow function');
});

// Named function (can be removed later)
function handleClick(event) {
    console.log('Named handler');
}
button.addEventListener('click', handleClick);

// Removing event listener
button.removeEventListener('click', handleClick);

// Event object properties
document.addEventListener('click', (e) => {
    console.log(e.type);          // "click"
    console.log(e.target);        // Element that triggered event
    console.log(e.currentTarget); // Element with the listener
    console.log(e.clientX, e.clientY);  // Mouse coordinates
    console.log(e.timeStamp);     // When event occurred
});

// Preventing default behavior
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent form submission
    console.log('Form submission prevented');
});

let link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent navigation
    console.log('Link click prevented');
});

// Stopping propagation
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');

parent.addEventListener('click', () => {
    console.log('Parent clicked');
});

child.addEventListener('click', (e) => {
    e.stopPropagation();  // Prevent event from bubbling to parent
    console.log('Child clicked');
});

// Common events
let input = document.querySelector('input');

input.addEventListener('focus', () => console.log('Input focused'));
input.addEventListener('blur', () => console.log('Input lost focus'));
input.addEventListener('input', (e) => console.log('Input value:', e.target.value));
input.addEventListener('change', (e) => console.log('Input changed:', e.target.value));

// Keyboard events
document.addEventListener('keydown', (e) => {
    console.log('Key pressed:', e.key);
    console.log('Key code:', e.code);
    console.log('Ctrl pressed?', e.ctrlKey);
    console.log('Shift pressed?', e.shiftKey);
});

// Mouse events
let box = document.querySelector('.box');
box.addEventListener('mouseenter', () => console.log('Mouse entered'));
box.addEventListener('mouseleave', () => console.log('Mouse left'));
box.addEventListener('mousemove', (e) => {
    console.log('Mouse position:', e.offsetX, e.offsetY);
});

// Event options
button.addEventListener('click', handler, {
    once: true,      // Remove after first trigger
    capture: true,   // Use capture phase
    passive: true    // Won't call preventDefault
});