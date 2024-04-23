/**
 * CountDown klassen
 * @param {HTMLElement} body 
 * @param {number} secs 
 * 
 * CountDown konstruktorn har egenskaperna body: som är samma div element som i Game, secs: antal sekunder, clockDiv: en privat egenskap,skapar ett div element för att visa sekunderna som en nedräkningsklocka, soundEffect: ett audio objekt
 */
function CountDown(body, secs) {
    this.body = body;
    this.secs = secs;
    var clockDiv = document.createElement("div");
    clockDiv.setAttribute("id", "secs")
    body.appendChild(clockDiv);
    clockDiv.innerHTML = secs;
    var soundEffect = new Audio("src/js/countdown.mp3");
    soundEffect.play();

    this.countDownSec(clockDiv);
}
/**
 * 
 */
CountDown.prototype.m_construct = function () {

}
/**
 * 
 * @param {HTMLElement} clockDiv 
 * 
 * Variabeln setTime kallar startCountDown varje sekund via den inbyggda metoden setInterval. startCountDown skapar ett audio objekt och splar den, samtidigt minskar secs med ett varje gång functionen anropas. En if stats kontrollerar om alla sekunder har räknats ner, om så avslutas setInterval och objektet round skapas
 */
CountDown.prototype.countDownSec = function (clockDiv) {

    var _CountDown = this;

    var startCountDown = function () {
        var soundEffect = new Audio("src/js/sec.mp3");
        soundEffect.play();
        --_CountDown.secs;
        clockDiv.innerHTML = _CountDown.secs;
        if (_CountDown.secs === -1) {
            clockDiv.innerHTML = "";
            clearInterval(setTime)
            var round = new Round(_CountDown.body)


        }

    }

    var setTime = setInterval(startCountDown, 1000);
}