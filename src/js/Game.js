
function Game(arr) {

    this.body = document.getElementById("body");
    this.form = document.createElement("form");
    this.helpBtn = document.createElement("button");
    this.arr = [];
    this.tmp = null;

    this.m_construct(); // vrf måste jag ha med den?????
}

Game.prototype.m_construct = function () {
    this.buildGame();
}

Game.prototype.buildGame = function () {
    var _Game = this;

    this.body.innerHTML = ""; //'this.body is undefined  'Game.js:..:..'
    this.body.appendChild(this.form);

    this.form.setAttribute("id", "input_form");

    for (var i = 0; i < 5; i++) {
        var inputElem = document.createElement("input");
        inputElem.setAttribute("placeholder", "Type a word");
        inputElem.setAttribute("type", "text");
        inputElem.setAttribute("class", "input");
        this.form.appendChild(inputElem)
    }

    this.inputs = document.getElementsByClassName("input");

    var BtnTxt = document.createTextNode("Get Words")
    this.helpBtn.appendChild(BtnTxt);
    this.helpBtn.setAttribute("id", "help");
    this.helpBtn.setAttribute("type", "button");
    this.form.appendChild(this.helpBtn);

    var events = new Events();
    events.construct(this) // --> Events: ..m_construct { Events.prototype.handelInputs./call/(this); ??}
}

Game.prototype.checkInputs = function () {

    var _Game = this

    for (var i = 0; i < this.inputs.length; i++) {
        if (!navigator.onLine) {

            alertBox = true;
            window.alert('Please check your internet connection or type in the words manually to continue playing!!');
            return;

        }
        var value = this.inputs[i].value;
        if (value === "") {
            Fetch.prototype.fetch(this.helpBtn, this.arr, this.inputs[i], _Game);
        }
    }





}

Game.prototype.controllInput = function (ready) {
    var _Game = this;
    var words = localStorage.setItem("words", JSON.stringify(this.arr));


    // var rotate = document.createElement("div");
    // var rotateTxt = document.createTextNode('Rotate your phone to start');
    // this.body.appendChild(rotate);

   // if (this.helpBtn.innerHTML === "Start Now") {
    if(ready){
        console.log('READY')

        
      
       // rotate.appendChild(rotateTxt);
       
        _Game.helpBtn.setAttribute("disabled", "true")

        window.matchMedia("(orientation: portrait)").addEventListener("change", function (event) {
            var portrait = event.matches;
            if (portrait) {
                //console.log('v');
            } else {
                //console.log('h');
                _Game.body.innerHTML = "";
                var countDown = new CountDown(_Game.body, 3);
            }
        });
        this.helpBtn.addEventListener("click", _Game.address);
    } else {
       
       // rotate.remove();
       
       
        _Game.helpBtn.removeAttribute("disabled")
        console.log('NOT READY')
        this.helpBtn.removeEventListener("click", _Game.address)
    }
}

Game.prototype.address = function (event) {
    console.log("!!address!!");
    event.preventDefault();
    var body = document.getElementById("body")
    body.innerHTML = "";
    var countDown = new CountDown(body, 3);
}