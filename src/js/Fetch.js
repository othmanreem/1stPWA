function Fetch() {

    this.m_construct()

    // helpBtn.setAttribute("disabled", "true")
}

// Fetch.prototype = Object.create(Game.prototype);
// Fetch.prototype.constructor = Fetch;

Fetch.prototype.m_construct = function () {

}

Fetch.prototype.fetch = function (helpBtn, array, input, _Game) {

    var _Fetch = this;
   
   //var alertBox = false;
    
    (function () {
        helpBtn.setAttribute("disabled", "true")
        input.setAttribute("placeholder", "Loading..")
        fetch('https://api.api-ninjas.com/v1/randomword',
            {
                method: "GET",
                headers: {
                    "X-Api-Key": "ucXLCy2iy2Zm20z8aem6qg==7IP4UrGTsRw5aoKP"
                }
            })
            .then(function (response) {

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();

            })
            .then(function (data) {

                var ranWord = data.word;
                input.value = ranWord;
                array.push(ranWord);

            }).then(function () {
                _Fetch.m_address(array, helpBtn, _Game);
            }
            )
        // .catch(function (error) {
        //     console.error('Error:', error);
        
        // });
    })();
    //return array;

}
// Fetch.prototype = Object.create(Game.prototype); }
// Fetch.prototype.constructor = Fetch;             } Om de här radarn är här loggar konsolen 'this.body is undefined  'Game.js:..:..' '

Fetch.prototype.m_address = function (array, helpBtn, _Game) {

    // console.log(_Game)
    if (array.length === 5) {
        var ready = true;
        helpBtn.removeAttribute("disabled")
        helpBtn.innerHTML = "Rotate your phone to start";
        _Game.controllInput(ready);
    }

}