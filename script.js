const quizData = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Lisbon",
    correct: "c",
  },
  {
    question: "Who is the current President of the United States?",
    a: "Joe Biden",
    b: "Barack Obama",
    c: "Donald Trump",
    d: "George Bush",
    correct: "a",
  },
  {
    question: "What is the largest planet in our solar system?",
    a: "Earth",
    b: "Mars",
    c: "Jupiter",
    d: "Saturn",
    correct: "c",
  },
  {
    question: "What is 2 + 2?",
    a: "3",
    b: "4",
    c: "5",
    d: "6",
    correct: "b",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1992",
    b: "1995",
    c: "1985",
    d: "1999",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.querySelector(".submit");

let currentQuiz = 0;
let score = 0;



function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

loadQuiz();



function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}


submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
     quiz.innerHTML = "<h2>You answered " + score + "/" + quizData.length + " questions correctly</h2>" +
                 '<button onclick="location.reload()">Reload</button>';

    }
  }
});


