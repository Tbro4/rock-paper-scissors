var wins = 0;
var loses = 0;
var ties = 0;
var compOptions = ["R", "P", "S"];

var userChoice = prompt("Please enter R(rock), P(paper), or S(scissors)");
console.log(userChoice);

var cleanChoice = userChoice.toUpperCase();
console.log(cleanChoice);

var compChoice = Math.floor(Math.random() * compOptions.length);
console.log(compOptions[compChoice]);

if (cleanChoice === compOptions[compChoice]) {
  alert(
    "The computer also chose " + compOptions[compChoice] + "." + " It's a tie!"
  );
  ties++;
} else if (cleanChoice === "R") {
  if (compOptions[compChoice] === "S") {
    alert(
      "The computer chose " +
        compOptions[compChoice] +
        "." +
        " 🎉🎉 You win! 🎉🎉"
    );
    wins++;
  } else {
    alert(
      "The computer chose " + compOptions[compChoice] + "." + " You lose! 😥"
    );
    loses++;
  }
} else if (cleanChoice === "P") {
  if (compOptions[compChoice] === "R") {
    alert(
      "The computer chose " +
        compOptions[compChoice] +
        "." +
        " 🎉🎉 You win! 🎉🎉"
    );
    wins++;
  } else {
    alert(
      "The computer chose " + compOptions[compChoice] + "." + " You lose! 😥"
    );
    loses++;
  }
} else if (cleanChoice === "S") {
  if (compOptions[compChoice] === "P") {
    alert(
      "The computer chose " +
        compOptions[compChoice] +
        "." +
        " 🎉🎉 You win! 🎉🎉"
    );
    wins++;
  } else {
    alert(
      "The computer chose " + compOptions[compChoice] + "." + " You lose! 😥"
    );
    loses++;
  }
}
alert("Wins: " + wins + "Loses: " + loses + "Ties: " + ties);

var playAgain = confirm("Would you like to play again?");
console.log(playAgain);
