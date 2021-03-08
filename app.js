// Cashing Html
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const computerChoice_div = document.querySelector(".computer-choice");
const actionMessage_dive = document.getElementById("action-message");

main();
getComputerChoice();
restart();
actionMessage_dive.addEventListener("click", restart);

function main() {
  rock_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissor_div.addEventListener("click", () => game("s"));
}

function restart() {
  console.log(userScore);

  userScore = 0;
  computerScore = 0;
  userScore_span.innerText = userScore;
  computerScore_span.innerText = computerScore;

  console.log(";;;;");
}

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  switch (letter) {
    case "r":
      return "Rock";
      break;
    case "p":
      return "Paper";
      break;
    case "s":
      return "scisser";
      break;
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerText = userScore;
  computerScore_span.innerText = computerScore;
  result_p.innerHTML = "You win!";

  console.log(userChoice);
  console.log(computerChoice);

  document.getElementById(userChoice).classList.add("green-glow");

  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerText = userScore;
  computerScore_span.innerText = computerScore;
  result_p.innerHTML = "computer wins!";

  document.getElementById(userChoice).classList.add("red-glow");

  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 1000);
}

function draw(userChoice) {
  userScore_span.innerText = userScore;
  computerScore_span.innerText = computerScore;
  result_p.innerHTML = "Tie game!";

  document.getElementById(userChoice).classList.add("gray-glow");

  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("gray-glow");
  }, 1000);
}

function game(userChoice) {
  //console.log('clicked  ' + userchoice)
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      // console.log('You win')
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      //console.log("YOU lose")
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      // console.log("Tie")
      draw(userChoice, computerChoice);
      break;
  }

  //computerChoice_div.innerText = convertToWord(computerChoice)

  switch (computerChoice) {
    case "r":
      document.getElementById("compChoice").classList.add("computer-rock");
      setTimeout(function () {
        document.getElementById("compChoice").classList.remove("computer-rock");
      }, 1000);
      break;
    case "p":
      document.getElementById("compChoice").classList.add("computer-paper");
      setTimeout(function () {
        document
          .getElementById("compChoice")
          .classList.remove("computer-paper");
      }, 1000);
      break;
    case "s":
      document.getElementById("compChoice").classList.add("computer-scisser");
      setTimeout(function () {
        document
          .getElementById("compChoice")
          .classList.remove("computer-scisser");
      }, 1000);
      break;
  }
}

function declareWinner(who) {
  document.querySelector(".endgame").style.display = "block";
  document.querySelector(".endgame .text").innerText = who;
}
