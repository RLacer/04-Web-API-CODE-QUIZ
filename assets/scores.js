function printHighScores () {
 var hiScores = JSON.parse(localStorage.getItem("hiScores")) || [];
hiScores.sort(function(a, b) {
    return b.score - a.score;
})

hiScores.array.forEach(function(score) {
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    var olEl = document.getElementById("hi_scores_list");
    olEl.appendChild(liTag);

});

}


function clearHiScores () {
    localStorage.removeItem("hiScores");
    location.reload();

}
document.getElementById("clear").onclick = clearHiScores;

clearHiScores();





