/**
 * 
 * Fetch klassen
 */
function Fetch() {

    this.m_construct()

}

Fetch.prototype = Object.create(Game.prototype);
Fetch.prototype.constructor = Fetch;

Fetch.prototype.m_construct = function () {

}
/**
 * 
 * @param {HTMLElement} helpBtn 
 * @param {array} array
 * @param {HTMLElement} input 
 * @param {object} _Game 
 * 
 * Fetcher ett slumpmässigt ord för varje tumt inputfält, avaktiverar helpBtn under fetch tiden så att användaren inte ska kunna göra mer än en begäran samtidigt, pushar ordet till arr och sist anropar metoden m_address
 */
Fetch.prototype.fetch = function (helpBtn, array, input, _Game) {
    var _Fetch = this;

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


}
/**
 * 
 * @param {array} array 
 * @param {HTMLElement} helpBtn 
 * @param {object} _Game 
 * 
 * kontrollera om array.length är lika med 5, vilket är samma array som _Game.arr, om sant sätter variabeln ready till true och skickar den som parameter när controllInput anropas
 */
Fetch.prototype.m_address = function (array, helpBtn, _Game) {
    if (array.length === 5) {
        var ready = true;
        helpBtn.removeAttribute("disabled")
        helpBtn.innerHTML = "Rotate your phone to start";
        this.controllInput(ready, _Game)
        // _Game.controllInput(ready);
    }

}