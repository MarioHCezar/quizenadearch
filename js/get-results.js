function getResult(element) {
  const id = parseInt(element.id);
  if (id === currentQuestion.answer) {
    element.classList.add("correct");
    updateAnswerIndicator("correct");
    //console.log("Right!");
    correctAnswers++;
  } else {
    element.classList.add("wrong");
    //console.log("Try again!")
    updateAnswerIndicator("wrong");
    const optionLength = optionContainer.children.length;
    for (let i = 0; i < optionLength; i++) {
      if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
        optionContainer.children[i].classList.add("correct");
      }
    }
  }

  attempt++;
  totalAttempt++;
  //console.log(optionElement.textContent);
  unclickableOptions();
}
function unclickableOptions() {
  const optionLength = optionContainer.children.length;
  for (let i = 0; i < optionLength; i++) {
    optionContainer.children[i].classList.add("already-answered");
  }
}

function answersIndicator() {
  answersIndicatorContainer.textContent = "";
  const numberOfQuestions = filteredQuestions.length;
  for (let i = 0; i < numberOfQuestions; i++) {
    const indicator = document.createElement("div");
    answersIndicatorContainer.appendChild(indicator);
  }
}

function updateAnswerIndicator(markType) {
  answersIndicatorContainer.children[questionCounter - 1].classList.add(
    markType
  );
}

function next() {
  if (questionCounter === filteredQuestions.length) {
    quizOver();
  } else {
    getNewQuestion();
  }
}
