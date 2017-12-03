    $(document).ready(function() {



        //initialize game state global variables
        var wins = 0;
        var numGuesses = 12;
        var guessedLetters = "";

        //create array to hold all possible hidden words
        var words = []

        //get references for all the elements that will be updated during gameplay
        var userText = document.getElementById("user-text");
        var winsText = document.getElementById("wins-text");
        var guessesText = document.getElementById("guesses-text");
        var lettersText = document.getElementById("letters-text");

        document.onkeyup = function(event) {
            var guessedLetter = event.key;
            userText.textContent = guessedLetter;
            
            wins++;
            numGuesses--;
            guessedLetters += (guessedLetter + " ");
            
            console.log("Wins = " + wins);
            console.log("numGuesses = " + numGuesses);
            console.log("guessedLetter = " + guessedLetter);

            winsText.textContent = wins;
            guessesText.textContent = numGuesses;
            lettersText.textContent = guessedLetters;
        };


    });  //This line closes the document.ready function