
//This will get an Array of the string indexes to where letters are capitalized
function getArrayOfCapsStringIndex(word) {
    let capitalsArray= [];
    for (let i = 0; i < word.length; i++){
        if (word.charAt(i) === word.charAt(i).toUpperCase()){
            capitalsArray.push(i);
        }
    }
    return capitalsArray;
};


//This function checks to see if a word is the same if it was spelled backwards Example: oolloo is the same spelled backwards
function isSameBackwards(word){
    let array = word.split('').reverse();
    return word === word.split('').reverse().join('');
}


//Find multiples of a number within a set limit
function findMultiples(integer, limit) {
    let array = [];
    for(let i = integer; i <= limit; i++){
        if(i % integer == 0){
            array.push(i);
        }
    }
    return array;
}

// Returns the Sum of an Array of numbers
function sumOfArray(arrayOfNumbers){
    return arrayOfNumbers.reduce((currentValue, index) => currentValue + index, 0);
}

//This functions tells you if the sum of an array comes out to an odd or even number
function oddOrEven(array) {
    return array.reduce((current, index) => current + index, 0) % 2 === 0 ? "Even" : "Odd!";
}