console.log('Welcome to V.4 of my Guessing Game')
//Patch Notes: V.1 Features include... If you guess the number on the first try, the system will alert you with a message. 2. Give up option. When you feel like your not going to guess the number just type in "GiveUp" and the system will tell you the number and the game will end.
//Patch Notes: V.1.1 In v.1.1 you can now click the cancel button to end the game and a hint system just type "Hint" and the system will tell you a number thats around the random number and got rid of "GiveUp".
//Patch Notes: V.2 This is a big update that's introducing STREAKS. Remember getting it correct and starting a new game. Well in V.2 Everytime you get it correct it adds it to your streak and try to get as many correct guesses in a row before running out of tries.
//Patch Notes: V.2.1 Fixed some bugs and added a feature that makes the game harder as your streak gets bigger
//Patch Notes: V.3 INTRODUCING Names. The system will now interact with you if you put your name in, if you don't enter your name the game won't start and if you don't want to put your name just make up a random one. Fixed some bugs and made the game harder by Reducing your tries at 6 in a row and 9 in a row and you can choose your wallpaper color.
//Patch Notes: V.3.3 Bug Fixes
//Patch Notes: V.3.8 Bug Fixes
//Patch Notes: V.4 Bug Fixes 
 

var Number = 100
var Guesses = 0
var MaxTries = 11
var RandomNumber = Math.floor(Math.random() * Number) + 1;
var Correct = 0
var Round = 1
var TotalTries = 11
var NameAnswer = prompt("Before we begin the game, what is your name?");
var AnswerToName = NameAnswer
var Name = AnswerToName
 

while (Attempts != RandomNumber) {
   
 
    if (Name == null) {
        alert("Reload the page and MAKE SURE you enter a name or the game won't start. Sorry. :(")
        document.write("Please reload and enter a name.")
        break
    }
 
    if (NameAnswer == "") {
        alert("Reload the page and MAKE SURE you enter a name or the game won't start. Sorry. :(")
        break
    }
 
    (Attempts != RandomNumber); {
    var Attempts = prompt("Alright, " + Name + ". I'm thinking of a number between 0 and " + Number + ". You have " + TotalTries + " tries left.");
    Guesses += 1;
    TotalTries -=1;
    }
 
    if (Attempts == "") {
        alert("Whoops! You entered nothing. Certainly it was a mistake so I have taken off a try so you can try again. Aren't I nice.")
        Guesses -= 1;
        TotalTries +=1;
    }
 
    if (Guesses == -1) {
        Guesses +=1
    }

    if (Attempts == RandomNumber) { //If user types in the correct answer it will add a streak to whatever your at
 
        alert('Nice! You correctly guessed ' + RandomNumber + " in " + Guesses + " tries.")
 

        if (Guesses <= 5 && Guesses > 1) {
            alert("Congrats on guessing " + RandomNumber + " in 5 tries or less.")
        }
 
        if (Guesses == 1) {
            alert('Whoa! Hold on there cheater! ;) It took you only one try to correctly guess ' + RandomNumber + '.' + ' Do you know the odds of doing that again?')
        }
 
        Correct += 1;
        Round += 1;
        alert('You are on a streak of ' + Correct + ".")
        Guesses = 0;
 
        if (Correct == 3) {
            Number = 350;
            alert("*Notice* The number has changed to 350.")
        }
 
        if (Correct == 5) {
            Number = 500;
            MaxTries = 12;
            TotalTries = 12;
            alert("*Notice* The number has changed to 500 and you now have 12 tries from 10.")
        }
 
        if (Correct == 8) {
            alert("*Notice* The number has changed to 750 and you now have 14 tries from 12.")
            Number = 750;
            MaxTries = 14;
            TotalTries = 14;
        }
 
        if (Correct == 10) {
            alert("*Notice* The number has changed to 10, you have 4 tries from 14, AND you have no hints to tell you if the number is higher or lower.")
            Number = 10;
            MaxTries = 4;
            TotalTries = 4;
        }
 
        if (Correct < 5) {
           MaxTries = 11;
           TotalTries = 11;
        }

        if (Correct >= 5 && Correct < 8) {
            MaxTries = 12;
            TotalTries = 12;
        }
 
        if (Correct >= 8 && Correct < 10) {
            MaxTries = 14;
            TotalTries = 14;
        }
 
        if (Correct >= 10) {
            MaxTries = 4;
            TotalTries = 4;
        }

        alert("This is the start of a new round. You are now on round " + Round + ".")
 
       
        {
            var RandomNumber = Math.floor(Math.random() * Number) + 0;
            var Attempts = prompt("Alright, " + Name + ". I'm thinking of a number between 0 and " + Number + ". You have " + TotalTries + " tries left.");
            Guesses += 1;
            TotalTries -=1;
        }
 
    }
 

    if (Attempts == null) {   //If user presses the "Cancel" button it will end the code and display the messages below.
        document.write("You have ended the game.")
        break
    }
 
    if (Correct < 10) { 
    if (Attempts < RandomNumber) { //If user types in answer lower than the random number the system will tell them to guess higher
        alert('Higher!');
    }
 
    if (Attempts > RandomNumber) { //If user tpes in answer higher than the random number the system will tell them to guess lower
        alert('Lower!');
    }
}
 
if (Guesses == MaxTries - 1) { // If user is on it's last try the system will display the message below
        alert('This is your last try!!! Make it a good one! GOOD LUCK. :)');
    }



    if (Guesses >= MaxTries) { //If the user reaches its max tries the game will end
        alert('You have no more tries left. The correct answer was ' + RandomNumber + ". Better luck next time! :)")
        document.write(" You went on a streak of " + Correct + ". Try to beat it next time. GOOD LUCK! :)")
        document.write(' Thanks for playing my guessing game. ')
        break
    }
   
 
    if (Attempts > Number) { //If the user typed a number bigger than what your suppose to guess the system will display the message below
        Guesses -= 1;
        TotalTries += 1;
        alert("Whoa. That's a bit too high of a guess. Try a number below " + Number + " next time.")
    }
 
    if (Attempts < 0) { //If the user typed a number lower than 0 the system will display the message below
        Guesses -= 1;
        TotalTries += 1;
        alert("Yikes! You entered a number below what was possible. Try a number higher than 0 this time.")
    }
 

}


/*

 For offline purposes to paste in the HTML "Body" Section to make the font arial, font color orange, and size 25px
 
<font color="Orange"</font>
<font face="Arial"</font>
<font size="25"</font>

*/

/*

 <script src="Guessing Game.js"></script>

 */