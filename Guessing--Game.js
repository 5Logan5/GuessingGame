var Number = 100;
var RandomNumber = Math.floor(Math.random() * Number) + 1;
var Streak = 0;
var Guesses = 0;
var MaxTries = 10;
var TotalTries = 10;
var Round = 1;
var Name = prompt("Hi, welcome to my Guessing Game! Before we begin, what is your name?");


while (Answer != RandomNumber) {

  (Answer != RandomNumber); {
    if (Guesses == MaxTries - 1) {
      alert("This is your last try!");
    }
    var Answer = prompt("Alright, " + Name + ". I'm thinking of a number between 0 and " + Number + ". You have " + TotalTries + " tries left.");
    Guesses += 1;
    TotalTries -= 1;
  }

  if (Answer == null) {
    document.write("You have ended the game with a streak of " + Streak + ".");
    break
  }

  if (Guesses >= MaxTries) {
    alert("Nice try! The correct answer was " + RandomNumber + ". Better luck next time!");
    document.write("You lost the game while on a streak of " + Streak + ".")
    break
  }

  if (Streak < 10) {
    if (Answer > RandomNumber) {
      alert("Lower!");
    }

  }

  if (Streak < 10) {
    if (Answer < RandomNumber) {
      alert("Higher!");
    }
  }

  if (Answer > Number) {
    Guesses -= 1;
    TotalTries += 1;
    alert("Whoa! You entered a number higher than " + Number + ". Please enter a number lower than " + Number + " next time.")
  }

  if (Answer < 0) {
    Guesses -= 1;
    TotalTries += 1;
    alert("Oops! You entered a number below 0. Please enter a number higher than 0 next time.")
  }

  if (Guesses < 0) {
    Guesses += 1;
  }

  if (Answer == RandomNumber) {
    alert("Nice! You correctly guessed " + RandomNumber + " in " + Guesses + " tries.");
    Guesses = 0;
    TotalTries = 10;
    Streak += 1;
    Round += 1;

    if (Streak == 3) {
      Number = 350;
      alert("*Notice* The number has changed to 350.")
    }

    if (Streak == 5) {
      Number = 500;
      MaxTries = 12;
      TotalTries = 12;
      alert("*Notice* The number has changed to 500 and you now have 12 tries from 10.")
    }

    if (Streak == 8) {
      Number = 750;
      MaxTries = 14;
      TotalTries = 14;
      alert("*Notice* The number has changed to 750 and you now have 14 tries from 12.")
    }

    if (Streak == 10) {
      Number = 10;
      MaxTries = 3;
      TotalTries = 3;
      alert("*Notice* The number has changed to 10 and you have 3 tries from 14. AND you don't have any hints to tell you if the number is higher or lower. The game will remain like this until you lose.")
    }

    {
      alert("This is the start of a new round and are now on round " + Round + ".")
      var RandomNumber = Math.floor(Math.random() * Number) + 1;
    }

  }

}
