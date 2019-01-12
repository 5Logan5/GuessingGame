console.log('Welcome to V.9.1 of my Guessing Game')
//Patch Notes: V.1 Features include... If you guess the number on the first try, the system will alert you with a message. 2. Give up option. When you feel like your not going to guess the number just type in "GiveUp" and the system will tell you the number and the game will end.
//Patch Notes: V.1.1 In v.1.1 you can now click the cancel button to end the game and a hint system just type "Hint" and the system will tell you a number thats around the random number and got rid of "GiveUp".
//Patch Notes: V.2 This is a big update that's introducing STREAKS. Remember getting it correct and starting a new game. Well in V.2 Everytime you get it correct it adds it to your streak and try to get as many correct guesses in a row before running out of tries.
//Patch Notes: V.2.1 Fixed some bugs and added a feature that makes the game harder as your streak gets bigger
//Patch Notes: V.3 INTRODUCING Names. The system will now interact with you if you put your name in, if you don't enter your name the game won't start and if you don't want to put your name just make up a random one. Fixed some bugs and made the game harder by Reducing your tries at 6 in a row and 9 in a row and you can choose your wallpaper color.
//Patch Notes: V.3.3 Bug Fixes
//Patch Notes: V.3.8 Bug Fixes
//Patch Notes: V.4 Bug Fixes 
//Patch Notes: V.4.1 Only allowed ten letters in name and first letter of name is always capitilized
//Patch Notes: V.5 Bug Fixes refer to github update description
//Patch Notes: V.6 Refer to Github Update Description
//Patch Notes: V.6.1 Bug Fixes
//Patch Notes: V.6.5 Refer to Github Update Description
//Patch Notes: V.6.6 Bug Fixes --> Github Update Description
//Patch Notes: V.7 Made game harder
//Patch Notes: V.8 Github update description
//Patch Notes: V.8.2 Bug Fixes
//Patch Notes: V.8.3 Made the game neater
//Patch Notes: V.9 This is a HUGE I mean HUGE update. You now have a choice between 2 game modes, #1 being the original one and #2 being that you get to choose however many tries you want and try to get to the farthest round with those tries. Removed ranks in game #1. Bug fixes and made game neater.
//Patch Notes: V.9.1 Changed picture for tab art. Bug Fixes.

var Name = prompt("Before we begin the game, what is your name? (Max = 10 Letters)");


if (Name != null) {
    // Capitilizing the first letter of name
    var firstChar = Name.slice(0, 1);
    var upperCaseName = firstChar.toUpperCase();
    var restOfName = Name.slice(1, 10);
    var restOfNameLowerCase = restOfName.toLowerCase();
    var Name = (upperCaseName + restOfNameLowerCase);
}

if (Name == null) {
    document.write("Please reload.")
}

if (Name == "") {
    document.write("Please reload.")
}

if (Name != null) {
    if (Name != "") {
        var Answer = prompt("Hello, " + Name + ". There are 2 ways to play this game #1 is to try and beat 20 rounds and try to get the lowest amount of tries or #2 is you can pick how many tries you have and you try to get to the farthest round with the amount of tries that you have. Type '1' for #1 and '2' for #2.")
    }
}

if (Answer == null && Name != null) {
    document.write("Please reload.")
}


