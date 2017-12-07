    //This snippet is for testing my understanding of string immutability

    //A string reference "str" is created
    function
    var str = ""
    for (i = 0; i < 5; i++) {
        //here the loop attempts to concatenate to the original string
        //and store the result back into the original string
        str = str + i; //why does this (appear) to work?
        console.log("str = " + str);
    }

    //this snippet was used to test whether the indexOf call was working properly in the scope of the onkeyup function
    console.log("index of guessedLetter = " + word.toLowerCase().indexOf(guessedLetter.toLowerCase()));


    console.log("Wins = " + wins);
    console.log("numGuesses = " + numGuesses);
    console.log("guessedLetter = " + guessedLetter);
    console.log("current word = " + word);