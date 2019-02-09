//Variables for win, loss, and guesses
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
//Array for computer's pick
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Variables that correspond to HTML
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remainingText = document.getElementById("guesses-remaining");
var guessesText = document.getElementById("guesses-text");
var instructionsText = document.getElementById("instructions-text");
var guessesArray = [];

//Function for key up event
document.onkeyup = function() {

    // Records keyup as a guess
    var userGuess = event.key;
    console.log(userGuess);

    //randomizes computer guess from computerChoices array
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    
        if (userGuess === computerGuess) {
            wins++;
        } else if (guessesRemaining === 0) {
            losses++;
        } else if (userGuess !== computerGuess) {
            guessesRemaining--;
        } else {
          instructionsText.textContent = "That's not a letter.."
        }
    

    //Variable to avoid redundancy
    if (userGuess === guessesText) {
        document.removeEventListener('keyup');
    }
    //Change the directions to "what letter am I thinking of"
    instructionsText.textContent = "Guess what letter I'm thinking of!";
    //Showing the text of wins, losses, remaining, etc with the value of each on the page
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    remainingText.textContent = "Guesses remaining: " + guessesRemaining;
    guessesText.textContent = "Letters Guessed:" + userGuess;

}

//Another function for avoiding constant restarting of game
function  checkStatus() {
    if ((wins === +1) || (losses > 0)) {
        psychicGame();
    } 
}


/* Pseudo-Code
/1. User presses a key and a letter is randomly chosen from an array
/2. If key pressed is correct, user wins 1 round, new letter is randomly chosen
/3. User has 9 guesses at the beginning of round to guess the letter {
/4. If key pressed is incorrect, letter is displayed in text area {
/5. else if guesses remaining = 0, user loses the round.
6. Make game continue until correct letter is guessed.
*/
