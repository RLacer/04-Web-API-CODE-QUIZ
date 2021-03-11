function printHiScores() {
    var hiScores = JSON.parse(localStorage.getItem("hiScores")) || [];
    console.log(hiScores);
    hiScores.sort(function (a, b) {
        return b.score - a.score;
    })

    hiScores.forEach(function(score) {
        console.log("test");
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;

        var olEl = document.getElementById("hi_scores_list");
        olEl.appendChild(liTag);

    });

}


function clearHiScores() {
    localStorage.removeItem("hiScores");
    location.reload();

}
document.getElementById("clear").onclick = clearHiScores;

printHiScores();





