const choices = document.querySelectorAll(".choice");
const y_score = document.querySelector("#your-score");
const c_score = document.querySelector("#computer-score");
const result = document.querySelector("#result");
let your_score = 0;
let com_score = 0;
displayScore();

choices.forEach((choice) => {
  choice.addEventListener("click", function (e) {
    const userChoice = choice.getAttribute("id");
    checkWin(userChoice);
  });
});

function computerPlay() {
  return parseInt(Math.random() * 3);
}

function displayScore() {
  y_score.innerText = your_score;
  c_score.innerText = com_score;
}

function checkWin(userChoice) {
  let comChoice = computerPlay();
  let computerChoice;
  switch (comChoice) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  if (userChoice === computerChoice) {
    result.innerText = "DRAW!";
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    your_score++;
    displayScore();
    result.innerText = "YOU WIN!";
  } else if (
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    com_score++;
    displayScore();
    result.innerText = "COMPUTER WIN!";
  } else {
    console.log("INVALID");
  }
}
