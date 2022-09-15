let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let score = 10;
let topScore = 0;
const msg = document.querySelector(".msg");
const body = document.querySelector("body");

document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  console.log(guessInput);
  if (!guessInput) {
    msg.innerText = "please enter a number";
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congrats , You Won <i class="fa-sharp fa-solid fa-face-smile fa-2x"></i> `;
    body.className = "bg-success";
    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }
    document.querySelector(".secret-number").textContent = randomNumber;
  } else {
    score--;
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `DECREASE <i class="fa-solid fa-arrow-trend-down fa-2x"></i>`)
        : (msg.innerHTML = `INCREASE <i class="fa-solid fa-arrow-trend-up fa-2x"></i>`);
    } else {
      msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
      document.querySelector(".secret-number").textContent = randomNumber;
      body.className = "bg-danger";
      document.querySelector(".check-btn").disabled = "true";
    }

    document.querySelector(".score").textContent = score;
  }
});
document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  document.querySelector(".secret-number").textContent = "?";
  console.log(randomNumber);
  document.querySelector(".score").textContent = score;
  document.querySelector(".check-btn").disabled = "false";
  document.querySelector("body").classList.remove("bg-success", "bg-danger");
  document.querySelector(".guess-input").value = "";
  msg.innerHTML = "Starting..";
});
