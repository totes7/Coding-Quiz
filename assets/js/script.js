// Questions

let questions = [
  {
    title: "What is the correct HTML tag for creating a hyperlink?",
    answers: ["<link>", "<href>", "<a>", "<url>"],
    correct: "<a>",
  },

  {
    title: 'How can you select an element with id "example" in CSS?',
    answers: ["#example", " .example", " element example", "select.example"],
    correct: "#example",
  },

  {
    title: "What keyword is used to declare a variable in JavaScript?",
    answers: ["v", "var", "variable", "const"],
    correct: "var",
  },

  {
    title: "Which HTML tag is used for creating an unordered list?",
    answers: ["<list>", "<ul>", "<ol>", "<li>"],
    correct: "<ul>",
  },

  {
    title: "How do you set the background color of an element in CSS?",
    answers: [
      "color: background;",
      "bg-color: #RRGGBB;",
      "background-color: #RRGGBB;",
      "set-background: #RRGGBB;",
    ],
    correct: "background-color: #RRGGBB;",
  },

  {
    title: 'What does the "=== " operator do in JavaScript?',
    answers: [
      "Assigns a value",
      "Compares values and types",
      "Concatenates strings",
      "Performs division",
    ],
    correct: "Compares values and types",
  },

  {
    title: "What is the correct HTML tag for inserting a line break?",
    answers: ["<br>", "<lb>", "<break>", "<newline>"],
    correct: "<br>",
  },

  {
    title: "How can you apply styles to an element when a user hovers over it?",
    answers: [":hover", ".hover", "hover:style", "onHover"],
    correct: ":hover",
  },

  {
    title:
      'What is the purpose of the "document.getElementById()" function in JavaScript?',
    answers: [
      "Gets a class element",
      "Gets an element by its tag name",
      "Gets an element by its id",
      "Gets an element by its name",
    ],
    correct: "Gets an element by its id",
  },

  {
    title: "Which tag is used to define an external JavaScript file?",
    answers: ["<js>", "<script>", "<javascript>", "<external>"],
    correct: "<script>",
  },
];

// Select elements from the DOM

let time = document.getElementById("time");
let startButton = document.getElementById("start");
let startScreen = document.getElementById("start-screen");
let questionEl = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let choicesEl = document.getElementById("choices");
let feedbackEl = document.getElementById("feedback");
let endScreen = document.getElementById("end-screen");
let finalScore = document.getElementById("final-score");
let initialsInput = document.getElementById("initials");
let submitBtn = document.getElementById("submit");
let qCount = 0;
let stop = false;
let score = 0;

// Start button
// When pressed the timer starts and the first question is displayed

let secondsLeft = 60;
time.textContent = secondsLeft;

startButton.addEventListener("click", function () {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = secondsLeft;

    if (secondsLeft === 0 || stop) {
      clearInterval(timerInterval);
    }
  }, 1000);
  startQuiz();
});

//Start quiz

function startQuiz() {
  startScreen.setAttribute("class", "hide");
  questionEl.setAttribute("class", "");

  displayQuestion();
}

// Display questions

function displayQuestion() {
  questionTitle.textContent = questions[qCount].title;

  choicesEl.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    let choice = document.createElement("button");
    choice.setAttribute("class", "button");
    choice.textContent = questions[qCount].answers[i];
    choicesEl.appendChild(choice);
  }
}

// Add event listeners

choicesEl.addEventListener("click", function (event) {
  let answer = event.target;
  if (answer.textContent == questions[qCount].correct) {
    feedbackEl.setAttribute("class", "feedback");
    feedbackEl.textContent = "Correct!";
  } else {
    if (secondsLeft > 10) {
      feedbackEl.setAttribute("class", "feedback");
      feedbackEl.textContent = "Wrong!";
      secondsLeft -= 10;
    } else {
      feedbackEl.setAttribute("class", "feedback");
      feedbackEl.textContent = "Wrong!";
      secondsLeft = 0;
    }
  }

  qCount++;

  if (qCount < questions.length && secondsLeft > 0) {
    displayQuestion();
  } else {
    endQuiz();
  }
});

// End quiz

function endQuiz() {
  stop = true;
  questionEl.setAttribute("class", "hide");
  endScreen.setAttribute("class", "");
  score = secondsLeft;
  finalScore.textContent = score;
  feedbackEl.textContent = "Input max 3 characters!";
}

// Save/Load highscores

function saveScore() {
  let initialsValue = initialsInput.value;
  console.log(initialsInput.value);
  if (initialsValue.trim()) {
    let scoreObject = {
      user: initialsValue.trim(),
      userScore: score,
    };
    let storageKey = "SavedHighscores";
    let storageValue = localStorage.getItem(storageKey);
    let savedHighscores;

    if (storageValue) {
      savedHighscores = JSON.parse(storageValue);
    } else {
      savedHighscores = [];
    }

    savedHighscores.push(scoreObject);
    localStorage.setItem("SavedHighscores", JSON.stringify(savedHighscores));
    window.location.href = "highscores.html";
  } else {
    alert("Please enter initials.");
    return;
  }
}

submitBtn.addEventListener("click", saveScore);
