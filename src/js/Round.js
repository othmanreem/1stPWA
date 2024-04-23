/**
 * 
 * Round klassen 
 * @param {HTMLElement} bd 
 * 
 * Alla egenskaper i Round konstruktorn är publika. active: har sitt intialla boolean värde som false, score: antal poäng som en splare kan samla, satt till 0, time: antal sekunder som en runda kan ta, body: documentets body element, bd: div element, swipeStart: indikerar var på skärmen användaren börjar svepa, swipeEnd: indikerar var på skärmen användaren slutar svepa,
 * CountSwipes: hur många gånger användaren svepar. 
 */
function Round(bd) {
    this.active = false;
    this.score = 0;
    this.time = 60;
    this.body = document.body;
    this.bd = bd;
    this.swipeStart = 0;
    this.swipeEnd = 0;
    this.CountSwipes = 0;
    this.m_construct()
}
/**
 * 
 * Anropar buildOneRound och countDownOnemin
 */
Round.prototype.m_construct = function () {
    this.buildOneRound()
    this.countDownOnemin();
}

/**
 * 
 * buildOneRound startar en runda och sakapar tre publika egenskaper till, wordsArr: en lista med 5 ord från lokallaggring, oneWord: är menad att indexera wordsArr, wordDiv: ett div element för att visa aktuelt ord. Utöver det sätts active till true, och det läggs till två event listeners som lyssnar efter "touchstart" på body elementet sen uppdaterar swipeStart och "touchend" som uppdaterar swipeEnd, inkrementerar CountSwipes med ett då användaren har gjort en svep
 och sist anropar handleSwipe();
 */
Round.prototype.buildOneRound = function () {
    var _Round = this;


    // f.m  this.wordsArr, this.minDiv, this.wordDiv 
    this.wordsArr = JSON.parse(localStorage.getItem("words"));
    this.oneWord = 0;
    this.bd.innerHTML = ""
    this.minDiv = document.createElement("div");
    this.minDiv.style.marginBottom = "25px";
    this.minDiv.setAttribute("id", "min")
    this.minDiv.innerHTML = this.time;
    this.bd.appendChild(this.minDiv);
    this.wordDiv = document.createElement("div");
    this.wordDiv.setAttribute("id", "word")
    this.bd.appendChild(this.wordDiv)
    this.wordDiv.innerHTML = this.wordsArr[this.oneWord];
    this.active = true;

    this.body.addEventListener("touchstart", function (e) {
        if (_Round.active == true) {
            _Round.swipeStart = e.changedTouches[0].pageY;
        }
    });


    this.body.addEventListener("touchend", function (e) {
        if (_Round.active == true) {
            _Round.CountSwipes++
            _Round.swipeEnd = e.changedTouches[0].pageY;
            _Round.handleSwipe(_Round.swipeEnd, _Round.swipeStart)

        }
    })
}
/**
 * 
 * @param {number} swipeEnd 
 * @param {number} swipeStart
 * 
 * Baserat på swipeEnd och swipeStart värden antingen inkrimenterar score med en och anropar changeClass eller endast anropar changeClass utan att inkrementera 
 */
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
/**
 * 
 * @param {string} previousClass 
 * @param {string} _class 
 * 
 * Baserat på anrop från handleSwipe uppdaterar skärmens bakgrundsfärg för 500 milisekunder och kontrollerar om oneWord är mindre än fyra så ökas den med ett och används för att indexera wordsArr och visa nästa ord i arrayen 
 */
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
/**
 * 
 * Varje sekund dekrementera timme med ett och uppdaterar innehållet i det div elementet som visar nedräkningen. Om användaren svarar på alla ord rätt dvs om score är 5, om tiden tar slut eller om användaren sveper 5 gånger så avslutas rundan och gameOver anropas. 
 */
Round.prototype.countDownOnemin = function () {
    var _Round = this;

    var updateCountdown = function () {
        _Round.time--;
        _Round.minDiv.innerHTML = _Round.time;

        if (_Round.score == 5 || _Round.time == 0 || _Round.CountSwipes == 5) {
            clearInterval(startTimer);
            _Round.gameOver();
        }
    }
    var startTimer = setInterval(updateCountdown, 1000);
}
/**
 * 
 * Avslutar rundan genom att sätta active till false tömma div elmenetet och skapa ett objekt för att visa antal poäng som användaren lyckas få 
 */
Round.prototype.gameOver = function () {
    var _Round = this;
    this.active = false;
    this.bd.innerHTML = "";
    var score = new Score(this.score, this.bd);
}


