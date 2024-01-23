document.addEventListener("DOMContentLoaded", function () {
  // Display highscore

  let highscoresEl = document.querySelector("ol");

  let highscoreList = JSON.parse(localStorage.getItem("SavedHighscores"));

  if (highscoreList !== null) {
    highscoreList.sort(function (a, b) {
      return b.userScore - a.userScore;
    });

    for (let i = 0; i < highscoreList.length; i++) {
      let scoreEl = document.createElement("li");
      scoreEl.textContent = `${highscoreList[i].user}...............${highscoreList[i].userScore}`;
      highscoresEl.appendChild(scoreEl);
    }
  }

  // Clear button

  let clearBtn = document.getElementById("clear");

  console.log(highscoresEl.textContent);

  clearBtn.addEventListener("click", function () {
    if (highscoresEl.textContent) {
      highscoresEl.textContent = "";
    }

    localStorage.removeItem('SavedHighscores');
  });
});
