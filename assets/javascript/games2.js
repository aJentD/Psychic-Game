//Global Variables Game vars
//==================================================================

var compGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numWins = 0;
var numLoss = 0;
var numTotalGuess = 9;
var usedLetters = [];
var compLetter = compGuess[Math.floor(Math.random() * compGuess.length)];


//Functions round vars
//==================================================================


var winText = document.getElementById("win-counter"); 
var lossText = document.getElementById("loss-counter");
var usedText = document.getElementById("letters-used"); 
var guessText = document.getElementById("guess-left");


//Calls
//==================================================================

document.onkeyup = function(event){
    
    var userGuess = event.key;
   
        console.log(compLetter);
        console.log(userGuess);
        
        if (userGuess === compLetter){
            numWins++;
            numTotalGuess = 9;
            usedLetters = [];
            document.getElementById("win-counter").innerHTML = numWins;
            alert("You're amazing-TAKE MY MONEY!!")
            
        }
        else if (userGuess !== compLetter){
            numTotalGuess--;
            usedLetters.push(userGuess);
            document.getElementById("guess-left").innerHTML = numTotalGuess;
            document.getElementById("letters-used").innerHTML = usedLetters;

            if (numTotalGuess === 0){
                numLoss++;
                numTotalGuess = 9;
                usedLetters = []; 
                document.getElementById("loss-counter").innerHTML = numLoss;
                document.getElementById("letters-used").innerHTML = usedLetters;
                alert("You're not the greatest....try again?");
            }
            
        }
        
}

