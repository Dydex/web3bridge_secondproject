"Use Strict";

// Start Of Selectors
const startButton = document.querySelector(".start-page");
const instruct = document.querySelector(".instruction");
const exitButton = document.querySelector(".twinone");
const continueButton = document.querySelector(".twintwo");
const replayBtn = document.querySelector(".replay");
const quitQuizBtn = document.querySelector(".end");

const firstQuestion = document.querySelector(".first-question");
const secondQuestion = document.querySelector(".second-question");
const thirdQuestion = document.querySelector(".third-question");
const fourthQuestion = document.querySelector(".fourth-question");
const fifthQuestion = document.querySelector(".fifth-question");
const resultPage = document.querySelector(".last-result");

const nextButton = document.querySelector(".next");
const nextButtonTwo = document.querySelector(".secondNext");
const nextButtonThree = document.querySelector(".thirdNext");
const nextButtonFour = document.querySelector(".fourthNext");
const nextButtonFifth = document.querySelector(".fifthNext");
// End Of Selectors

// Start Of Countdown function
let countDown;

function startTimer() {
  let timeLeft = 15;
  let timerDisplay = document.querySelector(".timer");
  clearInterval(countDown);
  countDown = setInterval(function () {
    timerDisplay.textContent = String(timeLeft).padStart(2, "0");
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countDown);
      revealAnswer();
    }
  }, 1000);
}

function startTimer2() {
  let timeLeft = 15;
  let timerDisplay = document.querySelector(".timer2");
  clearInterval(countDown);
  countDown = setInterval(function () {
    timerDisplay.textContent = String(timeLeft).padStart(2, "0");
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countDown);
      revealAnswer2();
    }
  }, 1000);
}

function startTimer3() {
  let timeLeft = 15;
  let timerDisplay = document.querySelector(".timer3");
  clearInterval(countDown);
  countDown = setInterval(function () {
    timerDisplay.textContent = String(timeLeft).padStart(2, "0");
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countDown);
      revealAnswer3();
    }
  }, 1000);
}

function startTimer4() {
  let timeLeft = 15;
  let timerDisplay = document.querySelector(".timer4");
  clearInterval(countDown);
  countDown = setInterval(function () {
    timerDisplay.textContent = String(timeLeft).padStart(2, "0");
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countDown);
      revealAnswer4();
    }
  }, 1000);
}

function startTimer5() {
  let timeLeft = 15;
  let timerDisplay = document.querySelector(".timer5");
  clearInterval(countDown);
  countDown = setInterval(function () {
    timerDisplay.textContent = String(timeLeft).padStart(2, "0");
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countDown);
      revealAnswer5();
    }
  }, 1000);
}
// End of Countdown Function

// To Start the quiz and hid other Divs
startButton.addEventListener("click", function () {
  instruct.classList.remove("hidden");
  startButton.classList.add("hidden");
});

// To end quiz and return to start pae
exitButton.addEventListener("click", function () {
  instruct.classList.add("hidden");
  startButton.classList.remove("hidden");
});

continueButton.addEventListener("click", function () {
  instruct.classList.add("hidden");
  firstQuestion.classList.remove("hidden");

  startTimer();
});

nextButton.addEventListener("click", function () {
  firstQuestion.classList.add("hidden");
  secondQuestion.classList.remove("hidden");

  startTimer2();
});

nextButtonTwo.addEventListener("click", function () {
  secondQuestion.classList.add("hidden");
  thirdQuestion.classList.remove("hidden");

  startTimer3();
});

nextButtonThree.addEventListener("click", function () {
  thirdQuestion.classList.add("hidden");
  fourthQuestion.classList.remove("hidden");
  startTimer4();
});

nextButtonFour.addEventListener("click", function () {
  fourthQuestion.classList.add("hidden");
  fifthQuestion.classList.remove("hidden");
  startTimer5();
});

nextButtonFifth.addEventListener("click", function () {
  fifthQuestion.classList.add("hidden");
  resultPage.classList.remove("hidden");

  const resultText = document.querySelector(".score");
  resultText.textContent = `${score}`;
});

replayBtn.addEventListener("click", function () {
  resultPage.classList.add("hidden");
  startButton.classList.remove("hidden");
  reloadPage();
});

quitQuizBtn.addEventListener("click", function () {
  resultPage.classList.add("hidden");
  startButton.classList.remove("hidden");
  reloadPage();
});

// Show Quiz Score
let score = 0;

// Restart The Quiz
function reloadPage() {
  location.reload();
}

// Show Answers Function Onclick
const showAnswer1 = function () {
  const options = document.querySelectorAll(".options-paragraph");
  const correctAnswer = "Hyper Text Markup Language";

  options.forEach(function (text) {
    text.addEventListener("click", function () {
      options.forEach((opt) => (opt.style.pointerEvents = "none"));
      const content = text.textContent.trim();
      nextButton.classList.remove("hidden");

      if (content === correctAnswer) {
        text.style.backgroundColor = "lightgreen";
        score++;
      } else {
        text.style.backgroundColor = "lightcoral";

        options.forEach((opt) => {
          if (opt.textContent.trim() === correctAnswer) {
            opt.style.backgroundColor = "lightgreen";
          }
        });
      }
    });
  });
};
showAnswer1();