if (Answer == "1") {

    var Number = 100
    var Guesses = 0
    var MaxTries = 7
    var RandomNumber = Math.floor(Math.random() * Number) + 1;
    var Correct = 0
    var Round = 1
    var TotalTries = 7

    while (Attempts != RandomNumber) {


        if (Name == null) {
            document.write("Please reload.")
            break
        }

        if (Name == "") {
            document.write("Please reload and enter a name.");
            break
        }

        (Attempts != RandomNumber); {
            var Attempts = prompt("Alright, " + Name + ". I'm thinking of a number between 1 and " + Number + ". You have " + TotalTries + " tries left. You are on round " + Round + ".");
            Guesses += 1;
            TotalTries -= 1;
        }

        if (Attempts == "") {
            alert("Whoops! You entered nothing. I have taken off a try for you.")
            Guesses -= 1;
            TotalTries += 1;
        }

        if (Guesses == -1) {
            Guesses += 1
        }



        if (Attempts == RandomNumber) {

            alert('Nice! You correctly guessed ' + RandomNumber + " in " + Guesses + " tries.")

            if (Round == 1) {
                var Round1 = Guesses;
            }

            if (Round == 2) {
                var Round2 = Guesses;
            }

            if (Round == 3) {
                var Round3 = Guesses;
            }

            if (Round == 4) {
                var Round4 = Guesses;
            }

            if (Round == 5) {
                var Round5 = Guesses;
            }

            if (Round == 6) {
                var Round6 = Guesses;
            }

            if (Round == 7) {
                var Round7 = Guesses;
            }

            if (Round == 8) {
                var Round8 = Guesses;
            }

            if (Round == 9) {
                var Round9 = Guesses;
            }

            if (Round == 10) {
                var Round10 = Guesses;
            }

            if (Round == 11) {
                var Round11 = Guesses;
            }

            if (Round == 12) {
                var Round12 = Guesses;
            }

            if (Round == 13) {
                var Round13 = Guesses;
            }

            if (Round == 14) {
                var Round14 = Guesses;
            }

            if (Round == 15) {
                var Round15 = Guesses;
            }

            if (Round == 16) {
                var Round16 = Guesses;
            }

            if (Round == 17) {
                var Round17 = Guesses;
            }

            if (Round == 18) {
                var Round18 = Guesses;
            }

            if (Round == 19) {
                var Round19 = Guesses;
            }

            if (Round == 20) {
                var Round20 = Guesses;
            }

            if (Guesses == 1) {
                alert('Whoa! Hold on there cheater! ;) It took you only one try to correctly guess ' + RandomNumber + '.' + ' Do you know the odds of doing that again?')
            }

            Correct += 1;
            Guesses = 0;

            if (Correct != 20) {
                alert('You are on a streak of ' + Correct + ".")
            }

            if (Correct == 3) {
                Number = 350;
                alert("*Notice* The number has changed to 350 and you have 9 tries from 7.")
            }

            if (Correct == 5) {
                alert("*Notice* The number has changed to 500 and you now have 10 tries from 9.")
                Number = 500;
                MaxTries = 10;
                TotalTries = 10;

            }

            if (Correct == 8) {
                alert("*Notice* The number has changed to 750 and you now have 11 tries from 10.")
                Number = 750;
                MaxTries = 11;
                TotalTries = 11;
            }

            if (Correct == 10) {
                alert("*Notice* The number has changed to 1,000 and you have 14 tries from 11.")
                Number = 1000;
                MaxTries = 14;
                TotalTries = 14;
            }

            if (Correct == 12) {
                alert("*Notice* The number has changed to 1,250 and you have 16 tries from 14.")
                Number = 1250;
                MaxTries = 16;
                TotalTries = 16;
            }

            if (Correct == 14) {
                alert("*Notice* The number has changed to 1,500 and you have 17 tries from 16.")
                Number = 1500;
                MaxTries = 17;
                TotalTries = 17;
            }

            if (Correct == 16) {
                alert("*Notice* The number has changed to 2,000 and you have 19 tries from 17.")
                Number = 2000
                MaxTries = 19;
                TotalTries = 19;
            }

            if (Correct == 20) {
                var Continue = prompt("Congratulations on BEATING The Guessing Game. Would you like to continue to get a higher score? Type 'Yes' or 'No'")

                var YorN = Continue.slice(0, 1); //YorN means Yes or No
                var YorNtoUpperCase = YorN.toUpperCase();
                var esORo = Continue.slice(1, 3); //esORo means Y(es) OR N(o)
                var LoweresORo = esORo.toLowerCase();
                var Continue = (YorNtoUpperCase + LoweresORo);

                if (Continue == "Yes") {
                    alert("You are on a streak of 20.");
                }

                if (Continue == "No") {
                    var endGameTries = Round1 + Round2 + Round3 + Round4 + Round5 + Round6 + Round7 + Round8 + Round9 + Round10 + Round11 + Round12 + Round13 + Round14 + Round15 + Round16 + Round17 + Round18 + Round19 + Round20
                    document.write("CONGRATULATIONS ON BEATING THE GAME!!! You beat the game with a total amount of " + endGameTries + " guesses.");
                    break
                }

                if (Continue == "") {
                    alert("I'm assuming you want to continue. You are on a streak of 20")
                }
            }

            if (Correct < 3) {
                MaxTries = 7;
                TotalTries = 7;
            }

            if (Correct >= 3 && Correct < 5) {
                MaxTries = 9;
                TotalTries = 9;
            }


            if (Correct >= 5 && Correct < 8) {
                MaxTries = 10;
                TotalTries = 10;
            }

            if (Correct >= 8 && Correct < 10) {
                MaxTries = 11;
                TotalTries = 11;
            }

            if (Correct >= 10 && Correct < 12) {
                MaxTries = 14;
                TotalTries = 14;
            }

            if (Correct >= 12 && Correct < 14) {
                MaxTries = 16;
                TotalTries = 16;
            }
            if (Correct >= 14 && Correct < 16) {
                MaxTries = 17;
                TotalTries = 17;
            }

            if (Correct >= 16) {
                MaxTries = 19;
                TotalTries = 19;
            }

            Round += 1;
            alert("This is the start of a new round.")


            {
                var RandomNumber = Math.floor(Math.random() * Number) + 1;
                var Attempts = prompt("Alright, " + Name + ". I'm thinking of a number between 1 and " + Number + ". You have " + TotalTries + " tries left. You are on round " + Round + ".");
                Guesses += 1;
                TotalTries -= 1;

                if (Attempts == "") {
                    alert("Whoops! You entered nothing. I have taken off a try for you.")
                    Guesses -= 1;
                    TotalTries += 1;
                }

                if (Attempts == RandomNumber) {
                    alert("WHOA! You guessed it right on your first try. Nice job!")
                    Correct += 1;
                    Guesses = 0;

                    if (Round == 1) {
                        var Round1 = Guesses;
                    }

                    if (Round == 2) {
                        var Round2 = Guesses;
                    }

                    if (Round == 3) {
                        var Round3 = Guesses;
                    }

                    if (Round == 4) {
                        var Round4 = Guesses;
                    }

                    if (Round == 5) {
                        var Round5 = Guesses;
                    }

                    if (Round == 6) {
                        var Round6 = Guesses;
                    }

                    if (Round == 7) {
                        var Round7 = Guesses;
                    }

                    if (Round == 8) {
                        var Round8 = Guesses;
                    }

                    if (Round == 9) {
                        var Round9 = Guesses;
                    }

                    if (Round == 10) {
                        var Round10 = Guesses;
                    }

                    if (Round == 11) {
                        var Round11 = Guesses;
                    }

                    if (Round == 12) {
                        var Round12 = Guesses;
                    }

                    if (Round == 13) {
                        var Round13 = Guesses;
                    }

                    if (Round == 14) {
                        var Round14 = Guesses;
                    }

                    if (Round == 15) {
                        var Round15 = Guesses;
                    }

                    if (Round == 16) {
                        var Round16 = Guesses;
                    }

                    if (Round == 17) {
                        var Round17 = Guesses;
                    }

                    if (Round == 18) {
                        var Round18 = Guesses;
                    }

                    if (Round == 19) {
                        var Round19 = Guesses;
                    }

                    if (Round == 20) {
                        var Round20 = Guesses;
                    }



                    if (Correct == 3) {
                        Number = 350;
                        alert("*Notice* The number has changed to 350 and you have 9 tries from 7.")
                    }

                    if (Correct == 5) {
                        alert("*Notice* The number has changed to 500 and you now have 10 tries from 9.")
                        Number = 500;
                        MaxTries = 10;
                        TotalTries = 10;

                    }

                    if (Correct == 8) {
                        alert("*Notice* The number has changed to 750 and you now have 11 tries from 10.")
                        Number = 750;
                        MaxTries = 11;
                        TotalTries = 11;
                    }

                    if (Correct == 10) {
                        alert("*Notice* The number has changed to 1,000 and you have 14 tries from 11.")
                        Number = 1000;
                        MaxTries = 14;
                        TotalTries = 14;
                    }

                    if (Correct == 12) {
                        alert("*Notice* The number has changed to 1,250 and you have 16 tries from 14.")
                        Number = 1250;
                        MaxTries = 16;
                        TotalTries = 16;
                    }

                    if (Correct == 14) {
                        alert("*Notice* The number has changed to 1,500 and you have 17 tries from 16.")
                        Number = 1500;
                        MaxTries = 17;
                        TotalTries = 17;
                    }

                    if (Correct == 16) {
                        alert("*Notice* The number has changed to 2,000 and you have 19 tries from 17.")
                        Number = 2000
                        MaxTries = 19;
                        TotalTries = 19;
                    }

                    if (Correct == 20) {
                        var Continue = prompt("Congratulations on BEATING The Guessing Game. Would you like to continue to get a higher score? Type 'Yes' or 'No'")

                        var YorN = Continue.slice(0, 1); //YorN means Yes or No
                        var YorNtoUpperCase = YorN.toUpperCase();
                        var esORo = Continue.slice(1, 3); //esORo means Y(es) OR N(o)
                        var LoweresORo = esORo.toLowerCase();
                        var Continue = (YorNtoUpperCase + LoweresORo);

                        if (Continue == "Yes") {
                            alert("You are on a streak of 20.");
                        }

                        if (Continue == "No") {
                            var endGameTries = Round1 + Round2 + Round3 + Round4 + Round5 + Round6 + Round7 + Round8 + Round9 + Round10 + Round11 + Round12 + Round13 + Round14 + Round15 + Round16 + Round17 + Round18 + Round19 + Round20
                            document.write("CONGRATULATIONS ON BEATING THE GAME!!! You beat the game in " + endGameTries + " tries.");
                            break
                        }

                        if (Continue == "") {
                            alert("I'm assuming you want to continue. You are on a streak of 20.")
                        }
                    }

                    if (Correct < 3) {
                        MaxTries = 7;
                        TotalTries = 7;
                    }

                    if (Correct >= 3 && Correct < 5) {
                        MaxTries = 9;
                        TotalTries = 9;
                    }


                    if (Correct >= 5 && Correct < 8) {
                        MaxTries = 10;
                        TotalTries = 10;
                    }

                    if (Correct >= 8 && Correct < 10) {
                        MaxTries = 11;
                        TotalTries = 11;
                    }

                    if (Correct >= 10 && Correct < 12) {
                        MaxTries = 14;
                        TotalTries = 14;
                    }

                    if (Correct >= 12 && Correct < 14) {
                        MaxTries = 16;
                        TotalTries = 16;
                    }
                    if (Correct >= 14 && Correct < 16) {
                        MaxTries = 17;
                        TotalTries = 17;
                    }

                    if (Correct >= 16) {
                        MaxTries = 19;
                        TotalTries = 19;
                    }
                    Round += 1;
                    alert("This is the start of a new round.")
                    var RandomNumber = Math.floor(Math.random() * Number) + 1;
                    var Attempts = prompt("Alright, " + Name + ". I'm thinking of a number between 1 and " + Number + ". You have " + TotalTries + " tries left. You are on round " + Round + ".");
                    Guesses += 1;
                }

                if (Attempts == RandomNumber) {
                    alert("WHOA! You guessed it right on your first try. Nice job!")
                    Correct += 1;
                    Guesses = 0;

                    if (Round == 1) {
                        var Round1 = Guesses;
                    }

                    if (Round == 2) {
                        var Round2 = Guesses;
                    }

                    if (Round == 3) {
                        var Round3 = Guesses;
                    }

                    if (Round == 4) {
                        var Round4 = Guesses;
                    }

                    if (Round == 5) {
                        var Round5 = Guesses;
                    }

                    if (Round == 6) {
                        var Round6 = Guesses;
                    }

                    if (Round == 7) {
                        var Round7 = Guesses;
                    }

                    if (Round == 8) {
                        var Round8 = Guesses;
                    }

                    if (Round == 9) {
                        var Round9 = Guesses;
                    }

                    if (Round == 10) {
                        var Round10 = Guesses;
                    }

                    if (Round == 11) {
                        var Round11 = Guesses;
                    }

                    if (Round == 12) {
                        var Round12 = Guesses;
                    }

                    if (Round == 13) {
                        var Round13 = Guesses;
                    }

                    if (Round == 14) {
                        var Round14 = Guesses;
                    }

                    if (Round == 15) {
                        var Round15 = Guesses;
                    }

                    if (Round == 16) {
                        var Round16 = Guesses;
                    }

                    if (Round == 17) {
                        var Round17 = Guesses;
                    }

                    if (Round == 18) {
                        var Round18 = Guesses;
                    }

                    if (Round == 19) {
                        var Round19 = Guesses;
                    }

                    if (Round == 20) {
                        var Round20 = Guesses;
                    }


                    if (Correct == 3) {
                        Number = 350;
                        alert("*Notice* The number has changed to 350 and you have 9 tries from 7.")
                    }

                    if (Correct == 5) {
                        alert("*Notice* The number has changed to 500 and you now have 10 tries from 9.")
                        Number = 500;
                        MaxTries = 10;
                        TotalTries = 10;

                    }

                    if (Correct == 8) {
                        alert("*Notice* The number has changed to 750 and you now have 11 tries from 10.")
                        Number = 750;
                        MaxTries = 11;
                        TotalTries = 11;
                    }

                    if (Correct == 10) {
                        alert("*Notice* The number has changed to 1,000 and you have 14 tries from 11.")
                        Number = 1000;
                        MaxTries = 14;
                        TotalTries = 14;
                    }

                    if (Correct == 12) {
                        alert("*Notice* The number has changed to 1,250 and you have 16 tries from 14.")
                        Number = 1250;
                        MaxTries = 16;
                        TotalTries = 16;
                    }

                    if (Correct == 14) {
                        alert("*Notice* The number has changed to 1,500 and you have 17 tries from 16.")
                        Number = 1500;
                        MaxTries = 17;
                        TotalTries = 17;
                    }

                    if (Correct == 16) {
                        alert("*Notice* The number has changed to 2,000 and you have 19 tries from 17.")
                        Number = 2000
                        MaxTries = 19;
                        TotalTries = 19;
                    }

                    if (Correct == 20) {
                        var Continue = prompt("Congratulations on BEATING The Guessing Game. Would you like to continue to get a higher score? Type 'Yes' or 'No'")

                        var YorN = Continue.slice(0, 1); //YorN means Yes or No
                        var YorNtoUpperCase = YorN.toUpperCase();
                        var esORo = Continue.slice(1, 3); //esORo means Y(es) OR N(o)   
                        var LoweresORo = esORo.toLowerCase();
                        var Continue = (YorNtoUpperCase + LoweresORo);

                        if (Continue == "Yes") {
                            alert("You are on a streak of 20.");
                        }

                        if (Continue == "No") {
                            var endGameTries = Round1 + Round2 + Round3 + Round4 + Round5 + Round6 + Round7 + Round8 + Round9 + Round10 + Round11 + Round12 + Round13 + Round14 + Round15 + Round16 + Round17 + Round18 + Round19 + Round20
                            document.write("CONGRATULATIONS ON BEATING THE GAME!!! You beat the game in " + endGameTries + " tries.");
                            break
                        }

                        if (Continue == "") {
                            alert("I'm assuming you want to continue. You are on a streak of 20.")
                        }

                    }


                    if (Correct < 3) {
                        MaxTries = 7;
                        TotalTries = 7;
                    }

                    if (Correct >= 3 && Correct < 5) {
                        MaxTries = 9;
                        TotalTries = 9;
                    }


                    if (Correct >= 5 && Correct < 8) {
                        MaxTries = 10;
                        TotalTries = 10;
                    }

                    if (Correct >= 8 && Correct < 10) {
                        MaxTries = 11;
                        TotalTries = 11;
                    }

                    if (Correct >= 10 && Correct < 12) {
                        MaxTries = 14;
                        TotalTries = 14;
                    }

                    if (Correct >= 12 && Correct < 14) {
                        MaxTries = 16;
                        TotalTries = 16;
                    }
                    if (Correct >= 14 && Correct < 16) {
                        MaxTries = 17;
                        TotalTries = 17;
                    }

                    if (Correct >= 16) {
                        MaxTries = 19;
                        TotalTries = 19;
                    }
                    Round += 1;
                    alert("This is the start of a new round.")
                    var RandomNumber = Math.floor(Math.random() * Number) + 1;
                    var Attempts = prompt("Alright, " + Name + ". I'm thinking of a number between 1 and " + Number + ". You have " + TotalTries + " tries left.  You are on round " + Round + ".");
                    Guesses += 1;
                    TotalTries -= 1;
                }
            }


        }




        if (Attempts == null) { //If user presses the "Cancel" button it will end the code and display the messages below.

            if (Correct <= 19) {
                document.write("You have ended the game with a streak of " + Correct + ".")
                break
            }

            if (Correct > 19) {
                var endGameTries = Round1 + Round2 + Round3 + Round4 + Round5 + Round6 + Round7 + Round8 + Round9 + Round10 + Round11 + Round12 + Round13 + Round14 + Round15 + Round16 + Round17 + Round18 + Round19 + Round20
                document.write("Congrats on beating the game. In 20 rounds you ended up with a total of " + endGameTries + " guesses. You ended the game with a streak of " + Correct + ".")
                break
            }

        }

        if (Attempts != "" && Attempts <= Number && Attempts > 0) {
            if (Attempts < RandomNumber) { //If user types in answer lower than the random number the system will tell them to guess higher
                alert('Higher!');
            }
        }
        if (Attempts != "" && Attempts <= Number && Attempts > 0) {
            if (Attempts > RandomNumber) { //If user types in answer higher than the random number the system will tell them to guess lower
                alert('Lower!');
            }
        }


        if (Guesses == MaxTries - 1) { // If user is on it's last try the system will display the message below
            alert('This is your last try!!! Make it a good one! GOOD LUCK. :)');
        }



        if (Guesses >= MaxTries) { //If the user reaches its max tries the game will end
            alert('You have no more tries left. The correct answer was ' + RandomNumber + ".")
            document.write(" You went on a streak of " + Correct + ".")
            break
        }


        if (Attempts > Number) { //If the user typed a number bigger than what your suppose to guess the system will display the message below
            Guesses -= 1;
            TotalTries += 1;
            alert("Whoa. That's a bit too high of a guess. Try a number below " + Number + " next time.")
        }
        if (Attempts != "") {
            if (Attempts < 1) { //If the user typed a number lower than 0 the system will display the message below
                Guesses -= 1;
                TotalTries += 1;
                alert("Yikes! You entered a number below what was possible. Try a number higher than 0 this time.")
            }
        }

    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (Answer == "2") {

    var Tries = prompt("How much tries would you like? Please type 30 through 500.")
    var Number = 100
    var Guesses = 0
    var RandomNumber = Math.floor(Math.random() * Number) + 1;
    var Round = 1
    var TotalTries = Tries

    while (Attempts != RandomNumber) {

        if (Tries != null && Tries != "") {
            if (TotalTries > 500) {
                document.write("Please reload and enter a number between 30 and 500.")
                break
            }

            if (TotalTries < 30) {
                document.write("Please reload and enter a number between 30 and 500.")
                break
            }
        }

        if (Guesses == TotalTries - 1) {
            alert("This is your last try! Make it a good one.")
        }


        var Attempts = prompt("Alright, " + Name + ". I'm thinking of a number between 1 and " + Number + ". You have " + Tries + " tries left. You are on round " + Round + ".");


        if (Attempts == null) {
            document.write("You ended the game on round " + Round + " with " + Tries + " tries left.")
            break
        }

        Guesses += 1;
        Tries -= 1;

        if (Attempts == "") {
            alert("Whoops! You entered nothing. I have taken off a try for you.")
            Guesses -= 1;
            Tries += 1;
        }

        if (Attempts > RandomNumber && Guesses != TotalTries) {
            if (Attempts != null) {
                if (Attempts != "") {
                    alert("Lower!")
                }
            }
        }

        if (Attempts < RandomNumber && Guesses != TotalTries) {
            if (Attempts != null) {
                if (Attempts != "") {
                    alert("Higher!")
                }
            }
        }

        if (Attempts == RandomNumber) {
            Round += 1;
            {
                alert('Nice! You correctly guessed ' + RandomNumber + ".")
            }

            if (Round == 3) {
                Number = 350;
                alert("*Notice* The number has changed to 350.")
            }

            if (Round == 5) {
                alert("*Notice* The number has changed to 500.")
                Number = 500;
            }

            if (Round == 8) {
                alert("*Notice* The number has changed to 750.")
                Number = 750;
            }

            if (Round == 10) {
                alert("*Notice* The number has changed to 1,000")
                Number = 1000;
            }

            if (Round == 12) {
                alert("*Notice* The number has changed to 1,250.")
                Number = 1250;
            }

            if (Round == 14) {
                alert("*Notice* The number has changed to 1,500.")
                Number = 1500;
            }

            if (Round == 16) {
                alert("*Notice* The number has changed to 2,000.")
                Number = 2000
            }

            alert("This is the start of a new round.")

            var RandomNumber = Math.floor(Math.random() * Number) + 1;

            if (Guesses == TotalTries - 1) {
                alert("This is your last try! Make it a good one.")
            }

            var Attempts = prompt("Alright, " + Name + ". I'm thinking of a number between 1 and " + Number + ". You have " + Tries + " tries left. You are on round " + Round + ".");

            if (Attempts == null) {
                document.write("You ended the game on round " + Round + " with " + Tries + " tries left.")
                break
            }
            Guesses += 1;
            Tries -= 1;

            if (Attempts == "") {
                alert("Whoops! You entered nothing. I have taken off a try for you.")
                Guesses -= 1;
                Tries += 1;
            }

            if (Attempts > RandomNumber && Guesses != TotalTries) {
                if (Attempts != null) {
                    if (Attempts != "") {
                        alert("Lower!")
                    }
                }
            }

            if (Attempts < RandomNumber && Guesses != TotalTries) {
                if (Attempts != null) {
                    if (Attempts != "") {
                        alert("Higher!")
                    }
                }
            }
            if (Attempts == RandomNumber) {
                alert("WHOA! You guessed it right on your first try. Nice job!")
                Round += 1;

                if (Round == 3) {
                    Number = 350;
                    alert("*Notice* The number has changed to 350.")
                }

                if (Round == 5) {
                    alert("*Notice* The number has changed to 500.")
                    Number = 500;
                }

                if (Round == 8) {
                    alert("*Notice* The number has changed to 750.")
                    Number = 750;
                }

                if (Round == 10) {
                    alert("*Notice* The number has changed to 1,000")
                    Number = 1000;
                }

                if (Round == 12) {
                    alert("*Notice* The number has changed to 1,250.")
                    Number = 1250;
                }

                if (Round == 14) {
                    alert("*Notice* The number has changed to 1,500.")
                    Number = 1500;
                }

                if (Round == 16) {
                    alert("*Notice* The number has changed to 2,000.")
                    Number = 2000
                }

                alert("This is the start of a new round.")

                var RandomNumber = Math.floor(Math.random() * Number) + 1;

                if (Guesses == TotalTries - 1) {
                    alert("This is your last try! Make it a good one.")
                }

                var Attempts = prompt("Alright, " + Name + ". I'm thinking of a number between 1 and " + Number + ". You have " + Tries + " tries left. You are on round " + Round + ".");

                if (Attempts == null) {
                    document.write("You ended the game on round " + Round + " with " + Tries + " tries left.")
                    break
                }
                Guesses += 1;
                Tries -= 1;

                if (Attempts == "") {
                    alert("Whoops! You entered nothing. I have taken off a try for you.")
                    Guesses -= 1;
                    Tries += 1;
                }

                if (Attempts > RandomNumber && Guesses != TotalTries) {
                    if (Attempts != null) {
                        if (Attempts != "") {
                            alert("Lower!")
                        }
                    }
                }

                if (Attempts < RandomNumber && Guesses != TotalTries) {
                    if (Attempts != null) {
                        if (Attempts != "") {
                            alert("Higher!")
                        }
                    }
                }

                if (Attempts == RandomNumber) {
                    alert("WHOA! You guessed it right on your first try. Nice job!")
                    Round += 1;

                    if (Round == 3) {
                        Number = 350;
                        alert("*Notice* The number has changed to 350.")
                    }

                    if (Round == 5) {
                        alert("*Notice* The number has changed to 500.")
                        Number = 500;
                    }

                    if (Round == 8) {
                        alert("*Notice* The number has changed to 750.")
                        Number = 750;
                    }

                    if (Round == 10) {
                        alert("*Notice* The number has changed to 1,000")
                        Number = 1000;
                    }

                    if (Round == 12) {
                        alert("*Notice* The number has changed to 1,250.")
                        Number = 1250;
                    }

                    if (Round == 14) {
                        alert("*Notice* The number has changed to 1,500.")
                        Number = 1500;
                    }

                    if (Round == 16) {
                        alert("*Notice* The number has changed to 2,000.")
                        Number = 2000
                    }
                    alert("This is the start of a new round.")

                    var RandomNumber = Math.floor(Math.random() * Number) + 1;

                    if (Guesses == TotalTries - 1) {
                        alert("This is your last try! Make it a good one.")
                    }

                    var Attempts = prompt("Alright, " + Name + ". I'm thinking of a number between 1 and " + Number + ". You have " + Tries + " tries left. You are on round " + Round + ".");

                    if (Attempts == null) {
                        document.write("You ended the game on round " + Round + " with " + Tries + " tries left.")
                        break
                    }
                    Guesses += 1;
                    Tries -= 1;

                    if (Attempts == "") {
                        alert("Whoops! You entered nothing. I have taken off a try for you.")
                        Guesses -= 1;
                        Tries += 1;
                    }

                    if (Attempts > RandomNumber && Guesses != TotalTries) {
                        if (Attempts != null) {
                            if (Attempts != "") {
                                alert("Lower!")
                            }
                        }
                    }

                    if (Attempts < RandomNumber && Guesses != TotalTries) {
                        if (Attempts != null) {
                            if (Attempts != "") {
                                alert("Higher!")
                            }
                        }
                    }
                }

            }
        }
        if (Guesses >= TotalTries) {
            alert("Bad news: You ran out of tries. Good News: You got to Round " + Round + " in " + TotalTries + " tries.")
            document.write("Nice! You got to Round " + Round + " in " + TotalTries + " tries.")
            break
        }
    }
}




/*

 For playing offline to paste in the HTML "Body" Section to make the font arial, font color orange, and size 25px

<font color="Orange"</font>
<font face="Arial"</font>
<font size="25"</font>

*/

/*

 <script src="Guessing Game.js"></script>

 */
