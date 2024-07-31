const score = document.querySelector(".score");
const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const message = document.querySelector(".message");
const result = document.querySelector(".result");

let totalScore = 0;

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let inputValue = +input.value;

  let randomNumber = Math.trunc(Math.random() * 10 + 1);
  console.log(randomNumber);

  if (inputValue === randomNumber) {
    result.textContent = "Match Draw! Your Scoore is " + totalScore;
    input.classList.add("hide");
    submit.classList.add("hide");
  }

  if (inputValue > 10) {
    message.textContent = "please enter valid number 1-10";
    message.style.color = "red";
  } else {
    totalScore += inputValue;
    score.textContent = totalScore;
    message.textContent = "";
  }
});
