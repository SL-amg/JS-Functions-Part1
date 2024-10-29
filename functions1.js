console.log(`Abdullah al abbas`);

let myName = "Abdullah AL Abbas";

/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName(){
    console.log(`my Name is ${myName}`)
}
printName()

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(birthYear){
let age = (2024 - birthYear);
console.log(`My age is ${age}`);
}
printAge(1987);

/**
 * Task 3:
 * Create a function named `printAgeAndName`
 * - that takes a birth year and your name as parameters,
 * - and prints 'Hello NAME you are AGE years old' on the screen.
 * - Age = current year - birth
 */

function printAgeAndName(birthyear, name){
let age2 = (2024 - birthyear);
console.log(`Hello ${name} you are ${age2} years old.`);
}
printAgeAndName(1987, "Abdulla Salah");


/**
 * Task 4:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */


function printHello(name, language){
    var language;
if(language == "en"){
    console.log(`Hello ${name}.`);
}
else if(language == "es"){
    console.log(`Hola ${name}.`); 
}
else if(language == "fr"){
    console.log(`Bonjour ${name}.`); 
}
else if(language == "tr"){
    console.log(`Merhaba ${name}.`); 
}
}
printHello("abdullah", "en");
printHello("abdullah", "es");
printHello("abdullah", "fr");
printHello("abdullah", "tr");


/**
 * Task 5:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(x, y){
    var x;
    var y;
    if(x > y){
        console.log(`${x} is bigger than ${y}`);
        console.log(`x is set as ${x}, and y is set at ${y}.`);
    }
    else{
        console.log(`${y} is bigger than ${x}`);
        console.log(`x is set as ${x}, and y is set at ${y}.`);
    }
}
printMax(33, 15);