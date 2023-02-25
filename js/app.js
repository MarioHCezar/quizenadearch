let quiz = [];
const url = "./js/questions.json";
const questions = [];

async function quizMount() {
  const quizQuestion = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      quiz = data.slice();
    });
}

quizMount();

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const totalQuestion = document.querySelector(".total-question");
const attemptNumber = document.querySelector(".total-attempt");
let filteredQuestions = "";
let numberOfQuestions = "";
let themeValue = "";

const setTheme = () => {
  themeValue = document.querySelector("#select").value;
  document.write.i;
  console.log(themeValue);
  filteredQuestions = quiz.filter((item) => item.theme === themeValue);
  numberOfQuestions = filteredQuestions.length;
  homeBox.querySelector(".total-questions").textContent =
    filteredQuestions.length;
};

setTheme();

console.log(numberOfQuestions);

let questionCounter = 0;
let currentQuestion = 0;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;
let totalAttempt = 0;

const quizOver = () => {
  // hide quiz box
  quizBox.classList.add("hide");
  //show result box
  resultBox.classList.remove("hide");
  quizResult();
};

const quizResult = () => {
  resultBox.querySelector(".total-question").textContent =
    filteredQuestions.length;
  resultBox.querySelector(".total-attempt").textContent = attempt;
  resultBox.querySelector(".total-correct").textContent = correctAnswers;
  resultBox.querySelector(".total-wrong").textContent =
    attempt - correctAnswers;
  let percentage = (correctAnswers / filteredQuestions.length) * 100;
  resultBox.querySelector(".percentage").textContent =
    percentage.toFixed() + "%";
  resultBox.querySelector(".total-score").textContent =
    correctAnswers + "/" + filteredQuestions.length;

  if (percentage >= 70) {
    resultBox.querySelector(".percentage").classList.add("correct-percentage");
  } else {
    resultBox.querySelector(".percentage").classList.add("wrong-percentage");
  }
};

const topFunction = () => {
  document.documentElement.scrollTop = 0;
};



const resetQuiz = () => {
  questionCounter = 0;
  correctAnswers = 0;
  attempt = 0;
  totalAttempt = 0;
  resultBox.querySelector(".percentage").classList.remove("correct-percentage");
  resultBox.querySelector(".percentage").classList.remove("wrong-percentage");
};

const tryAgain = () => {
  resultBox.classList.add("hide");
  quizBox.classList.remove("hide");
  resetQuiz();
  startQuiz();
};

const homePage = () => {
  homeBox.classList.remove("hide");
  quizBox.classList.add("hide");
  resultBox.classList.add("hide");
  resetQuiz();
};

const startQuiz = () => {
  homeBox.classList.add("hide");
  quizBox.classList.remove("hide");
  setTheme();
  setQuestion();
  getNewQuestion();
  answersIndicator();
};

window.addEventListener("beforeunload", () => {
  window.screenTop(0, 0);
});

window.addEventListener("load", () => {
  setTheme();
});
