var startBtn = document.querySelector("#start");
var intro = document.querySelector(".intro");
var questionPrompt = document.querySelector(".question-prompt");
//setting variables using query selector so i can access them in js
var questionText = document.querySelector("#question");
var answerButtonText = document.querySelector("#choices");
var OptionOne = document.querySelector(".btn1");
var OptionTwo = document.querySelector(".btn2");
var OptionThree = document.querySelector(".btn3");
var OptionFour = document.querySelector(".btn4");

var currentScore = document.querySelector("#score");

startBtn.addEventListener('click', startQuiz);

// creating an array for all my questions and answers
var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      OptionOne: "Strings",
      OptionTwo: "Booleans",
      OptionThree: "Alerts",
      OptionFour: "Numbers",
      correct: "Three",
    },
    {
      question: "The condition in an if/else statement is enclosed with ______.",
      OptionOne: "Quotes",
      OptionTwo: "Curly brackets",
      OptionThree: "Parenthesis",
      OptionFour: "Square brackets",
      correct: "Two",
    },
    {
      question: "Arrays in JavaScript can be used to store _____.",
      OptionOne: "Numbers and strings",
      OptionTwo: "Other arrays",
      OptionThree: "Booleans",
      OptionFour: "All of the Above",
      correct: "Four",
    },
    {
      question: "String values must be enclosed within _____ when being assigned to variables.",
      OptionOne: "Commas",
      OptionTwo: "Curly brackets",
      OptionThree: "Quotes",
      OptionFour: "Parenthesis",
      correct: "Three",
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      OptionOne: "JavaScript",
      OptionTwo: "Terminal/bash",
      OptionThree: "For loops",
      OptionFour: "Console.log",
      correct: "One",
    },
  ];
  // declaring that my questions will start from the first one
  let nextQuestion = 0;
  
  // running a function to start the quiz after the button is clicked
  function startQuiz () {
    intro.classList.add('hide');
    questionPrompt.classList.remove('hide');
    startQuestion();
};



// function to display the questions and answers
function startQuestion () {
    
    let quest = questions[nextQuestion];
    question.innerHTML = quest.question;
    OptionOne.textContent = quest.OptionOne;
    OptionTwo.textContent = quest.OptionTwo;
    OptionThree.textContent = quest.OptionThree;
    OptionFour.textContent = quest.OptionFour;
}

function selectAnswer () {}

// const question1 = [
//     {
//         question: 'Commonly used data types DO NOT include:',
//         answers: [
//             {text: '1. Strings', correct: false},
//             {text: '2. Boolean', correct: false},
//             {text: '3. Alerts', correct: true},
//             {text: '4. Numbers', correct: false}
    
//         ]
//     }
// ] 
// const question2 = [
//     {
//         question: 'The condition in an if / else statement is enclosed with _____.',
//         answers: [
//             {text: '1. Quotes', correct: false},
//             {text: '2. Curly Brackets', correct: true},
//             {text: '3. Parenthesis', correct: false},
//             {text: '4. Square Brackets', correct: false}
    
//         ]
//     }
// ]