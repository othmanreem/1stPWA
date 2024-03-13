function Round(bd) {


    this.active = false;
    this.score = 0;
    this.time = 10;
    this.body = document.body;
    this.bd = bd;
    this.swipeStart = 0;
    this.swipeEnd = 0;
    this.CountSwipes = 0;
    this.m_construct()
}
Round.prototype.m_construct = function () {
    this.buildOneRound()
    this.countDownOnemin();
}

Round.prototype.buildOneRound = function () {

    var _Round = this; // [change _Round to "self" later]

    var swipeStart = 0;
    var swipeEnd = 0;
    this.wordsArr = JSON.parse(localStorage.getItem("words"));
    this.oneWord = 0;


    this.bd.innerHTML = ""

    // TIMER ********

    this.minDiv = document.createElement("div");
    this.minDiv.style.marginBottom = "25px";
    this.minDiv.setAttribute("id", "min")
    this.minDiv.innerHTML = this.time;
    this.bd.appendChild(this.minDiv);
    this.wordDiv = document.createElement("div");
    this.wordDiv.setAttribute("id", "word")
    this.bd.appendChild(this.wordDiv)

    //var bd = document.getElementById("swp");

    this.wordDiv.innerHTML = this.wordsArr[this.oneWord];

    this.active = true;

    this.body.addEventListener("touchstart", function (e) {
        if (_Round.active == true) {
            swipeStart = e.changedTouches[0].pageY;
        }
    });


    this.body.addEventListener("touchend", function (e) {



        if (_Round.active == true) {
            _Round.CountSwipes++
            swipeEnd = e.changedTouches[0].pageY;
            _Round.handleSwipe(swipeEnd, swipeStart)

        }

    })


}

Round.prototype.handleSwipe = function (swipeEnd, swipeStart) {

    var _Round = this;

    if (swipeEnd < swipeStart) {
        ++this.score;
        this.changeClass("red", "green")

    }
    if (swipeEnd > swipeStart) {
        this.changeClass("green", "red")
    }
}

Round.prototype.changeClass = function (previousClass, _class) {

    var _Round = this;

    this.body.classList.remove(previousClass)
    this.body.classList.add(_class);


    setTimeout(function () {
        _Round.body.classList.remove(previousClass, _class)

    }, 500)

    if (this.oneWord < 4) {
        ++this.oneWord;
        this.wordDiv.innerHTML = this.wordsArr[this.oneWord];
    } 
}

Round.prototype.countDownOnemin = function () {

    var _Round = this;
    console.log(_Round)
    var updateCountdown = function () {
        console.log('Window')
        // console.log(this) 'this' = windwo 
        _Round.time--;
        _Round.minDiv.innerHTML = _Round.time;


        // console.log(_Round.time)

        if (_Round.score == 5 || _Round.time == 0 || _Round.CountSwipes == 5) {
            clearInterval(startTimer);
            _Round.gameOver();

        }
    }

    var startTimer = setInterval(updateCountdown, 1000);
}

Round.prototype.gameOver = function () {

    var _Round = this;
    this.active = false;
    this.bd.innerHTML = "";
    var score = new Score(this.score, this.bd);
}


