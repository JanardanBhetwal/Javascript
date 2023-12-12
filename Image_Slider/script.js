const buttons = document.querySelectorAll("button");
const left = document.getElementById("left");
const right = document.getElementById("right");
const img = document.querySelector("img");

const images = [
  "m1.webp",
  "m2.webp",
  "m3.webp",
  "m4.webp",
  "m5.webp",
  "m6.webp",
  "m7.webp",
  "m8.webp",
  "m9.webp",
  "m10.webp",
];

let imageNum = 0;
displayUpdate();
checkEnd();
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log("Button Clicked");
    if (button.id == "left") {
      imageNum--;
    } else if (button.id == "right") {
      imageNum++;
    }
    displayUpdate();
    checkEnd();
  });
});

function displayUpdate() {
  img.src = images[imageNum];
}

function checkEnd() {
  if (imageNum <= 0) {
    left.style.visibility = "hidden";
  } else if (imageNum >= 9) {
    right.style.visibility = "hidden";
  } else {
    left.style.visibility = "visible";
    right.style.visibility = "visible";
  }
}
