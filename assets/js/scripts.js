let startBtn = document.getElementById('start');
let questionTitle = document.getElementById('question-title');
let choicesDiv = document.getElementById('choices');
let initialInput = document.getElementById('initials');
let saveScore = document.getElementById('save-score');
let instructions = document.getElementById('instructions');
let questionContainer = document.getElementById('question-container');
let form = document.getElementById('form');
let questionIndex = 0;
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
  let currentQuestion = questions[questionIndex];
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
  if (this.value === questions[questionIndex].correctAnswer) {
  } else {
    countdown -= 10;
  }

  questionIndex++;
  if (questionIndex < questions.length) {
    showQuestion();
  }
}

function showQuestion() {
  questionTitle.textContent = questions[questionIndex].question;
  var buttonMatrix = document.querySelectorAll('.option');
  buttonMatrix.forEach((element, i) => {
    element.textContent = questions[questionIndex].choices[i];
  });
}

function startTimer() {
  var interval = setInterval(function () {
    countdown--;
    document.getElementById('timer').textContent = countdown;

    if (countdown <= 0 || questionIndex >= questions.length) {
      clearInterval(interval);
      endGame();
    }
  }, 1000);
}

// end game
function endGame() {
  alert("GAME OVER MAN! GAME OVER!!!");
  questionContainer.style.display = 'none';
  form.style.display = 'block';
  // set their score
  // show end screen
  // clear out timer
}

function saveHighScore(event) {
  event.preventDefault();
  let initialInput = document.getElementById('initials').value;
   let highScoreObj = {
     name: initialInput,
     score: countdown,
   };
   
  if (localStorage.getItem('highScore') === null) {
     localStorage.setItem('highScore', '[]');
   }

   let oldHighScores = JSON.parse(localStorage.getItem('highScore'));
   oldHighScores.push(highScoreObj);

  localStorage.setItem('highScore', JSON.stringify(oldHighScores));
  linkHighScores();
}

function linkHighScores() {
  location.replace("./highscores.html");
}











startBtn.addEventListener('click', startQuiz);
saveScore.addEventListener('click', saveHighScore);

  init();
