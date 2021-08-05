// import React from 'https://cdn.skypack.dev/react@^17';
// import ReactDOM from 'https://cdn.skypack.dev/react-dom@^17';


let chosenNumber = ((Math.random()*100) +1);
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const guesscount = document.querySelector('.guesscount');

let guessCount = 1;

// document.getElementById("submitguess").onclick = function(){
function checkGuess() {
    let guess = document.getElementById("guessField").value;

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
      }
      guesses.textContent += guess + ' ';
      
    if (chosenNumber === guess){
        lastResult.textContent = 'Congratulations! You got it right!';
    } 
    if (guessCount === 10) {
        lastResult.textContent = "Game Over"
        } else if (chosenNumber > guess && (chosenNumber - guess >= 10)){
        lowOrHi.textContent ="Way higher";
        } else if (chosenNumber > guess && (chosenNumber - guess <= 10)){
        lowOrHi.textContent = "You're close, a little higher";
        } else if (chosenNumber < guess && (guess - chosenNumber >= 10)){
        lowOrHi.textContent ="Way lower"; 
        } else if (chosenNumber < guess && (guess - chosenNumber <= 10)){
        lowOrHi.textContent ="You're close, a little lower";
    } 
    guessCount++;
    guesscount.textContent = 'Count of guesses: '+ guessCount;
    guessField.value = '';

}

guessSubmit.addEventListener('click', checkGuess);
