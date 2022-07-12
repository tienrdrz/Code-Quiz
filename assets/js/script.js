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

var endGame = document.querySelector("#info");

var finalScore = JSON.parse(localStorage.getItem("finalScore")) || [];

var score = 0;
var timer = document.querySelector("#timer")

startBtn.addEventListener('click', startQuiz);
  
  // running a function to start the quiz after the button is clicked
  function startQuiz () {
    intro.classList.add('hide');
    questionPrompt.classList.remove('hide');
    questionOne();
    answerOne();
    startTimer();
};

// function to start a timer 
var startTimer = function () {

    let timerInterval;
    let count = 51;

    timerInterval = setInterval(function () {
        count--;
        timer.textContent = count;
        
        if (count <= 0) {
        questionPrompt.classList.add("hide");
        endGame.classList.remove("hide");
        document.getElementById("endtext").innerHTML = "Times up! If you would like to try again refresh the page, if not, please submit your score!"
        timer.innerHTML = ""; 
        }
    },1000);
};


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
        document.getElementById("score").innerHTML = score;
        questionTwo();
        answerTwo();
    }
    OptionOne.onclick = function() {
        score--;
        document.getElementById("score").innerHTML = score;
        questionTwo();
        answerTwo();
    }
    OptionTwo.onclick = function() {
        score--;
        document.getElementById("score").innerHTML = score;
        questionTwo();
        answerTwo();
    }
    OptionFour.onclick = function() {
        score--;
        document.getElementById("score").innerHTML = score;
        questionTwo();
        answerTwo();
    }
}

function questionTwo () {
    question.innerHTML = "The condition in an if/else statement is enclosed with ______."
    OptionOne.textContent = "Quotes";
    OptionTwo.textContent = "Curly brackets";
    OptionThree.textContent = "Parenthesis";  
    OptionFour.textContent = "Square brackets"
}    

function answerTwo () {
    OptionThree.onclick = function() {
        score++;
        document.getElementById("score").innerHTML = score;
        questionThree();
        answerThree();
    }
    OptionOne.onclick = function() {
        score--;
        document.getElementById("score").innerHTML = score;
        questionThree();
        answerThree();
    }
    OptionTwo.onclick = function() {
        score--;
        document.getElementById("score").innerHTML = score;
        questionThree();
        answerThree();
    }
    OptionFour.onclick = function() {
        score--;
        document.getElementById("score").innerHTML = score;
        questionThree();
        answerThree();
    }
}

function questionThree() {
    question.innerHTML = "Arrays in JavaScript can be used to store _____.";
    OptionOne.textContent = "Numbers and strings";
    OptionTwo.textContent = "Other arrays";
    OptionThree.textContent = "Booleans";
    OptionFour.textContent = "All of the Above";  
}
function answerThree () {
    OptionFour.onclick = function() {
        score++;
        document.getElementById("score").innerHTML = score;
        questionFour();
        answerFour();
    }
    OptionOne.onclick = function() {
        score--;
        document.getElementById("score").innerHTML = score;
        questionFour();
        answerFour();
    }
    OptionTwo.onclick = function() {
        score--;
        document.getElementById("score").innerHTML = score;
        questionFour();
        answerFour();
    }
    OptionThree.onclick = function() {
        score--;
        document.getElementById("score").innerHTML = score;
        questionFour();
        answerFour();
    }
}

function questionFour() {
    question.innerHTML = "String values must be enclosed within _____ when being assigned to variables.";
    OptionOne.textContent = "Commas";
    OptionTwo.textContent = "Curly brackets";
    OptionThree.textContent = "Quotes"; 
    OptionFour.textContent = "Parenthesis";
}
function answerFour () {
    OptionThree.onclick = function() {
        score++;
        document.getElementById("score").innerHTML = score;
        questionFive();
        answerFive();
    }
    OptionOne.onclick = function() {
        score--;
        document.getElementById("score").innerHTML = score;
        questionFive();
        answerFive();
    }
    OptionTwo.onclick = function() {
        score--;
        document.getElementById("score").innerHTML = score;
        questionFive();
        answerFive();
    }
    OptionFour.onclick = function() {
        score--;
        document.getElementById("score").innerHTML = score;
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
        document.getElementById("score").innerHTML = score;
        highScore();
    }
    OptionThree.onclick = function() {
        score--;
        document.getElementById("score").innerHTML = score;
        highScore();
    }
    OptionTwo.onclick = function() {
        score--;
        document.getElementById("score").innerHTML = score;
        highScore();
    }
    OptionFour.onclick = function() {
        score--;
        document.getElementById("score").innerHTML = score;
        highScore();
    }
}

function highScore () {
questionPrompt.classList.add('hide')
    endGame.classList.remove("hide")
}

var playerInfo = document.getElementById("info");

playerInfo.addEventListener("submit", function () {

    var initials = document.getElementById("input").value;
    var newScore = {initials:initials, score:score};
    finalScore.push(newScore);
    localStorage.setItem("finalScore", JSON.stringify(finalScore));
})