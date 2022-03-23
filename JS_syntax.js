/*
All languages have their own syntax, lets start with javascript's

First, as you can see, we can make comments in the code with /*

//works for comments too.

Variables of ANY TYPE can be declared using either:

var, 
const, 
or let
*/

var x = 1;

const y = "string";

let z = false;

//you can also use += to add to a variable quicker:

x += 2; //x is now 3.

/*
A var is a standard variable
'let' is like var but is only scoped in its {} block
const is like the Java static, it CONSTANT and can't be changed

We declare and use arrays like this
*/

const myArr = [1,2,3,4,5];

myArr[0] //1
myArr[1] //2
//etc...

//nested arrays:

const nestedArr = [[1,2,3], [4,5,6], [7,8,9]];
nestedArr[1][2] //6
nestedArr[2][0] //7

/*
Javascript also has a thing called an Object. It is like a Python dict or Java Map
*/

const myObj = {"key": "value", "apples":"oranges"};

/* 
Good news for both Python and Java fans -- semicolons are optional in this language!

Printing is differant than other languages:
However, thanks to node.js, the console.log() function is basically a print() function.

Functions work like this:
They can be declared in these ways:
*/

function returnSum(a, b){
    return (a + b);
}

const returnSum2 = (a, b) => {
    return (a + b);
}

/*
if/else works like in Java
Use the same operators: >, <, >=, <=, == etc.
*/

var canDrink = false;

if (age >= 21){
    canDrink = true;
} else if (age <= 10){
    console.log("WTF")
    canDrink = false;
} else{
    canDrink = false;
}

/*
 for loops work similar to Java:

 for (iterator variable; condition; increment){
     code
 }
 */

 const iterArr = [1,2,3]
 var sum = 0;
 
 for (let i = 0; i < 3; i++){
    sum += iterArr[i];
 }
//sum is now 6.

/*
All webpages made from react.js are made of components.
Each component is defined as a function that returns content.

We're going to be importing components from other parts of our program or from libraries. 

Importing is like this;

import component from "./filename"

THe ./ is part of the filepath to the file with the component


you can also import multiple things with

import {component1, component2} from "react"
react is the name of the library.


You're done :)

React.js doesn't use conventional HTML and CSS (it uses a very similar but better JSX), 
so the next bit will be about that
No prior knowledge assumed. 
*/
