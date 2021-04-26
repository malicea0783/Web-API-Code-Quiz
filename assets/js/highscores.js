let highScores = document.getElementById("highscore-display");
let highScoresArr = JSON.parse(localStorage.getItem("highScoresArr")) || [];

function displayScores() {
  highScoresArr.sort((a, b) => b.score - a.score);
  highScoresArr.splice(20);
  highScores.innerHTML = highScoresArr
    .map((score) => {
      return `<li><p>${score.name}<span></span></p><p>${score.score}<span></span></p></li>`;
    })
    .join("");
}
displayScores();
