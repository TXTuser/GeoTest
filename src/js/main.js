let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("tree");
let four = document.getElementById("four");
let result = document.getElementById("result");
let next = document.getElementById("next");
let title = document.getElementById("title");
let reset = document.getElementById("reset");
let timetitle = document.getElementById("timetitle");
let activeButton;
let timeInterval;
let timer, time;
let buttonblock = document.getElementById("buttonblock");
let counter = 0;
let timeIntervalReset;
let timereset = 60;
let counterblock = document.getElementById("counterblock");

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
    question: "Какая сталица у Швеции?",
    answers: ["Стокгольм", "Брюссель", "Рим", "Женева"],
  },
];

function checkAnswer(event) {
  if (event.target.innerHTML === data[counter].answers[0]) {
    // console.log("YES!!!!!!!!!!");
    event.target.style.border = "3px solid green";
  } else {
    // console.log("NO!!!!!!!!!!");
    event.target.style.border = "3px solid red";
  }
  buttonblock.style.pointerEvents = "none";
  activeButton = event.target;
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

function nextQuestion() {
  counter++;
  buttonblock.style.pointerEvents = "auto";
  activeButton.style.border = "3px solid transparent";
  if (counter === data.length) {
    timetitle.innerHTML = "Молодец! Ты прошел тест!!!!!!!!!!!!!!!!";
    clearInterval(timeInterval);
  } else {
    getQuestion();
  }
  if (next.click) {
    counterblock.innerHTML =
      "Вы ответили на " + counter + " вопросов из " + data.length + " вопросов";
  }

  // for (counter = counter; counter < data.length; counter++) {
  //   counterblock.innerHTML = "Вы ответили на " + counter + " вопросов";
  // }
}

time = 60;
timeInterval = setInterval(function () {
  timetitle.innerHTML = time;
  time--;
  if ((time === 0) | reset.click()) {
    timetitle.innerHTML =
      "Ты проиграл. Нажми на кнопку reset, <br> чтобы начать сначала.";
    clearInterval(timeInterval);
  }
}, 1000);

function resetQuestion() {
  counter = 0;
  buttonblock.style.pointerEvents = "auto";
  getQuestion();
  clearInterval(timeInterval);
  time = 60;
  timetitle.innerHTML = time;
  timeInterval = setInterval(function () {
    timetitle.innerHTML = time;
    time--;
    if ((time === 0) | reset.click) {
      timetitle.innerHTML =
        "Ты проиграл. Нажми на кнопку reset, <br> чтобы начать сначала.";
      clearInterval(timeInterval);
    }
  }, 1000);

  if (reset.click) {
    counter = 0;
    counterblock.innerHTML = "Вы ответили на 0 вопросов";
  }
}

reset.addEventListener("click", resetQuestion);

// for (i = 0; i <= data.length; i++) {
//   let count = 0;
//   if (next.click) {
//     count++;
//     counterblock.innerHTML = "Вы ответили на " + count + " вопросов";
//   }
// }
