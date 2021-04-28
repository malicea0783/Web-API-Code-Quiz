let startBtn = document.getElementById('start');
let questionTitle = document.getElementById('question-title');
let choicesDiv = document.getElementById('choices');
let initialInput = document.getElementById('initials');
let saveScore = document.getElementById('save-score');
let instructions = document.getElementById('instructions');
let questionContainer = document.getElementById('question-container');
let form = document.getElementById('form');
let highScoreDisplay = document.getElementById('highscore-display');
let highScoresArr = JSON.parse(localStorage.getItem('highScoresArr')) || [];
let alertWrong = document.getElementById('alert-wrong');
let alertRight = document.getElementById('alert-right');
let questionsIndex = 0;
let countdown = 125;

function init() {
  instructions.style.display = 'block';
  questionContainer.style.display = 'none';
  form.style.display = 'none';
}

function startQuiz() {
  instructions.style.display = 'none';
  questionContainer.style.display = 'block';
  getQuestion();
  startTimer();
  if (startBtn.style.display === 'none') {
    startBtn.style.display = 'block';
  } else {
    startBtn.style.display = 'none';
  }
}

function getQuestion() {
  let currentQuestion = questions[questionsIndex];
  questionTitle.textContent = currentQuestion.question;
  currentQuestion.choices.forEach((choice) => {
    let choiceBtn = document.createElement('button');
    choiceBtn.textContent = choice;
    choiceBtn.setAttribute('value', choice);
    choiceBtn.setAttribute('class', 'option');
    choiceBtn.addEventListener('click', verifyAnswer);
    choicesDiv.appendChild(choiceBtn);
  });
}

function verifyAnswer() {
  if (this.value === questions[questionsIndex].correctAnswer) {
    showRight();
    alertWrong.classList.add('alert-hide'); 
  } else {
    countdown -= 10;
    showWrong();
    alertRight.classList.add('alert-hide');
  }

  questionsIndex++;
  if (questionsIndex < questions.length) {
    
    showQuestion();
  }
}

function showRight() {
  alertRight.classList.remove('alert-hide');
}

function showWrong() {
  alertWrong.classList.remove('alert-hide');
}

function showQuestion() {
  questionTitle.textContent = questions[questionsIndex].question;
  var buttonMatrix = document.querySelectorAll('.option');
  buttonMatrix.forEach((element, i) => {
    element.textContent = questions[questionsIndex].choices[i];
  });
}

function startTimer() {
  var interval = setInterval(function () {
    countdown--;
    document.getElementById('timer').textContent = countdown;

    if (countdown <= 0 || questionsIndex >= questions.length) {
      clearInterval(interval);
      endGame();
    }
  }, 1000);
}

// end game
function endGame() {
  document.getElementById('finalScore').innerHTML = countdown;
  alert('GAME OVER MAN! GAME OVER!!!');
  questionContainer.style.display = 'none';
  form.style.display = 'block';
}

function saveHighScore(event) {
  event.preventDefault();

  let initialInput = document.getElementById('initials').value;
  let highScoreObj = {
    name: initialInput,
    score: countdown,
  };
  highScoresArr.push(highScoreObj);
  highScoresArr.sort((a, b) => b.highScoreObj - a.highScoreObj);
  localStorage.setItem('highScoresArr', JSON.stringify(highScoresArr));
  linkHighScores();

}

function linkHighScores() {
  location.replace('./highscores.html');
  
}

startBtn.addEventListener('click', startQuiz);
saveScore.addEventListener('click', saveHighScore);

init();
