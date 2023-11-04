let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("tree");
let four = document.getElementById("four");
let result = document.getElementById("result");
let next = document.getElementById("next");
let title = document.getElementById("title");
let reset = document.getElementById("reset");
let buttonblock = document.getElementById("buttonblock");
let counter = 0;

let data = [
  {
    question: "Какая сталица у Бельгии?",
    answers: ["Брюссель", "Вена", "Стокгольм", "Женева"],
  },
  {
    question: "Какая сталица у России?",
    answers: ["Москва", "Вена", "Стокгольм", "Женева"],
  },
  {
    question: "Какая сталица у Швеция?",
    answers: ["Стокгольм", "Брюссель", "Рим", "Женева"],
  },
];

function checkAnswer(event) {
  if (event.target.innerHTML === data[counter].answers[0]) {
    console.log("YES!!!!!!!!!!");
    event.target.style.border = "3px solid green";
    event.target.style.pointerEvents = "none";
  } else {
    event.target.style.border = "3px solid red";
    buttonblock.style.pointerEvents = "none";
  }
}

function getQuestion() {
  title.innerHTML = data[counter].question;
  let answers = [...data[counter].answers];
  for (let i = 3; i > 0; i--) {
    let randomNumber = Math.floor(Math.random() * (i + 1));
    let answer = answers[randomNumber];
    answers[randomNumber] = answers[i];
    answers[i] = answer;
  }
  one.innerHTML = answers[0];
  two.innerHTML = answers[1];
  three.innerHTML = answers[2];
  four.innerHTML = answers[3];
}
getQuestion();

next;
