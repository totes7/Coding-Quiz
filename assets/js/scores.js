document.addEventListener("DOMContentLoaded", function () {
  // Display highscore

  let highscoresEl = document.querySelector("ol");
  console.log(highscoresEl);

  let highscoreList = JSON.parse(localStorage.getItem("SavedHighscores"));
  console.log(highscoreList);

  if (highscoreList !== null) {
    highscoreList.sort(function (a, b) {
      return b.userScore - a.userScore;
    });

    for (let i = 0; i < highscoreList.length; i++) {
      let scoreEl = document.createElement("li");
      scoreEl.textContent = `${highscoreList[i].user}...............${highscoreList[i].userScore}`;
      console.log(scoreEl);
      highscoresEl.appendChild(scoreEl);
    }
  }
});
