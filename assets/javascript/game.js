//Variables for win, loss, and guesses
let wins = 0;
let losses = 0;
let guessesRemaining = 10;
let guessesArray = [];
let compGuess = [];
//Array for computer's pick
let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Variables that correspond to HTML
let winsText = document.getElementById("wins-text");
let lossesText = document.getElementById("losses-text");
let remainingText = document.getElementById("guesses-remaining");
let guessesText = document.getElementById("guesses-text");
let instructionsText = document.getElementById("instructions-text");


//Initial function for computer to choose a random letter
window.onload = function() {
let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
compGuess.push(computerGuess);
    console.log(computerGuess[0]);
}


//Main Game function, captures key up and affects each html component based on computerGuess
document.onkeyup = function(event) {
    const userGuess = event.key;
    guessesArray.push(userGuess);
    console.log(compGuess[0]);

        if ((userGuess === compGuess[0]) && (guessesRemaining > 0)) {
            wins++;
            guessesRemaining = 9;
            guessesArray.length = 0;
            compGuess.length = 0;
            let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            compGuess.push(computerGuess[0]);
            console.log(compGuess[0]);
        } else if ((userGuess !== compGuess[0]) && (guessesRemaining > 0)) {
            guessesRemaining--;
            instructionsText.textContent = "Wrong, guess again!";
        } else {
            losses++;
            guessesRemaining = 9;
            guessesArray.length = 0;
            compGuess.length = 0;
            let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            compGuess.push(computerGuess[0]);
            console.log(compGuess[0]);
        }
        
        
    //Change the directions to "what letter am I thinking of"
    instructionsText.textContent = "Guess what letter I'm thinking of!";
    //Showing the text of wins, losses, remaining, etc with the value of each on the page
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    remainingText.textContent = "Guesses remaining: " + guessesRemaining;
    guessesText.textContent = "Letters Guessed:" + guessesArray;

}






/* Pseudo-Code
/1. User presses a key and a letter is randomly chosen from an array
/2. If key pressed is correct, user wins 1 round, new letter is randomly chosen
/3. User has 9 guesses at the beginning of round to guess the letter {
/4. If key pressed is incorrect, letter is displayed in text area {
/5. else if guesses remaining = 0, user loses the round.
/6. Make letter choice and game continue until correct letter is guessed.
*/