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