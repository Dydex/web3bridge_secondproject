// "Use Strict";

// const startButton = document.querySelector(".startbutton");
// const instruct = document.querySelector(".instruction");
// const exitButton = document.querySelector(".twinone");
// const continueButton = document.querySelector(".twintwo");

// const firstQuestion = document.querySelector(".first-question");
// const secondQuestion = document.querySelector(".second-question");
// const thirdQuestion = document.querySelector(".third-question");
// const fourthQuestion = document.querySelector(".fourth-question");
// const fifthQuestion = document.querySelector(".fifth-question");
// const resultPage = document.querySelector(".result");

// const nextButton = document.querySelector(".next");
// const nextButtonTwo = document.querySelector(".secondNext");
// const nextButtonThree = document.querySelector(".thirdNext");
// const nextButtonFour = document.querySelector(".fourthNext");
// const nextButtonFifth = document.querySelector(".fifthNext");

// // To Start the quiz and hid other Divs
// startButton.addEventListener("click", function () {
//   instruct.classList.remove("hidden");
//   startButton.classList.add("hidden");
// });

// // To end quiz and return to start pae
// exitButton.addEventListener("click", function () {
//   instruct.classList.add("hidden");
//   startButton.classList.remove("hidden");
// });

// continueButton.addEventListener("click", function () {
//   firstQuestion.classList.remove("hidden");
//   instruct.classList.add("hidden");
// });

// nextButton.addEventListener("click", function () {
//   firstQuestion.classList.add("hidden");
//   secondQuestion.classList.remove("hidden");
// });

// nextButtonTwo.addEventListener("click", function () {
//   secondQuestion.classList.add("hidden");
//   thirdQuestion.classList.remove("hidden");
// });

// nextButtonThree.addEventListener("click", function () {
//   thirdQuestion.classList.add("hidden");
//   fourthQuestion.classList.remove("hidden");
// });

// nextButtonFour.addEventListener("click", function () {
//   fourthQuestion.classList.add("hidden");
//   fifthQuestion.classList.remove("hidden");
// });

// nextButtonFifth.addEventListener("click", function () {
//   fifthQuestion.classList.add("hidden");
//   resultPage.classList.remove("hidden");
// });

// ;

// const options = document.querySelectorAll(".options-paragraph");
// const optionClass = document.querySelector(".options-paragraph");

// const correctAnswer = "Hyper Text Preprocessor";

// options.forEach(function (text) {
//   text.addEventListener("click", function () {
//     options.forEach(function (el) {
//       const content = el.textContent.trim();
//       nextButton.classList.remove("hidden");

//       console.log("scott");
//       if (content === correctAnswer) {
//         el.style.backgroundColor = "lightgreen";
//       } else {
//         el.style.backgroundColor = "lightcoral";
//       }
//     });
//   });
// });

// const optionsTwo = document.querySelectorAll(".options-paragraphTwo");

// const correctAnswerTwo = "Cascading Style Sheet";

// optionsTwo.forEach(function (text) {
//   text.addEventListener("click", function () {
//     optionsTwo.forEach(function (el) {
//       const content = el.textContent.trim();
//       nextButtonTwo.classList.remove("hidden");

//       if (content === correctAnswerTwo) {
//         el.style.backgroundColor = "lightgreen";
//       } else {
//         el.style.backgroundColor = "lightcoral";
//       }
//     });
//   });
// });

// const optionsThree = document.querySelectorAll(".options-paragraphThree");

// const correctAnswerThree = "Hypertext Preprocessor";

// optionsThree.forEach(function (text) {
//   text.addEventListener("click", function () {
//     optionsThree.forEach(function (el) {
//       const content = el.textContent.trim();
//       nextButtonThree.classList.remove("hidden");

//       if (content === correctAnswerThree) {
//         el.style.backgroundColor = "lightgreen";
//       } else {
//         el.style.backgroundColor = "lightcoral";
//       }
//     });
//   });
// });

// const optionsFour = document.querySelectorAll(".options-paragraphFour");

// const correctAnswerFour = "Structured Query Language";

// optionsFour.forEach(function (text) {
//   text.addEventListener("click", function () {
//     optionsFour.forEach(function (el) {
//       const content = el.textContent.trim();
//       nextButtonFour.classList.remove("hidden");

//       if (content === correctAnswerFour) {
//         el.style.backgroundColor = "lightgreen";
//       } else {
//         el.style.backgroundColor = "lightcoral";
//       }
//     });
//   });
// });

// const optionsFive = document.querySelectorAll(".options-paragraphFive");

// const correctAnswerFive = "eXtensible Markup Language";

// optionsFive.forEach(function (text) {
//   text.addEventListener("click", function () {
//     optionsFive.forEach(function (el) {
//       const content = el.textContent.trim();
//       nextButtonFifth.classList.remove("hidden");

//       if (content === correctAnswerFive) {
//         el.style.backgroundColor = "lightgreen";
//       } else {
//         el.style.backgroundColor = "lightcoral";
//       }
//     });
//   });
// });
