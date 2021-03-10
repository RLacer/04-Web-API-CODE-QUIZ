var startBtnEl = document.getElementById("start");
var startScreenEl = document.getElementById("startscreen");
var questionsEl = document.getElementById("questions");
var timerId;
var time = questions.length * 15;
var timerEl = document.getElementById("time");
var quesIndex = 0;


function startQuiz() {
startScreenEl.setAttribute("class", "hide");
questionsEl.removeAttribute("class");
timerId = setInterval(clockTick, 1000);
timerEl.textContent = time;
getQuestion();

};

function clockTick() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        // quizEnd();
    
    }
}

function getQuestion() {
    var currentQuestion = questions[quesIndex];
console.log(currentQuestion);
    var titleEl = document.getElementById("question_title");
    titleEl.textContent = currentQuestion.title;
}






startBtnEl.onclick = startQuiz;


