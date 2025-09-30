
let questions = [
    {
        question: "What is 2+2?",
        choices: ["2", "3", "4", "5"],
        correctIndex: 2

    },
    {
        question: "What is 1*1?",
        choices: ["1", "10", "100", "1000"],
        correctIndex: 0
    },
    {
        question: "What is seven times 5?",
        choices: ["5", "15", "25", "35"],
        correctIndex: 3
    },
    {
        question: "What is the square root of 9?",
        choices: ["0", "1", "2", "3"],
        correctIndex: 3
    },

]

let currentQuestionIndex = 0;
// let currentOption1Index=0;
// let currentOption2Index=0;
// let currentOption3Index=0;
// let currentOption4Index=0;

const getNext = document.getElementById("get-next"); 
const currentQuestion = document.getElementById("question-text"); 
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

currentQuestion.textContent = questions[currentQuestionIndex].question;
option1.textContent = questions[currentQuestionIndex].choices[0];
option2.textContent = questions[currentQuestionIndex].choices[1];
option3.textContent = questions[currentQuestionIndex].choices[2];
option4.textContent = questions[currentQuestionIndex].choices[3];


getNext.addEventListener("click", function() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    currentQuestion.textContent = questions[currentQuestionIndex].question;
    option1.textContent = questions[currentQuestionIndex].choices[0];
    option2.textContent = questions[currentQuestionIndex].choices[1];
    option3.textContent = questions[currentQuestionIndex].choices[2];
    option4.textContent = questions[currentQuestionIndex].choices[3];
  } else {
    currentQuestion.textContent = "You have finished the quiz!";
    option1.textContent = "";
    option2.textContent = "";
    option3.textContent = "";
    option4.textContent = "";
    getNext.disabled = true; 
  }
});





