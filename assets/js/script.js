var startBtn = document.querySelector("#start");
var intro = document.querySelector(".intro");
var questionPrompt = document.querySelector(".question-prompt");
//setting variables using query selector so i can access them in js
var questionText = document.querySelector("#question");
var answerButtonText = document.querySelector("#choices");
var OptionOne = document.querySelector("#btn1");
var OptionTwo = document.querySelector("#btn2");
var OptionThree = document.querySelector("#btn3");
var OptionFour = document.querySelector("#btn4");

var currentScore = document.querySelector("#score");
var timer = document.querySelector("#timer")

startBtn.addEventListener('click', startQuiz);
  
  // running a function to start the quiz after the button is clicked
  function startQuiz () {
    intro.classList.add('hide');
    questionPrompt.classList.remove('hide');
    questionOne();
    answerOne();
    startTimer();
    getScore();
};

// function to start a timer 
var startTimer = function () {

    let timerInterval;
    let count = 51;

    timerInterval = setInterval(function () {
        count--;
        timer.textContent = count;
        
        if (counter = 0) {

            alert("Out of time!")
        }
    }, 1000);
};

var score = 0;
//setting score to 0 and creating a way to see your current score
var getScore = function () {
    currentScore.innerHTML = score;
}

function questionOne () {
    question.innerHTML = "Commonly used data types DO NOT include:"
    OptionOne.textContent = "Strings";
    OptionTwo.textContent = "Booleans";
    OptionThree.textContent = "Alerts";
    OptionFour.textContent = "Numbers"
}    

function answerOne () {
    OptionThree.onclick = function() {
        score++;
        questionTwo();
        answerTwo();
    }
    OptionOne.onclick = function() {
        score--;
        questionTwo();
        answerTwo();
    }
    OptionTwo.onclick = function() {
        score--;
        questionTwo();
        answerTwo();
    }
    OptionFour.onclick = function() {
        score--;
        questionTwo();
        answerTwo();
    }
}

function questionTwo () {
    question.innerHTML = "The condition in an if/else statement is enclosed with ______."
    OptionOne.textContent = "Quotes";
    OptionTwo.textContent = "Curly brackets";
    OptionThree.textContent = "Parenthesis";  3
    OptionFour.textContent = "Square brackets"
}    

function answerTwo () {
    OptionThree.onclick = function() {
        score++;
        questionThree();
        answerThree();
    }
    OptionOne.onclick = function() {
        score--;
        questionThree();
        answerThree();
    }
    OptionTwo.onclick = function() {
        score--;
        questionThree();
        answerThree();
    }
    OptionFour.onclick = function() {
        score--;
        questionThree();
        answerThree();
    }
}

function questionThree() {
    question.innerHTML = "Arrays in JavaScript can be used to store _____.";
    OptionOne.textContent = "Numbers and strings";
    OptionTwo.textContent = "Other arrays";
    OptionThree.textContent = "Booleans";
    OptionFour.textContent = "All of the Above";  4
}
function answerThree () {
    OptionFour.onclick = function() {
        score++;
        questionFour();
        answerFour();
    }
    OptionOne.onclick = function() {
        score--;
        questionFour();
        answerFour();
    }
    OptionTwo.onclick = function() {
        score--;
        questionFour();
        answerFour();
    }
    OptionThree.onclick = function() {
        score--;
        questionFour();
        answerFour();
    }
}

function questionFour() {
    question.innerHTML = "String values must be enclosed within _____ when being assigned to variables.";
    OptionOne.textContent = "Commas";
    OptionTwo.textContent = "Curly brackets";
    OptionThree.textContent = "Quotes"; 3
    OptionFour.textContent = "Parenthesis";
}
function answerFour () {
    OptionThree.onclick = function() {
        score++;
        questionFive();
        answerFive();
    }
    OptionOne.onclick = function() {
        score--;
        questionFive();
        answerFive();
    }
    OptionTwo.onclick = function() {
        score--;
        questionFive();
        answerFive();
    }
    OptionFour.onclick = function() {
        score--;
        questionFive();
        answerFive();
    }
}

function questionFive() {
      question.innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is:";
      OptionOne.textContent = "JavaScript";
      OptionTwo.textContent = "Terminal/bash";
      OptionThree.textContent = "For loops"; 
      OptionFour.textContent = "Console.log";
}
function answerFive () {
    OptionOne.onclick = function() {
        score++;
    }
    OptionThree.onclick = function() {
        score--;
    }
    OptionTwo.onclick = function() {
        score--;
    }
    OptionFour.onclick = function() {
        score--;
    }
}
getScore();