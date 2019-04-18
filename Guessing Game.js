console.log('Welcome to V.10 of my Guessing Game')
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
//Patch Notes: V.9.4 Removed/changed some things and fixed some bugs
//Patch Notes: V.10 BIG UPDATE: Added/changed some things (Max letters in a name is now 30, error messages in console, game is harder (Amount of tries are lowered), took off game mode two and everytime you win, a cookie will be created for like a little achievement.)

var Name = prompt("Before we begin the game, what is your name? (Max = 30 Letters)");


if (Name != null) {
    // Capitilizing the first letter of name
    var firstChar = Name.slice(0, 1);
    var upperCaseName = firstChar.toUpperCase();
    var restOfName = Name.slice(1, 30);
    var restOfNameLowerCase = restOfName.toLowerCase();
    var Name = (upperCaseName + restOfNameLowerCase);
}

if (Name == null) {
    document.write("Please reload and enter a name.")
    console.error("Please enter a name.")
}

if (Name == "") {
    document.write("Please reload and enter a name.")
    console.error("Please enter a name.")
}

if (Name != null) {
    if (Name != "") {
        var Answer = prompt("Hello, " + Name + ". Welcome to the Guessing Game, pretty much explains the rules in the title so, type '1' to start.")
    }
}

if (Name != null && Name != "") {
    if (Answer == "") {
        document.write("Please reload and enter a game mode.")
        console.error("Please enter a game mode.")
    }
}

if (Name != null && Name != "") {
    if (Answer == null) {
        document.write("Please reload and enter a game mode.")
        console.error("Please enter a game mode.")
    }
}

