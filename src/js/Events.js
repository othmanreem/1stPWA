/**
 *
 *  Events klassen
 */
function Events() {

}

Events.prototype = Object.create(Game.prototype);
Events.prototype.constructor = Events;
/**
 * @param {object} _Game 
 * 
 */
Events.prototype.construct = function (_Game) {
   this.handelInputs.call(_Game);
   // Events.prototype.handelInputs.call(_Game);
}
/**
 * 
 * Sätter händelser lyssnare för klick händelsen på helpBtn som anropar checkInputs() för att fetcha ord. I en for loop som itererar över alla inputfälten sätts händelse lyssnare för "focus" som tömmar aktuelt fält om det har något innehåll, "keypress" som applicerar blure() på inputfältet när användaren klikcer Enter och aropar controllInput, "blur" som pushar innehålet i input fältet till arr och kontrolerar om arr.length är lika med 5 så ändras texten i helpBtn till 'Rotate your phone to start' annars får den vara som den är. Sist anropas controllInput med villkoret "_Game.arr.length === 5" som är "ready" parametern och antingen är den flase eller true
 */
Events.prototype.handelInputs = function () {

    var _Game = this;

    _Game.helpBtn.addEventListener("click", function (event) {
        event.preventDefault();
        if (this.innerHTML === "Get Words") {
            _Game.checkInputs()
        }
    })

    for (var i = 0; i < this.inputs.length; i++) {
        this.inputs[i].addEventListener("focus", function () {
            var ix = _Game.arr.indexOf(this.value)
            if (ix !== -1) {
                _Game.arr.splice(ix, 1);
            }
            this.value = "";
            this.setAttribute("placeholder", "Type a word")
            _Game.helpBtn.innerHTML = "Get Words";
            _Game.controllInput(false, _Game);

        })

        this.inputs[i].addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                this.blur();
            }

            _Game.controllInput(_Game.arr.length === 5, _Game)

        })

        this.inputs[i].addEventListener("blur", function () {
            if (this.value !== "") {
                _Game.arr.push(this.value);
            }

            _Game.helpBtn.innerHTML = _Game.arr.length === 5 ? "Rotate your phone to start" : _Game.helpBtn.innerHTML;
            _Game.controllInput(_Game.arr.length === 5, _Game);
        })
    }
}