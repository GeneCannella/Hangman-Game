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

            //write some code here to check if this guess has been tried previously
            //--if it has then no need to check if it in the word to be guessed, nor update anything
            //--so check guessedLetter against guessedLetters
            //--if guessedLetter is already in guessedLetters, then skip all checks and go back to waiting for a key event
            if (guessedLetters.toLowerCase().indexOf(guessedLetter.toLowerCase()) < 0) {
                //the new guess is unique, has never been tried before
                //run all checks on guess and update all variables

                //first, since guess is unique, guessedLetter should be added to the list of guessedLetters
                //second, decrement the number of remaining guesses, since user has just mad an unique guess
                //third, check to see if the new guess is in the current word to be guessed

                //(first step per above) write some code here to add guessedLetter to the list of guessedLetters
                guessedLetters += (guessedLetter + " "); //string immutability !?! Why does this work?
                
                //(second step per above) write some code here that decrements the number of remaining guesses
                //we will check later to see if user is out of guesses
                numGuesses--; //do unconditionally since we are already inside a conditional that checked if this was an unique guess
 
                //(third step per above) write some code to check if new guess is in word and if so update hiddenWord
                //--use indexOf to determine whether guessedLetter is in word 
                if (word.toLowerCase().indexOf(guessedLetter.toLowerCase()) > -1) {
                    //guessedLetter is in the word
                    //--so proceed to update the display of underscores and guessed letters (user progress in game)

                    //write some code here that finds the location of the guessedLetter in the word to be guessed
                    //--then replace the underscore in that loction of hiddenWord with the guessed letter
                    //could do that literally if using any array, but must rebuild string because immutability

                    //What if I took guessedLetter, then walked through word and hiddenWord simultaneously
                    //--checking charAt in word against guessed letter
                    //--if charAt in word == guessedletter then newWord += guessedletter + one space char
                    //--else newWord += hiddenword.charAt (twice the index into word ) plus one space character
                    //--then set hiddenWord = newHiddenWord

                    var newHiddenWord = ""; //declare null string as starting point to build combination of underscores and guessed letters
                    //walk through the word to be guessed one char at a time looking for match to guessedLetter
                    for (i = 0; i < word.length; i++) { 
                        //use charAt and toLowerCAse methods to compare guessedLetter to each char of word
                        if (word.charAt(i).toLowerCase() === guessedLetter.toLowerCase()) {
                            //found a match
                            //need to concatenate the guessedLetter and one space char to existing newHiddenWord string
                            newHiddenWord += (guessedLetter + " ") //I REALLY don't understand string immutability
                            
                        } else {
                            //did not match, i.e., guessedLetter not in current word to be guessed
                            //need to concatenate the pre-existing character at this location in hiddenWord plus one space char to newHiddenWord
                            //BTW, could have used .slice(2*i, 2*i+2), next time I will

                            //remember that hiddenWord and newHiddenWord will be twice as long as word
                            newHiddenWord += (hiddenWord.charAt(2 * i) + " "); //hiddenWord has chars at 0,2,4,etc and spaces at 1,3,5,etc
                        }
                    } //this line closes the for loop, at this point newHiddenWord has finished building
                    hiddenWord = newHiddenWord; //modify (? replace ?) global string value of hiddenWord --- I really don't understand string immutability

                    //need to check to see if user has won the game since he has guessed a letter correctly
                    //put some code here to see if entire word has been guessed and if so to do whatever necessary to end game with win

                } else { //guessedLetter is NOT in the word
                    //do not need to update hiddenWord
                    //need to check if user has lost the game since he made unique but wrong guess
                } //this line closes the else where we checked for if the user had lost

            } //this line closes the if that checked for whether the guess was unique




            

            //update game state global variables
            wins++;



            console.log("Wins = " + wins);
            console.log("numGuesses = " + numGuesses);
            console.log("guessedLetter = " + guessedLetter);
            console.log("current word = " + word);

            setSomeText();

        };


    }); //This line closes the document.ready function