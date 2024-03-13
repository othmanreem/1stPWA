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

CountDown.prototype.m_construct = function () {

}

CountDown.prototype.countDownSec = function (clockDiv) {

    var _CountDown = this;

    var startCountDown = function () {
        var soundEffect = new Audio("src/js/sec.mp3");
        soundEffect.play();
        --_CountDown.secs;
        clockDiv.innerHTML = _CountDown.secs;
        if (_CountDown.secs === -1) {
            console.log('DONE')
            clockDiv.innerHTML = "";
            clearInterval(setTime)
            var round = new Round(_CountDown.body)


        }

    }

    var setTime = setInterval(startCountDown, 1000);
}