const showAnswer2 = function () {
  const optionsTwo = document.querySelectorAll(".options-paragraphTwo");
  const correctAnswerTwo = "Cascading Style Sheet";

  optionsTwo.forEach(function (text) {
    text.addEventListener("click", function () {
      optionsTwo.forEach((opt) => (opt.style.pointerEvents = "none"));
      const content = text.textContent.trim();
      nextButtonTwo.classList.remove("hidden");

      if (content === correctAnswerTwo) {
        text.style.backgroundColor = "lightgreen";
        score++;
      } else {
        text.style.backgroundColor = "lightcoral";

        optionsTwo.forEach((opt) => {
          if (opt.textContent.trim() === correctAnswerTwo) {
            opt.style.backgroundColor = "lightgreen";
          }
        });
      }
    });
  });
};
showAnswer2();

const showAnswer3 = function () {
  const optionsThree = document.querySelectorAll(".options-paragraphThree");

  const correctAnswerThree = "Hypertext Preprocessor";

  optionsThree.forEach(function (text) {
    text.addEventListener("click", function () {
      optionsThree.forEach((opt) => (opt.style.pointerEvents = "none"));
      const content = text.textContent.trim();
      nextButtonThree.classList.remove("hidden");

      if (content === correctAnswerThree) {
        text.style.backgroundColor = "lightgreen";
        score++;
      } else {
        text.style.backgroundColor = "lightcoral";

        optionsThree.forEach((opt) => {
          if (opt.textContent.trim() === correctAnswerThree) {
            opt.style.backgroundColor = "lightgreen";
          }
        });
      }
    });
  });
};
showAnswer3();

const showAnswer4 = function () {
  const optionsFour = document.querySelectorAll(".options-paragraphFour");

  const correctAnswerFour = "Structured Query Language";

  optionsFour.forEach(function (text) {
    text.addEventListener("click", function () {
      optionsFour.forEach((opt) => (opt.style.pointerEvents = "none"));
      const content = text.textContent.trim();
      nextButtonFour.classList.remove("hidden");

      if (content === correctAnswerFour) {
        text.style.backgroundColor = "lightgreen";
        score++;
      } else {
        text.style.backgroundColor = "lightcoral";

        optionsFour.forEach((opt) => {
          if (opt.textContent.trim() === correctAnswerFour) {
            opt.style.backgroundColor = "lightgreen";
          }
        });
      }
    });
  });
};
showAnswer4();

const showAnswer5 = function () {
  const optionsFive = document.querySelectorAll(".options-paragraphFive");

  const correctAnswerFive = "eXtensible Markup Language";

  optionsFive.forEach(function (text) {
    text.addEventListener("click", function () {
      optionsFive.forEach((opt) => (opt.style.pointerEvents = "none"));
      const content = text.textContent.trim();
      nextButtonFifth.classList.remove("hidden");

      if (content === correctAnswerFive) {
        text.style.backgroundColor = "lightgreen";
        score++;
        console.log(score);
      } else {
        text.style.backgroundColor = "lightcoral";

        optionsFive.forEach((opt) => {
          if (opt.textContent.trim() === correctAnswerFive) {
            opt.style.backgroundColor = "lightgreen";
          }
        });
      }
    });
  });
};
showAnswer5();

//

// Show Answer After Timer Ends
function revealAnswer() {
  const options = document.querySelectorAll(".options-paragraph");
  const correctAnswer = "Hyper Text Preprocessor";

  options.forEach(function (el) {
    const content = el.textContent.trim();

    if (content === correctAnswer) {
      el.style.backgroundColor = "lightgreen";
    } else {
      el.style.backgroundColor = "lightcoral";
    }
  });

  nextButton.classList.remove("hidden");
}

function revealAnswer2() {
  const options = document.querySelectorAll(".options-paragraphTwo");
  const correctAnswer = "Cascading Style Sheet";

  options.forEach(function (el) {
    const content = el.textContent.trim();

    if (content === correctAnswer) {
      el.style.backgroundColor = "lightgreen";
    } else {
      el.style.backgroundColor = "lightcoral";
    }
  });

  nextButtonTwo.classList.remove("hidden");
}

function revealAnswer3() {
  const options = document.querySelectorAll(".options-paragraphThree");
  const correctAnswer = "Hypertext Preprocessor";

  options.forEach(function (el) {
    const content = el.textContent.trim();

    if (content === correctAnswer) {
      el.style.backgroundColor = "lightgreen";
    } else {
      el.style.backgroundColor = "lightcoral";
    }
  });

  nextButtonThree.classList.remove("hidden");
}

function revealAnswer4() {
  const options = document.querySelectorAll(".options-paragraphFour");
  const correctAnswer = "Structured Query Language";

  options.forEach(function (el) {
    const content = el.textContent.trim();

    if (content === correctAnswer) {
      el.style.backgroundColor = "lightgreen";
    } else {
      el.style.backgroundColor = "lightcoral";
    }
  });

  nextButtonFour.classList.remove("hidden");
}

function revealAnswer5() {
  const options = document.querySelectorAll(".options-paragraphFive");
  const correctAnswer = "eXtensible Markup Language";

  options.forEach(function (el) {
    const content = el.textContent.trim();

    if (content === correctAnswer) {
      el.style.backgroundColor = "lightgreen";
    } else {
      el.style.backgroundColor = "lightcoral";
    }
  });

  nextButtonFifth.classList.remove("hidden");
}
