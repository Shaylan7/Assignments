// import React from 'https://cdn.skypack.dev/react@^17';
// import ReactDOM from 'https://cdn.skypack.dev/react-dom@^17';


let chosenNumber = Math.floor(((Math.random()*100) +1));
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessRestart = document.querySelector('.guessRestart')
const guessField = document.querySelector('.guessField');
const guesscount = document.querySelector('.guesscount');
const formBackground = document.querySelector('.container');
const questionMark = document.querySelector('.questionmark');
const readingInstructions = document.querySelector('.instructions');


let guessCount = 0;

// document.getElementById("submitguess").onclick = function(){
function checkGuess() {
    let guess = document.getElementById("guessField").value;

    if (guessCount == 0) {
        guesses.textContent = 'Previous guesses: ';
      }
      guesses.textContent += guess + ', ';
      
    if (chosenNumber == guess){
        lastResult.textContent = 'Congratulations! You got it right!';
        formBackground.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } 
    if (guessCount === 10) {
        lastResult.textContent = "Game Over";
        lowOrHi.textContent = '';
        setGameOver();
        } else if (chosenNumber > guess && (chosenNumber - guess > 10)){
        lowOrHi.textContent ="Way higher";
        } else if (chosenNumber > guess && (chosenNumber - guess < 10)){
        lowOrHi.textContent = "You're close, a little higher";
        } else if (chosenNumber < guess && (guess - chosenNumber > 10)){
        lowOrHi.textContent ="Way lower"; 
        } else if (chosenNumber < guess && (guess - chosenNumber < 10)){
        lowOrHi.textContent ="You're close, a little lower";
    } 
    guessCount++;
    guesscount.textContent = 'Count of guesses: '+ guessCount;
    guessField.value = '';

}

guessSubmit.addEventListener('click', checkGuess);
guessRestart.addEventListener('click', resetGame);
questionMark.addEventListener('click', instructions); 


function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
    
    //re enables the guess fields / submit buttons 
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    formBackground.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }

  function instructions(){
    questionMark.style.display = 'none';
    readingInstructions.style.display = 'inline';
}


