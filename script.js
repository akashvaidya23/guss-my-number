'use strict';

let secretNumber = Math.trunc(Math.random()*20+1);
let highScore = 20;
let high = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',()=>{
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        // When there is no input
        displayMessage("No Number 🚫");
    } else if(secretNumber === guess){
        // When player wins
        displayMessage("💥 Correct Number");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";
        if(highScore > high){
            high = highScore;
            document.querySelector('.highscore').textContent = high;
        }
    } else if(guess !== secretNumber){
        // when guess is wrong
        if(highScore > 1){
            displayMessage(secretNumber < guess ? "Too high 📈" : "Too low 📉" );
            highScore--;
            document.querySelector('.score').textContent = highScore;
        } else {
            displayMessage("You lost the game 😞");
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = "red";
        }
    }
});

document.querySelector('.again').addEventListener('click',()=>{
    highScore = 20;
    document.querySelector('.score').textContent = highScore;
    secretNumber = Math.trunc(Math.random()*20+1);
    displayMessage("Start guessing...");
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
});