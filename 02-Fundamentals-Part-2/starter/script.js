'use strict';

// let hasDriversLicense = false;
// const passTest = true;
//
// if (passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive!');

// function logger() {
//     console.log(`My name is Nazareth!`);
// }
//
// //To "run" a function, it could also be called "calling the function", "running the function" or "invoking the function"
// logger();
//
// function fruitProcessor(apples, oranges){
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
//
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
//
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
//
// //Arrow function 1 parameter
// let calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1991));
//
// let yearsUntilRetirement = (birthyear, firstName) => {
//     let age = 2037 - birthyear;
//     let retirement = 65 - age;
//     return `${firstName} will retire in ${retirement} years!`;
// }
// yearsUntilRetirement(1999);

// let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// let dolphinsAvg = calcAverage(80, 135, 100);
// let koalasAvg = calcAverage(65, 54, 49);
// function checkWinner (avgDolphins, avgKoalas){
//     if(avgDolphins >= avgKoalas * 2 || avgKoalas >= avgDolphins *2){
//         if(avgDolphins > avgKoalas){
//             console.log(`The Dolphins win! (${avgDolphins} VS. ${avgKoalas})`)
//         } else {
//             console.log(`The Koalas win! (${avgDolphins} VS. ${avgKoalas})`)
//         }
//     } else {
//         console.log(`No one Wins! (${avgDolphins} VS. ${avgKoalas})`)
//     }
// }
// checkWinner(dolphinsAvg, koalasAvg);
// checkWinner(576, 111);
//
// //Test 2
// let dolphinsAvg2 = calcAverage(85, 54, 41);
// let koalasAvg2 = calcAverage(23, 34, 27);
//
// checkWinner(dolphinsAvg2, koalasAvg2);
//
// let bill = parseInt(prompt("How much was the bill value?"));
//
// function calcTip(bill){
//     let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
//     return tip;
// }
//
// let tips = [calcTip(125), calcTip(555), calcTip(44)];
// let totals = []

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Gonzales',
//     birthYear: 1999,
//     job: 'teacher',
//     friends: ['Minato', 'Rabago', 'Kenny', 'Lewis'],
//     hasDriversLicense: true,
//     //This is a method!!!!!!
//     calcAge: function(){
//         this.age = 2037-this.birthYear
//         return this.age;
//     },
//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license!`
//     }
//
// }


// let interestedIn = prompt("What would you like to know about Jonas? Please enter firstName, lastName, age or job!")
//
// if(jonas[interestedIn]){
//     alert(jonas[interestedIn]);
// } else {
//     alert("Sorry we don't know that about Jonas!")
// }
//
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friends name is ${jonas.friends[0]}!`);
// console.log(jonas.getSummary());
//
//
// let mark = {
//     firstName: "Mark",
//     lastName: "Miller",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.BMI = this.mass/(this.height ** 2);
//         return this.BMI;
//     }
// }
// let john = {
//     firstName: "John",
//     lastName: "Smith",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.BMI = this.mass/(this.height ** 2);
//         return this.BMI;
//     }
// }
//
// console.log(`${mark.calcBMI() > john.calcBMI() ? 'Mark' : 'John'}'s BMI (${mark.calcBMI() > john.calcBMI() ? mark.calcBMI() : john.calcBMI()}) is higher than ${mark.calcBMI() < john.calcBMI() ? 'Mark' : 'John'}'s BMI (${mark.calcBMI() < john.calcBMI() ? mark.calcBMI() : john.calcBMI()})` );


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Gonzales',
//     birthYear: 1999,
//     job: 'teacher',
//     friends: ['Minato', 'Rabago', 'Kenny', 'Lewis'],
//     hasDriversLicense: true,
//     // This is a method!!!!!!
//     calcAge: function(){
//         this.age = 2037-this.birthYear
//         return this.age;
//     },
//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license!`
//     }
//
// }
//
// let jonasArray = [
//     'Jonas',
//      'Gonzales',
//     1999,
//     'teacher',
// ]
//
// for(let i = jonasArray.length - 1; i >= 0; i--){
//     console.log(jonasArray[i]);
// }
//
//
// for(let i = jonas.length - 1; i >= 0; i--){
//     console.log(jonas[i]);
// }
//
// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`-----Starting Exercise ${exercise}-----`);
//     for(let set = 1; set <= 5; set++){
//         console.log(`Starting set ${set}`);
//         for(let rep = 1; rep <= 12; rep++){
//             console.log(`---Did ${rep} rep`);
//         }
//     }
// }

function calcTip(bill){
    let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

for (let i =0; i < bills.length; i++){
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log(tips);
console.log(totals);


function calcAverage(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage([5, 5, 5]))