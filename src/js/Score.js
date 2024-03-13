function Score(score, body) {

    var _Score = this;
    this.score = score;
    this.body = body;

    var scoreDiv = document.createElement("div");
    var teamName = localStorage.getItem("teamName");
    scoreDiv.setAttribute("id", "score");
    this.body.appendChild(scoreDiv);
    scoreDiv.innerHTML = 'Team ' + teamName + '<br>' + ' your Score is ' + this.score;


    var killRound = document.createElement("button");
    killRound.innerHTML = "One more Round";
    killRound.setAttribute("id", "one_more_round_btn")
    this.body.appendChild(killRound);

    killRound.addEventListener("click", function () {


        window.location.reload();

        
        // Main.call(_Score);
        // console.log(_Score.arr)


        //_Score.cleanArr();
        //window.location("index.html")
        // var OneMoreRoun = new Main();
    })


}

// Score.prototype = Object.create(Main.prototype);
// Score.prototype.constructor = Score;
Score.prototype.construct = function (_Game) {
    //console.log(_Game) // 
    //console.log(this) //hur är 'th
    Score.prototype.reachCleanArr.call(_Game);
}

Score.prototype.reachCleanArr = function () {

}
