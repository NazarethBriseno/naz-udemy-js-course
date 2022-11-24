'use strict';

// let hasDriversLicense = false;
// const passTest = true;
//
// if (passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive!');

function logger() {
    console.log(`My name is Nazareth!`);
}

//To "run" a function, it could also be called "calling the function", "running the function" or "invoking the function"
logger();

function fruitProcessor(apples, oranges){
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);