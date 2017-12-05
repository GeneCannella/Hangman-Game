    $(document).ready(function() {

        //create array constant to hold all possible hidden words
        //values will not change during game play or between games
        var words = ["Stark", "Lannister", "Targaryen", "Martel"]

        //get references for all the HTML elements that will be updated during gameplay
        //These references are in global scope
        var userText = document.getElementById("user-text"); //displays most recent guessed letter (guessedLetter)
        var winsText = document.getElementById("wins-text"); //displays current number of user wins (wins)
        var guessesText = document.getElementById("guesses-text"); //displays current number of remaining guesses (numGuesses)
        var lettersText = document.getElementById("letters-text"); //displays list of guessed letters (guessedLetters)
        var wordText = document.getElementById("word-text"); //displays word to be guessed by user (word) //for tesing purposes only
        var hiddenText = document.getElementById("hidden-text");

        //declare game state global variables
        var wins, numGuesses, guessedLetters, word, hiddenWord;
        //wins: (number) used to hold the current value of games won by user
        //--is displayed
        //numGuesses: (number) used to hold the current value of allowed user guesses remaining in the game
        //--is displayed
        //guessedLetters: (string) is concatenated sequence of unique guessed letters
        //--is displayed
        //word: (string) is the word the user is currently attempting to guess
        //--is not displayed
        //--after code is running, change this name to hiddenWord (after changing hiddenWord to displayedWord)
        //--probably should use an array instead of a string]
        //hiddenWord: (string) is the concatenated sequence of interleaved underscores and lettersrepresenting unguessed letters in "word" 
        //--represents guessed and unguessed letters in "word" 
        //--is used to display user progress in guessing
        //--after code is working, change this name to displayedWord
        //--probably should use an array instead of a string

        //make a function that initalizes values of global game state variables
        //function will be called before first game starts and after each game ends
        function initGame() {
            wins = 0;
            numGuesses = 12;
            guessedLetters = "";

            //generate new current word for next game by using random index into "words" array
            //-------------------------------think about moving this function to top scope----------------------//
            function randWord() {
                var randIndex = Math.floor(Math.random() * 4);
                return words[randIndex];
            }
            //--------------------------------------------------------------------------------------------------//
            word = randWord();

            //initalize the hidden display of the word to be guessed
            hiddenWord = ""
            for (i = 0; i < word.length; i++) {
                hiddenWord += "_ ";
            }
        } //this closes the initGame function

        //function to place text in UI
        //--call this to initialize UI at start of game
        //--call after every guess during gameplay
        //--I'm not in love with all this use of global variables, must think about
        function setSomeText() {
            winsText.textContent = wins;
            guessesText.textContent = numGuesses;
            lettersText.textContent = guessedLetters;
            wordText.textContent = word;
            hiddenText.textContent = hiddenWord;
        }




        //Begin game execution 
        //--think about whether these two function calls should be moved to after the onkeyup function definition--//   
        initGame();
        setSomeText();


        //this function is the event handler that fires off for every user guess and runs all code associated with one user turn 
        document.onkeyup = function(event) {
            var guessedLetter = event.key;
            userText.textContent = guessedLetter;

            //write some code here look for the guessedLetter within the current word to be guessed
            //--determine whether guessedLetter is in current word (use indexOf)
            if (word.toLowerCase().indexOf(guessedLetter.toLowerCase()) > -1) {
                //guessedLetter is in the word

                //write some code here that finds the location of the guessedLetter in the word to be guessed
                //--then replace the underscore in that loction of hiddenWord with the guessed letter

                //What if I took guessedLetter, then walked through word and hiddenWord simultaneously
                //--checking charAt in word against guessed letter
                //if charAt in word == guessedletter then newWord += guessedletter + one space char
                //else newWord += hiddenword.charAt (twice the index into word ) plus one space character
                //then set hiddenWord = newHiddenWord

                var newHiddenWord = ""
                for (i = 0; i < word.length; i++) { //remember that hiddenWord and newHiddenWord are twice as long as word
                    if (word.charAt(i).toLowerCase() === guessedLetter.toLowerCase()) {
                        newHiddenWord += (guessedLetter + " ") //I don't understand string immutability
                    } else {
                        newHiddenWord += (hiddenWord.charAt(2 * i) + " "); //hiddenWord has chars at 0,2,4,etc and spaces at 1,3,5,etc
                    }
                }
                hiddenWord = newHiddenWord; //modify (? replace ?) global string value of hiddenWord --- I really don't understand string immutability
            }


            //write some code  to compare the guessedLetter with the list of previously guessed letters

            //update game state global variables
            wins++;
            if (guessedLetters.toLowerCase().indexOf(guessedLetter.toLowerCase()) < 0){
                guessedLetters += (guessedLetter + " "); //need to write some code here to check if this letter previously used
                numGuesses--; //need some code here that checks if this letter previously used before deciding to decrement numGuesses 
            }


            console.log("Wins = " + wins);
            console.log("numGuesses = " + numGuesses);
            console.log("guessedLetter = " + guessedLetter);
            console.log("current word = " + word);

            setSomeText();

        };


    }); //This line closes the document.ready function