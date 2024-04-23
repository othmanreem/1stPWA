/**
 * 
 * Main klassen
 */

function Main() {

}
/**
 * Händelse hanterare som lyssner på window objektet och skapar en Main instans när window har laddat
 */
window.addEventListener("load", function () {
    var main = new Main();
    main.init()

});
/**
 * Mains kondtroktor 
 */
Main.prototype.m_construct = function () {

}
/**
 * Menad att befria minnet från skapade objekten
 */
Main.prototype.cleanArr = function () {

}
/**
 *Registrerar en service worker om aktuell webbläsare supportar service workers, skapar referens för nödvändiga DOM element, en if sats för att kontrollerar om teamName existerar redan, en event listener för Startknappen och som kontrollerar teamExits, inputfältet för teamName och instansierar Game
 * 
 */
Main.prototype.init = function () {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js")
    .then(function (reg) { /* console.log('sw registered ', reg) */})
            .catch(function (error) { console.log('sw not registered ', error) })
    }

    var startBtn = document.getElementById("run_game_btn");
    var teamForm = document.getElementById("team");
    var input = document.getElementById("teamValue");
    var teamName = localStorage.getItem("teamName");
    var teamExits = false;

    if (teamName) {
        teamExits = true;
        teamForm.remove();
    }

    startBtn.addEventListener("click", function () {
        var inputVal = input.value;
        if (teamExits) {
            var game = new Game()
        }
        else if (inputVal != "") {
            var teamset = localStorage.setItem("teamName", inputVal)
            var game = new Game()
        }
        else if (inputVal == "") {
            alert('Please type your teams name!')
        }
    });
    // menad att ta bort teamName från lokal lagring efter 15 dagar så att användaren kan ange ett nytt namn
    if (localStorage.getItem("teamName")) {
        setTimeout(function () {
            localStorage.removeItem("teamName");
        }, 360 * 60 * 60 * 1000);
    }
    //30 * 24 * 60 * 60 * 1000
}