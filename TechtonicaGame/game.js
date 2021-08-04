import React from 'https://cdn.skypack.dev/react@^17';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@^17';


let chosenNumber = Math.random()*30;

document.getElementById("submitguess").onclick = function(){
    let guess = document.getElementById("guessField").value;
    if (chosenNumber === guess){
        alert("Congrats, you won!");
    } else if (chosenNumber > guess && (chosenNumber - guess >= 5)){
        alert("Way higher");
    } else if (chosenNumber > guess && (chosenNumber - guess <= 5)){
        alert("You're close, a little higher");
    } else if (chosenNumber < guess && (guess - chosenNumber >= 5)){
        alert("Way lower");
    } else if (chosenNumber < guess && (guess - chosenNumber <= 5)){
        alert("You're close, a little lower");
    } 
}