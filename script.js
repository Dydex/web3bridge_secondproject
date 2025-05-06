"Use Strict";

const startButton = document.querySelector(".startbutton");
const instruct = document.querySelector(".instruction");
const exitButton = document.querySelector(".twinone");
const continueButton = document.querySelector(".twintwo");
const firstQuestion = document.querySelector(".first-question");
const secondQuestion = document.querySelector(".second-question");
const nextButton = document.querySelector(".next");

// const paragraphOne = document.querySelector(".paragraph-one").textContent;
// const paragraphTwo = document.querySelector(".paragraph-two").textContent;

startButton.addEventListener("click", function () {
  instruct.classList.remove("hidden");
  startButton.classList.add("hidden");
});

exitButton.addEventListener("click", function () {
  instruct.classList.add("hidden");
  startButton.classList.remove("hidden");
});

continueButton.addEventListener("click", function () {
  firstQuestion.classList.remove("hidden");
  instruct.classList.add("hidden");
});

nextButton.addEventListener("click", function () {
  firstQuestion.classList.add("hidden");
  secondQuestion.classList.remove("hidden");
});

// options.addEventListener("click", function () {
//   if (paragraphOne === paragraphOne) {
//     console.log("love");
//   } else if (paragraphTwo === paragraphTwo);
//   console.log("hate");
// });

// const checkAnswer = function () {
//   console.log(correctAnswer, options, typeof options);
// };

// const paragraphContent = text.textContent;

const options = document.querySelectorAll(".options-paragraph");
const optionClass = document.querySelector(".options-paragraph");
const woo = document.querySelector(".para");
const correctAnswer = "Hyper Text Preprocessor";

options.forEach(function (text) {
  text.addEventListener("click", function () {
    options.forEach(function (el) {
      const content = el.textContent.trim();
      nextButton.classList.remove("hidden");

      if (content === correctAnswer) {
        el.style.backgroundColor = "lightgreen";
      } else {
        el.style.backgroundColor = "lightcoral";
      }
    });
  });
});
