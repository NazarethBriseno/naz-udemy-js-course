'use strict';

// document.querySelector('.message').textContent;
// document.querySelector('.message').textContent = "Correct Number";
//
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent =  20;
// document.querySelector('.guess').value = 3;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener("click", () => console.log(document.querySelector('.guess').value))
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);
    if(!guess){
        document.querySelector('.message').textContent = 'No number!';
        //Correct Guess
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = "Correct Number!";
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = "30rem";
        //Guess is too high!
    } else if (guess > secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = "Too high!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You lost bruh....";
        }
        //Guess is too Low
    } else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "Too Low!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You lost bruh....";
        }
    }
})
