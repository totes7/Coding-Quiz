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
let choices = document.getElementById("choices");

// Start button
// When pressed the timer starts and the first question is displayed

let secondsLeft = 60;
time.textContent = secondsLeft;

startButton.addEventListener("click", function () {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
  startQuiz();
});

//Start quiz

function startQuiz() {
  startScreen.setAttribute("class", "hide");
  questionEl.setAttribute("class", "");
  questionTitle.textContent = questions[0].title;

  let choice1 = document.createElement("button");
  let choice2 = document.createElement("button");
  let choice3 = document.createElement("button");
  let choice4 = document.createElement("button");
  choice1.textContent = questions[0].answers[0];
  choice2.textContent = questions[0].answers[1];
  choice3.textContent = questions[0].answers[2];
  choice4.textContent = questions[0].answers[3];
  choices.append(choice1, choice2, choice3, choice4);
}

// End quiz

function endQuiz() {}
