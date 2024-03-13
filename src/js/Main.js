function Main() {
    this.arr = [];
    var _Main = this;
     
    this.init = function () {

       
        this.InstallationProcedure()
     

        var startBtn = document.getElementById("run_game_btn");
      
        var teamForm = document.getElementById("team");
        var teamName  = localStorage.getItem("teamName");

        var teamExits = false;
        var input = document.getElementById("teamValue");
        if (teamName) {
            teamExits = true;
            teamForm.remove();
    
            }
       
       startBtn.addEventListener("click", function () {
      
            console.log(teamName)
            var inputVal = input.value;
            console.log(inputVal)
            if (teamExits){
            var game = new Game()
            //var game = new Game(_Main.arr);
            //  game.buildGame();
            // _Main.arr.push(game);
            // _Main.cleanArr();
            // console.log(_Main.arr)

            }
        else if (inputVal != ""){
            var teamset = localStorage.setItem("teamName", inputVal)
            var game = new Game()
       }
           else if (inputVal == "") {
                console.log(teamName)
                alert('Please type yourr teams name!')
              } // how not getting (null) err???

              
        })

    }
}

window.addEventListener("load", function () {
    var main = new Main();
    main.init()

});

Main.prototype.m_construct = function (){

}

Main.prototype.cleanArr = function () {
    console.log(this.arr)
}

Main.prototype.InstallationProcedure = function(){

    var _Main = this;
    var installed = false;
    var installBtn = document.getElementById("install");
    this.deferInstallation = null;

    if (!"BeforeInstallPromptEvent" in window){
        alert('Sorry this app can not be insatlled through this browser');
        installBtn.remove()
        return;
    }

    // if (installed){
    //     installBtn.remove()
    // }
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js")
            .then(function (reg) { console.log('sw registered ', reg) })
            .catch(function (error) { console.log('sw not registered ', error) })
     }
    
     window.addEventListener("beforeinstallprompt", function (event){
        event.preventDefault();
        _Main.deferInstallation = event;
        console.log('saved install ev')
     });

     installBtn.addEventListener("click", function(){
        // if (!"BeforeInstallPromptEvent" in window){
        //     alert('Sorry this app can not be insatlled through this browser');
        //     return;
        // }
        if (_Main.deferInstallation) {
            console.log(_Main.deferInstallation);
            _Main.deferInstallation.prompt();
            _Main.deferInstallation.userChoice.then(function(uChoice){
                if (uChoice.outcome == "accepted"){
                    console.log('installing');
                    installed = true;
                    installBtn.remove()
                } else {
                    console.log('canceld')
                }

            });

        }
     })
}


