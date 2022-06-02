var startBtn = document.querySelector("#start");
var intro = document.querySelector(".intro");
var questionPrompt = document.querySelector(".question-prompt");

var questionText = document.querySelector("#question");
var answerButtonText = document.querySelector("#choices");
// var buttonOne = document.querySelector(".btn1");
// var buttonTwo = document.querySelector(".btn2");
// var buttonThree = document.querySelector(".btn3");
// var buttonFour = document.querySelector(".btn4");

var currentScore = document.querySelector("#score");

startBtn.addEventListener('click', startQuiz);

function startQuiz () {
    intro.classList.add('hide');
    questionPrompt.classList.remove('hide');
nextQuestion();
};

function nextQuestion (question) {
    questionText.innerHTML = question.question;

}

function selectAnswer () {}

const questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            {text: '1. Strings', correct: false},
            {text: '2. Boolean', correct: false},
            {text: '3. Alerts', correct: true},
            {text: '4. Numbers', correct: false}
    
        ]
    }
]