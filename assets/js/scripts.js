// define variables /////////////////////////////////////////////////////////////////

let startBtn = document.getElementById('start');
let saveScore = document.getElementById("save-score");

let questions = [
    {
        question: 'what is scotss favorite color?',
        answers: ['blue', 'hotpink', 'red', 'green'],
        correctAnswer: 'hotpink',
    },
    {
        question: 'how much is too much?',
        answers: ['never too much', 'much too much', 'what?', 'two'],
        correctAnswer: 'never too much',
    },
    {
        question: 'why?',
        answers: ['cuz', 'because', 'why not?', 'ok'],
        correctAnswer: 'ok',
    },
];

let choice1 = document.createElement("button");
let choice2 = document.createElement("button");
let choice3 = document.createElement("button");
let choice4 = document.createElement("button");

document.getElementById("choices").appendChild(choice1);
document.getElementById("choices").appendChild(choice2);
document.getElementById("choices").appendChild(choice3);
document.getElementById("choices").appendChild(choice4);




// functions ////////////////////////////////////////////////////////////////
// start quiz init
function startQuiz() {
    // start timer
    // find DOM element to show the question
    getQuestion();

}

// get the next question
function getQuestion() {
    // get the current question
    // show the question
    // loop show the buttons (choices)
        // add event listener for each button created
    answerCheck();
}

// check answer selection
function answerCheck() {
    // check the user selection against correct answer
    // incorrect remove seconds
    // set score
    // get the next question
    getQuestion();
    // if questions.length
    endGame();

}

// end game
function endGame() {
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
startBtn.addEventListener('click', startQuiz);

// save high score
saveScore.addEventListener('click', saveHighScore);

















