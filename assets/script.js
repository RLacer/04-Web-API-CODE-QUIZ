var startBtnEl = document.getElementById("start");
var startScreenEl = document.getElementById("startscreen");
var questionsEl = document.getElementById("questions");
var timerId;
var time = questions.length * 15;
var timerEl = document.getElementById("time");
var quesIndex = 0;
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback")
var endScreenEl = document.getElementById("end_screen")
var submitBtn = document.getElementById("submit")


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
        quizEnd();

    }
}

function getQuestion() {
    var currentQuestion = questions[quesIndex];

    var titleEl = document.getElementById("question_title");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function (choice, i) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);
        choiceButton.textContent = i + 1 + "." + choice;
        choiceButton.onclick = clickQuestion;
        choicesEl.appendChild(choiceButton);

    });
}

function clickQuestion() {
    if (this.value !== questions[quesIndex].answer) {
        time -= 15;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;
        feedbackEl.textContent = "Sorry, that is incorrect.";

    } else {
        feedbackEl.textContent = "That is correct!";

    }

    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    quesIndex++;

    if (quesIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
    clearInterval(timerId);
    endScreenEl.removeAttribute("class");
    questionsEl.setAttribute("class", "hide");
    var finalScoreEl = document.getElementById("final_score");
    finalScoreEl.textContent = time;

}

function submitFinal() {
    var initialsEl = document.getElementById("initials");
    var initials = initialsEl.value.trim();

    if (initials !== "") {
        var hiScores = JSON.parse(localStorage.getItem("hiScores")) || [];
        var newScore = {
            score: time,
            initials: initials
        }

        hiScores.push(newScore);
        localStorage.setItem("hiScores", JSON.stringify(hiScores));
        location.href = "hiscores.html";


    }

}



submitBtn.onclick = submitFinal;

startBtnEl.onclick = startQuiz;


