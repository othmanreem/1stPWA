
function Game(arr) {
    this.body = document.getElementById("body");

    /** this.form = new Element("form", [ 
        {"id": "input_form"} 
    ],this.body, 1) **/

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
    //console.log(_Game);
    //  console.log(self) // utan var self = this refererar till window /**/


    this.body.innerHTML = ""; //'this.body is undefined  'Game.js:..:..'

    this.body.appendChild(this.form);
    this.form.setAttribute("id", "input_form");

    /**  var inputElems = new Element("input", [
         {"placeholder": "Type a word" },
          {"type": "text"},
           {"class": "input"}
     ], this.form, 5) **/

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
    var num = 0;
    for (var i = 0; i < this.inputs.length; i++) {
        var value = this.inputs[i].value;
        if (value === "") {
            //var fetch = new Fetch();
            num++;
            Fetch.prototype.fetch(this.helpBtn, this.arr, this.inputs[i], _Game);
        }
    }
    
    console.log(num);
}

Game.prototype.controllInput = function () {

    //console.log("KÖR");

    var _Game = this;

    var words = localStorage.setItem("words", JSON.stringify(this.arr));
    if (this.helpBtn.innerHTML === "Start Now") {

        var rotate = document.createElement("div");
        var rotateTxt = document.createTextNode('Rotate your phone to start');
        // rotate.appendChild(rotateTxt)
        this.body.appendChild(rotate);
        //  rotate.innerHTMl = "Rotate your phone to start"

        window.matchMedia("(orientation: portrait)").addEventListener("change", function (event) {
            var portrait = event.matches;

            if (portrait) {
                //console.log('v')
            } else {
                //console.log('h')
                _Game.body.innerHTML = "";
                var countDown = new CountDown(_Game.body, 3);
            }
        })
        this.helpBtn.addEventListener("click", _Game.address/*function (event) {
            event.preventDefault();
            _Game.body.innerHTML = "";
            var countDown = new CountDown(_Game.body, 3);
        }*/)
    } else {
        //console.log('STOP HERE')
        //console.log(this.arr)
        this.helpBtn.removeEventListener("click", _Game.address)
        this.helpBtn.addEventListener("click", function (event) {
            event.preventDefault();
            //console.log('CATCH') //callbacken anropas lika många gånger som de input fälten som töms, vilket i sin tur leder till lika många Fetch anrop via _Game.checkInputs() och ett konstigt beteende där de fälten som tömdes uppdateras med nya ord även om de redan innehåller ord. Och om man tömmar ett fält efetr att en _Game.checkInputs() anrop har redan gjorts så start spelet ändå. 

            _Game.checkInputs()
        })        
    }
}

Game.prototype.address = function (event) {
    console.log("!!address!!");
    event.preventDefault();
    var body = document.getElementById("body")
    body.innerHTML = "";
    var countDown = new CountDown(body, 3);
}