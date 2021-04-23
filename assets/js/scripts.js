// define variables /////////////////////////////////////////////////////////////////

let startBtn = document.getElementById("start");
let saveScore = document.getElementById("save-score");
let questionTitle = document.getElementById("question-title");
let choicesDiv = document.getElementById("choices");
let questionIndex = 0;
let score = 0;
let countdown = 125;

// functions ////////////////////////////////////////////////////////////////
// start quiz init
function startQuiz() {
  // start timer
  // find DOM element to show the question
    getQuestion();
    startTimer();
}

// get the next question
function getQuestion() {
  // get the current question
  let currentQuestion = questions[questionIndex];
  // show the question
  questionTitle.textContent = currentQuestion.question;
  // loop show the buttons (choices)
  currentQuestion.choices.forEach((choice) => {
    let choiceBtn = document.createElement("button");
    choiceBtn.textContent = choice;
      choiceBtn.setAttribute("value", choice);
      choiceBtn.setAttribute("class", "option")
    // add event listener for each button created
    // choiceBtn.onclick = verifyAnswer;
    choiceBtn.addEventListener("click", verifyAnswer);
    choicesDiv.appendChild(choiceBtn);
  });

  // verifyAnswer();
}

// check answer selection
function verifyAnswer() {
  if (this.value === questions[questionIndex].correctAnswer) {

      score += 5;
  } else {
      countdown -= 10;
  }
    
  questionIndex++;
  if (questionIndex < questions.length) {
    showQuestion();
  }
  // check the user selection against correct answer
  // incorrect remove seconds
  // set score
  // get next question
  // showQuestion();
  // if questions.length
}

//different fn to change the text of the appended buttons so as to not have more buttons appearing out of nowhere
function showQuestion() {
    questionTitle.textContent = questions[questionIndex].question
    //query selector all is getting an array of all elements with the class option
    var buttonMatrix = document.querySelectorAll(".option")
    //forEach loop has an optional set of parameters the i in this case indicates index
    //element is just the elemnt in the array
    buttonMatrix.forEach((element, i) => {
        element.textContent = questions[questionIndex].choices[i]
    })
    console.log(buttonMatrix)
}

//Starts the Timer!!!!
function startTimer() {
    var interval = setInterval(function () {
        countdown--;
        document.getElementById("timer").textContent = countdown;

        if (countdown <= 0 || questionIndex >= questions.length) {
            clearInterval(interval);
            endGame();
        }
    }, 1000)
}

// end game
function endGame() {
  alert;
  // set their score
  // show end screen
  // clear out timer
}

// save high score
function saveHighScore() {
  // prompt for initials
  // save score to localstorage
}

// event listeners //////////////////////////////////////////
// start button click
startBtn.addEventListener("click", startQuiz);

// save high score
// saveScore.addEventListener('click', saveHighScore);
