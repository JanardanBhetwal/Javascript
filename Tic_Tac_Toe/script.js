const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset-game");
let result = document.querySelector("#result");

let turnO = true;
let turns = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    turns++;
    game(box);
  });
});

function game(box) {
  if (turnO) {
    turnO = false;
    box.innerText = "O";
    box.style.color = "#260d54";
  } else {
    turnO = true;
    box.innerText = "X";
    box.style.color = "#00736b";
  }
  box.disabled = true;
  // checkWin();
  if (!checkWin()) {
    checkDraw();
  }
}

function checkWin() {
  for (let pattern of winPatterns) {
    let pos0 = boxes[pattern[0]].innerText;
    let pos1 = boxes[pattern[1]].innerText;
    let pos2 = boxes[pattern[2]].innerText;
    if (pos0 != "" && pos1 != "" && pos2 != "") {
      if (pos0 == pos1 && pos1 == pos2) {
        gameover();
        return true;
      }
    }
  }
}

function checkDraw() {
  if (turns >= 9) {
    result.innerText = "Draw! No one is the winner";
    reset.style.visibility = "visible";
  }
}

function gameover() {
  let winner;
  if (turnO) {
    winner = "X";
  } else {
    winner = "O";
  }
  result.innerText = `Congratulations, the winner is ${winner}`;
  reset.style.visibility = "visible";
  boxes.forEach((box) => {
    box.disabled = true;
  });
}

reset.addEventListener("click", () => {
  turnO = true;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  result.innerText = "";
  reset.style.visibility = "hidden";
  turns = 0;
});
