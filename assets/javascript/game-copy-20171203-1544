 $(document).ready(function() {

        //create array constant to hold all possible hidden words
        //values will not change during game play or between games
        var words = ["_ _ _ _ _ _ _ _ _ _", "Lannister"]

        //get references for all the elements that will be updated during gameplay
        var userText = document.getElementById("user-text");
        var winsText = document.getElementById("wins-text");
        var guessesText = document.getElementById("guesses-text");
        var lettersText = document.getElementById("letters-text");
        var wordText = document.getElementById("word-text");

        
        //initialize game state global variables
        var wins, numGuesses, guessedLetters, word;

        //make a function that re-initalizes values of global game state variables
        //function will be called before first game starts and after each game ends
        function initGame() {
            wins = 0;
            numGuesses = 12;
            guessedLetters = "";
            //fixed word for testing
            //come back and use random number to access words array
            word = words[0];
        }



        



        initGame(); 

        document.onkeyup = function(event) {
            var guessedLetter = event.key;
            userText.textContent = guessedLetter;
            
            wins++;
            numGuesses--;
            guessedLetters += (guessedLetter + " ");
            
            
            console.log("Wins = " + wins);
            console.log("numGuesses = " + numGuesses);
            console.log("guessedLetter = " + guessedLetter);
            console.log("current word = " + word);

            winsText.textContent = wins;
            guessesText.textContent = numGuesses;
            lettersText.textContent = guessedLetters;
            wordText.textContent = word;
        };


    });  //This line closes the document.ready function