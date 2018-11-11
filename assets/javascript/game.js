

            // computers choices
            var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

            //scoring
            var wins = 0;
            var losses = 0;
            var numGuesses = 9;
            var guessChoices = [];

            // things happen when user presses up on a key.
            document.onkeyup = function(event) {
    
                //user guess is the key they press
                var userGuess = event.key;
    
                //computer guess generator
                var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
                //user guess options
                var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
                
                //pulls options from array to show user choice
               if (options.indexOf(userGuess) > -1) {
    
                    //if userguess equals wins add +1 to wins and reset game
                   if (userGuess === computerGuess) {
                       wins++;
                       numGuesses = 9;
                       guessChoices = [];
                   }
                    //if userguess doesn't equal computer guess subtract 1 from number guesses
                   if (userGuess != computerGuess) {
                       numGuesses --;
                       guessChoices.push(userGuess);
                   }
                   
                   //when numguess reaches 0 add 1 to losses and restart game
                   if (numGuesses === 0) {
    
                   numGuesses = 9;
                   losses ++;
                   guessChoices = [];
    
                   
               }
    
               //show this on html through .innerHTML
               var html = 
               "<h1> The Psychic Game</h1>" +
               "<p>Guess what letter I'm thinking of!</p>" +
               "<p>Wins: " + wins + "</p>" +
               "<p>Losses: " + losses + "</p>" +
               "<p>Guesses Left: " + numGuesses + "</p>" +
               "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";
    
               document.querySelector("#game").innerHTML = html;
    
               
               }
           };
    
       
       
        
    
