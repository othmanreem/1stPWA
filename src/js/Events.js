function Events() {

}

Events.prototype = Object.create(Game.prototype);
Events.prototype.constructor = Events;

Events.prototype.construct = function (_Game) {
    //console.log(_Game) // 
    //console.log(this) //hur är 'th
    Events.prototype.handelInputs.call(_Game);
}

Events.prototype.handelInputs = function () {

    var _Game = this;
    //console.log(self) // varför loggar den här raden window objektet 'Window http://127.0.0.1:5503/index.html'

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
           console.log(_Game.arr.length)
            _Game.controllInput(false);
            
        })

        this.inputs[i].addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                this.blur();
                console.log(_Game.arr.length)
            }

            // if(_Game.arr.length == 5){
            //     _Game.controllInput(true);
            // } else {
            //     _Game.controllInput(flase);
            // }


           // _Game.controllInput(_Game.arr.length == 5 ? true : false);

           _Game.controllInput(_Game.arr.length === 5)

        })

        this.inputs[i].addEventListener("blur", function () {
            if (this.value !== "") {
                _Game.arr.push(this.value);
            }

            _Game.helpBtn.innerHTML = _Game.arr.length === 5 ? "Rotate your phone to start" : _Game.helpBtn.innerHTML;
            _Game.controllInput(_Game.arr.length === 5);
            // if (_Game.arr.length === 5) {
            //     _Game.helpBtn.innerHTML = "Start Now";
            //     // self.checkInputs( self.helpBtn, arr) WAIT WITH THIS
            //    // _Game.controllInput(_Game.arr.length == 5 ? true : false);
            //    // _Game.controllInput();
            // }
            // _Game.controllInput(_Game.arr.length == 5 ? true : false);
        })
    }
}