/* Variables and data types */
console.log("Variables and data types")
var foo;
console.log('Value is: ' + foo + ' Foo is type: ' + typeof foo);
foo = 'bar';
console.log('Value is: ' + foo + ' Foo is type: ' + typeof foo);
foo = 'A string containining "quote" marks';
console.log('Value is: ' + foo + ' Foo is type: ' + typeof foo);
foo = 16;
console.log('Value is: ' + foo + ' Foo is type: ' + typeof foo);
foo = -16.556776876875;
console.log('Value is: ' + foo + ' Foo is type: ' + typeof foo);
var foo = true;  //Boolean
console.log('Value is: ' + foo + ' Foo is type: ' + typeof foo);
var foo = null; //null
console.log('Value is: ' + foo + ' Foo is type: ' + typeof foo);

/* Operators */
console.log("Operators");
console.log(5 + (2 * 10));
//Using + in an expression with strings concatenates
console.log("Joe" + " " + "Bloggs"); //results in Joe Bloggs”
//Short hand ways to use operators
var a = 5;
console.log(a++);   //returns 6
console.log(a += 4);  //returns 10
console.log(a *= 2);   // returns 20

/* Conditional statement */
console.log("Conditional statements")
var hour = 8;
if (hour < 12) {
    console.log("Good morning");
}

var hour = 15;
if (hour < 12) {
    console.log("Good morning");
} else if (hour > 18) {
    console.log("Good evening");
} else {
    console.log("Good afternoon");
}

/* Equals */
console.log("Equals")
var a = 5;
var b = 4;
var result;
if (a = b) {
    result = true;
} else {
    result = false;
}
console.log(result);
console.log("outputs true as a is assigned the value of b");
var a = 5;
var b = "5";
var result;
if (a == b) {
    result = true;
} else {
    result = false;
}
console.log(result);
console.log("outputs true as JavaScript recognises the string only contains a number and treats it as a number");
var a = 5;
var b = "5";
var result;
if (a === b) {
    result = true;
} else {
    result = false;
}
console.log(result);
console.log("outputs false as JavaScript forces the string to be interpreted as a string and not as a number");

/* Switch */
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day + " day of week should match current date");

/* Loops */
console.log("Loops");
/*
for (statement 1; statement 2; statement 3){   
    // code block to be executed 
}
 */
console.log("for..in")
var book = {author: "John Doe", ISBN: 121212121212, title: "This book"};
var text = "";
var x;
for (x in book) {
    text += book[x];
}
console.log("while");
let n = 3;
while (n > 2) {   
    console.log(n);
    n = n-1;
}

let n = 3;
do {   
    console.log(n);
    n = n-1;
}
while (n > 1);


/* Arrays */
console.log("Create an array using an array literal");
var progMinor = ["comp0015", "comp0034", "comp0035"];
//Access the full array
console.log(progMinor);
console.log("Create an array using an the JavaScript keyword new");
var progMinor = new Array("comp0015", "comp0034", "comp0035");
console.log("Access or assign the elements of an Array");
console.lg(progMinor[0]);
console.log("Arrays are objects");
console.log("get length of array");
console.log(progMinor.length);
progMinor.pop(); //remove last element
progMinor.push("COMP0035"); //add elements to the array

/* Objects */
//To define an object with properties
var student = {
    firstname: "Jo",
    lastname: "Bloggs"
};

//A JavaScript object can have properties and methods (called functions in JavaScript)
var person = {
    firstname: "Jo",
    lastname: "Bloggs",
    fullName: function () {
        return this.firstname + " " + this.lastname;
    }
};

//Access the properties of an object using objectName.propertyName or objectName["propertyName"]
console.log(person.lastname);
console.log(person["lastname"]);

//Access a method of an object using objectName.methodName()
console.log(person.fullName());

//Function syntax
function functionName() {
    //Code block
}


//Create an object constructor
function Person(firstname, lastname, height, dateOfBirth) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.height = height;
    this.dateOfBirth = dateOfBirth;
    this.getFullname = function () {
        return this.firstname + " " + this.lastname;
    };
    this.calculateAge = function () {
        var birthDate = new Date(dateOfBirth);
        var diff_ms = Date.now() - birthDate.getTime();
        var age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
}

//Create a new person, get their firstname and height and calculate their age
var person1 = new Person("Jo", "Bloggs", 2.1, "12/30/1969");
console.log(person1.firstname); //dot notation
console.log(person1["height"]);  //bracket notation
console.log(person1.calculateAge());


/* Functions */
//Named function
function findBiggest(firstFraction,secondFraction){
    var result;
    if (firstFraction>secondFraction){
        result = "The first fraction is bigger: " + firstFraction + " than the second fraction: " + secondFraction;
    } else {
        result = "The second fraction is bigger: " + secondFraction + " than the first fraction: " + firstFraction;;
    }
    return result;
}

console.log(findBiggest(2/3,7/12));

//Anonymous function
var biggest = function(firstFraction,secondFraction){
    var result;
    if (firstFraction>secondFraction){
        result = "The first fraction is bigger: " + firstFraction + " than the second fraction: " + secondFraction;
    } else {
        result = "The second fraction is bigger: " + secondFraction + " than the first fraction: " + firstFraction;;
    }
    return result;
}

console.log(biggest(2/3,7/12));

//Self-invoking function

var biggest = (function(firstFraction,secondFraction){
    var result;
    if (firstFraction>secondFraction){
        result = "The first fraction is bigger: " + firstFraction + " than the second fraction: " + secondFraction;
    } else {
        result = "The second fraction is bigger: " + secondFraction + " than the first fraction: " + firstFraction;;
    }
    return result;
})(2/3,7/12)

console.log(biggest);


/* Variable scope */
//Global variable
var count = 0;  //Global
function incr(n) {
    count += n;
}

function reset() {
    count = 0;
}

incr(4);
reset();
incr(2);
console.log(count);

//Function scope
function everything() {
    var count = 0;

    function incr(n) {
        count += n;
    }

    function reset() {
        count = 0;
    }

    incr(4);
    reset();
    incr(2);
    console.log(count);
}
everything();

//Block scope
/*
Variables declared with the let keyword can have Block Scope, variables declared inside a block {} using let cannot be
accessed from outside the block, variables inside a block {} using var can be accessed from outside the block.
 */
if (true) {
    var x = 2;
    let y = 2;
}
console.log(x);
console.log(y);  //should give an error that y is undefined

