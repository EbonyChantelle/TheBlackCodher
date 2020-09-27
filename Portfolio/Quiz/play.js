const question = document.getElementById("question");
const choice = Array.from(document.getElementsByClassName("choice-text"));
const qCounterText = document.getElementById("qCounter");
const sCounterText = document.getElementById("sCounter");

let currentQuestion = {};
let acceptingAnswers = false;
let sCounter = 0;
let qCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question:
      "Which two countries in South America are the Iguazu Falls part of?",
    choice1: "Ethiopia and Kenya",
    choice2: "Switzerland and Italy",
    choice3: "Brazil and Argentina",
    choice4: "Tanzania and Zambia",
    answer: "3",
  },
  {
    question: "What is the capital of Canada?",
    choice1: "Toronto",
    choice2: "Vancouver",
    choice3: "Ottawa",
    choice4: "Halifax",
    answer: "3",
  },
  {
    question: "How many countries connect to the Austrian border?",
    choice1: "4",
    choice2: "8",
    choice3: "12",
    choice4: "15",
    answer: "2",
  },
  {
    question: "How high is Mount Everest?",
    choice1: "1,550 m",
    choice2: "2,900 m",
    choice3: "8,848 m",
    choice4: "25,600 m",
    answer: "3",
  },
];

//Constants
const Correct_Bonus = 5;
const Max_Questions = 4;

startGame = () => {
  qCounter = 0;
  sCounter = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || qCounter >= Max_Questions) {
    localStorage.setItem("scoreTotal", sCounter);
    return window.location.assign("/end.html");
  }
  qCounter++;
  qCounterText.innerText = `${qCounter}/${Max_Questions}`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  choice.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choice.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      scoreIncrement(Correct_Bonus);
    }

    selectedChoice.parentElement.classList.add(classToApply);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

scoreIncrement = (num) => {
  sCounter += num;
  sCounterText.innerText = sCounter;
};

startGame();