if (Answer == "1") {

    var Number = 100
    var Guesses = 0
    var MaxTries = 8
    var RandomNumber = Math.floor(Math.random() * Number) + 1;
    var Correct = 0
    var Round = 1
    var TotalTries = 8

    while (Attempts != RandomNumber) {

        (Attempts != RandomNumber); {
            var Attempts = prompt("Alright, " + Name + ". I'm thinking of a number between 1 and " + Number + ". You have " + TotalTries + " tries left. You are on round " + Round + "." + RandomNumber);
            Guesses += 1;
            TotalTries -= 1;
        }

        if (Attempts == "") {
            Guesses -= 1;
            TotalTries += 1;
            alert("Whoops! You entered nothing. You still have " + TotalTries + " tries left.")
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
                alert("*Notice* The number has changed to 350 and you have 9 tries from 8.")
            }

            if (Correct == 5) {
                alert("*Notice* The number has changed to 500 and you now have 10 tries from 9.")
                Number = 500;
                MaxTries = 10;
                TotalTries = 10;

            }

            if (Correct == 8) {
                alert("*Notice* The number has changed to 750 and you now have 12 tries from 10.")
                Number = 750;
                MaxTries = 12;
                TotalTries = 12;
            }

            if (Correct == 10) {
                alert("*Notice* The number has changed to 1,000 and you have 14 tries from 12.")
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

                document.cookie = "Achievement = Congrats You Win; expires=Tue, 31 Dec 2030 12:00:00 UTC";

                var Continue = prompt("Congrats on beating the game! Would you like to continue to get a higher score? Type 'Yes' or 'No'")

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
                    document.write("Congrats on beating the game!!! You beat the game with a total amount of " + endGameTries + " guesses.");
                    break
                }

                if (Continue == "") {
                    var Continue2 = prompt("Oops! You entered nothing. As I was saying, Congrats on beating the Guessing Game. Would you like to continue to get a higher score. Type 'Yes' or 'No'. ")

                    var YorN2 = Continue2.slice(0, 1); //YorN means Yes or No
                    var YorNtoUpperCase2 = YorN2.toUpperCase();
                    var esORo2 = Continue2.slice(1, 3); //esORo means Y(es) OR N(o)
                    var LoweresORo2 = esORo2.toLowerCase();
                    var Continue2 = (YorNtoUpperCase2 + LoweresORo2);

                    if (Continue2 == "Yes") {
                        alert("You are on a streak of 20.")
                    }

                    if (Continue2 == "No") {
                        var endGameTries = Round1 + Round2 + Round3 + Round4 + Round5 + Round6 + Round7 + Round8 + Round9 + Round10 + Round11 + Round12 + Round13 + Round14 + Round15 + Round16 + Round17 + Round18 + Round19 + Round20
                        document.write("Congrats on beating the game!!! You beat the game with a total amount of " + endGameTries + " guesses.");
                        break
                    }
                }
            }

            if (Correct < 3) {
                MaxTries = 8;
                TotalTries = 8;
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
                MaxTries = 12;
                TotalTries = 12;
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
                    Guesses -= 1;
                    TotalTries += 1;
                    alert("Whoops! You entered nothing. You still have " + TotalTries + " tries left.")
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
                        alert("*Notice* The number has changed to 350 and you have 9 tries from 8.")
                    }

                    if (Correct == 5) {
                        alert("*Notice* The number has changed to 500 and you now have 10 tries from 9.")
                        Number = 500;
                        MaxTries = 10;
                        TotalTries = 10;

                    }

                    if (Correct == 8) {
                        alert("*Notice* The number has changed to 750 and you now have 12 tries from 10.")
                        Number = 750;
                        MaxTries = 12;
                        TotalTries = 12;
                    }

                    if (Correct == 10) {
                        alert("*Notice* The number has changed to 1,000 and you have 14 tries from 12.")
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

                        document.cookie = "Achievement = Congrats You Win; expires=Thu, 31 Dec 2030 12:00:00 UTC";

                        var Continue = prompt("Congrats on beating the game. Would you like to continue to get a higher score? Type 'Yes' or 'No'")

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
                            document.write("Congrats on beating the game!!! You beat the game in " + endGameTries + " tries.");
                            break
                        }

                        if (Continue == "") {
                            var Continue2 = prompt("You enterd nothing. Would you like to continue to get a higher score? Type 'Yes' or 'No'. ")
                            var YorN2 = Continue2.slice(0, 1); //YorN means Yes or No
                            var YorNtoUpperCase2 = YorN2.toUpperCase();
                            var esORo2 = Continue2.slice(1, 3); //esORo means Y(es) OR N(o)
                            var LoweresORo2 = esORo2.toLowerCase();
                            var Continue2 = (YorNtoUpperCase2 + LoweresORo2);

                            if (Continue2 == "Yes") {
                                alert("You are on a streak of 20.")
                            }

                            if (Continue2 == "No") {
                                var endGameTries = Round1 + Round2 + Round3 + Round4 + Round5 + Round6 + Round7 + Round8 + Round9 + Round10 + Round11 + Round12 + Round13 + Round14 + Round15 + Round16 + Round17 + Round18 + Round19 + Round20
                                document.write("Congrats on beating the game!!! You beat the game in " + endGameTries + " tries.");
                                break
                            }
                        }
                    }

                    if (Correct < 3) {
                        MaxTries = 8;
                        TotalTries = 8;
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
                        MaxTries = 12;
                        TotalTries = 12;
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
                        alert("*Notice* The number has changed to 350 and you have 9 tries from 8.")
                    }

                    if (Correct == 5) {
                        alert("*Notice* The number has changed to 500 and you now have 10 tries from 9.")
                        Number = 500;
                        MaxTries = 10;
                        TotalTries = 10;

                    }

                    if (Correct == 8) {
                        alert("*Notice* The number has changed to 750 and you now have 12 tries from 10.")
                        Number = 750;
                        MaxTries = 12;
                        TotalTries = 12;
                    }

                    if (Correct == 10) {
                        alert("*Notice* The number has changed to 1,000 and you have 14 tries from 12.")
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

                        document.cookie = "Achievement = Congrats You Win; expires=Thu, 31 Dec 2030 12:00:00 UTC";

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
                            document.write("Congrats on beating the game!!! You beat the game in " + endGameTries + " tries.");
                            break
                        }

                        if (Continue == "") {
                            var Continue2 = prompt("Would you like to continue to get a higher score? Type 'Yes' or 'No'. ")
                            var YorN2 = Continue2.slice(0, 1); //YorN means Yes or No
                            var YorNtoUpperCase2 = YorN2.toUpperCase();
                            var esORo2 = Continue2.slice(1, 3); //esORo means Y(es) OR N(o)   
                            var LoweresORo2 = esORo2.toLowerCase();
                            var Continue2 = (YorNtoUpperCase2 + LoweresORo2);

                            if (Continue2 == "Yes") {
                                alert("You are on a streak of 20.");
                            }

                            if (Continue2 == "No") {
                                var endGameTries = Round1 + Round2 + Round3 + Round4 + Round5 + Round6 + Round7 + Round8 + Round9 + Round10 + Round11 + Round12 + Round13 + Round14 + Round15 + Round16 + Round17 + Round18 + Round19 + Round20
                                document.write("Congrats on beating the game!!! You beat the game in " + endGameTries + " tries.");
                                break
                            }

                        }

                    }


                    if (Correct < 3) {
                        MaxTries = 8;
                        TotalTries = 8;
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
                        MaxTries = 12;
                        TotalTries = 12;
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


/*
 For playing offline to paste in the HTML "Body" Section to make the font arial, font color orange, and size 25px
<font color="Orange"</font>
<font face="plain"</font>
<font size="25"</font>
*/

/*
 <script src="Guessing Game.js"></script>
 */
