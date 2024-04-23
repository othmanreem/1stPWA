/**
 * 
 * Score klassen
 * 
 * @param {number} score // publik egenskap innehållande antal poäng
 * @param {HTMLElement} body //publik egenskap som representerar ett div element
 *
 */
function Score(score, body) {
    this.score = score;
    this.body = body;

    this.getScore(this.body, this.score)

}
/**
 * 
 */
Score.prototype.construct = function () {

}
/**
 * 
 * @param {HTMLElement} body 
 * @param {number} score 
 * 
 * Skapar ett div element för att visa poäng och en knap för att laddaom sidan och på så sätt för användaren starta en till spel omgång
 */
Score.prototype.getScore = function (body, score) {
    var scoreDiv = document.createElement("div");
    var altName;
    // anger default team namn i fall det händer så att användaren spelar och mitt i spelet filler teamName i localStorage 15 dagar och tas bort. För att inte skriva ut "null" helt enkelt
    if (score < 3) {
        altName = 'Losers'
    } else if (score >= 3) {
        altName = 'Legends'
    }

    var teamName = localStorage.getItem("teamName");
    scoreDiv.setAttribute("id", "score");
    body.appendChild(scoreDiv);
    scoreDiv.innerHTML = 'Team ' + (teamName || altName) + '<br>' + ' your Score is ' + score;

    var killRound = document.createElement("button");
    killRound.innerHTML = "One more Round";
    killRound.setAttribute("id", "one_more_round_btn")
    body.appendChild(killRound);

    killRound.addEventListener("click", function () {

        window.location.reload();
    })

    // window.addEventListener("beforeunload", function(e){
    // e.preventDefault();
    //     localStorage.clear();
    // })

}