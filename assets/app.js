var userChoice = prompt("Please enter R(rock), P(paper), or S(scissors)");
console.log(userChoice);

var compOptions = ["R", "P", "S"];

var compChoice = Math.floor(Math.random() * compOptions.length);
console.log(compChoice, compOptions[compChoice]);

alert("The computer chose " + compOptions[compChoice]);
