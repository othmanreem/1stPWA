/**
 * 
 *Game klassen 
 Game konstruktorn innehåller egenskaperna body som är referens till ett div element, form: skapar ett form element, helpBtn: skapar en knapp som fetcher ord, arr: en tom array där inmattadet eller fetchade ord pushas och sist anropas metoden m_construct()
 */
function Game() {

     //  this.form = new Element("form", 
    //    [{"id": "input_form"}], this.body, 1) 

    this.body = document.getElementById("body");
    this.form = document.createElement("form");
    this.helpBtn = document.createElement("button");
    this.arr = [];
    this.tmp = null;
    this.m_construct(); // vrf måste jag den i koden "manuellt" ?
    
   
}
/**
 * 
 * anropar buildGame();
 */
Game.prototype.m_construct = function () {
    this.buildGame();
}
/**
 * 
 * Tomar div "egenskapen body" elementet, appendar form på body, en for loop som itererar fem gångar, skapar fem inputfält och sätter olika attribute på dem, sist appendas dem på form. Sedan skapas en egenskap till inputs som är en lista med alla input elementen, helpBtn får några attribut och appendas på form och i slutet instansieras Events och construct metoden anropas via instansen 
 */
Game.prototype.buildGame = function () {
    var _Game = this;
    this.body.innerHTML = "";
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
    events.construct(this) 
}
/**
 * 
 *  Anropas från handelInputs() i Events.js. En for loop som itererar genom alla fem input fälten och för varje tomt fält fetchas ett ord genom att anropa Fetch.prototype.fetch (), egenskaparna helpBtn, arr, inputs samt det aktuella Game instansen skickas som parametrar för de behövs sen i Fetch.js. Men i början av loopen kontroleras internet kopplingnen, om användaren har ingen internetuppkoppling för den en alert box och inga fler iterationer sker; 
 */
Game.prototype.checkInputs = function () {
    var _Game = this

    for (var i = 0; i < this.inputs.length; i++) {
        if (!navigator.onLine) {
         //   alertBox = true;
            alert('Please check your internet connection or type in the words manually to continue playing!!');
            return;
        }
        var value = this.inputs[i].value;
        if (value === "") {
            var fetch = new Fetch();
            fetch.fetch(this.helpBtn, this.arr, this.inputs[i], _Game);
           // Fetch.prototype.fetch(this.helpBtn, this.arr, this.inputs[i], _Game);
        }
    }
}
/**
 * @param {boolean} ready 
 * @param {object} Game 
 * 
 * Lägger orden som pushades i arr i local storage, kontrolerar "ready" parametern, om den är true så avaktiveras helpBtn och den får ett nytt innehåll som tyder för användaren hur rundan startar, och det händer via en event lysnnare som lyssnar som checker om skärmen är i horizontel eller vertikal läge, om skärmen byter till horizontel läge starts rundan, annars ingen ting händer. Om ready är false så aktiveras helpBtn för att ge möljghet att hämta ord om önskas
 */
Game.prototype.controllInput = function (ready, Game) {
    var _Game = Game;
   
    var words = localStorage.setItem("words", JSON.stringify(_Game.arr));
   
    if(ready){
        
        _Game.helpBtn.setAttribute("disabled", "true")

        // window.addEventListener("deviceorientation", function(e){
        //     if (e.gamma){
        //         console.log(e.gamma);
        //     }
        //         })

        window.matchMedia("(orientation: portrait)").addEventListener("change", function (event) {
            var portrait = event.matches;
            if (portrait) {
                //console.log('v');
            } else {
                _Game.body.innerHTML = "";
                var countDown = new CountDown(_Game.body, 3);
            }
        });
     
    } else {   
        _Game.helpBtn.removeAttribute("disabled")
       
    }
}