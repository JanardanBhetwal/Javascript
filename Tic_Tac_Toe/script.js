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

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    game(box);
  });
});

function game(box) {
  if (turnO) {
    turnO = false;
    box.innerText = "O";
  } else {
    turnO = true;
    box.innerText = "X";
  }
  box.disabled = true;
  checkWin();
}

function checkWin() {
  for (let pattern of winPatterns) {
    let pos0 = boxes[pattern[0]].innerText;
    let pos1 = boxes[pattern[1]].innerText;
    let pos2 = boxes[pattern[2]].innerText;
    if (pos0 != "" && pos1 != "" && pos2 != "") {
      if (pos0 == pos1 && pos1 == pos2) {
        console.log("Winner");
        gameover();
      }
    }
  }
}

function gameover() {
  result.innerText = "Winner";
  reset.style.visibility = "visible";
}

reset.addEventListener("click", () => {
  turnO = true;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  result.innerText = "";
  reset.style.visibility = "hidden";
});
