
// {"src": "/img/icon/icon96.png",
        // "type": "image/png",
        // "sizes": "96x96"},

        // {"src": "/img/icon/icon128.png",
        // "type": "image/png",
        // "sizes": "128x128"},

        // {"src": "/img/icon/icon144.png",
        // "type": "image/png",
        // "sizes": "144x144"},

        // {"src": "/img/icon/icon152.png",
        // "type": "image/png",
        // "sizes": "152x152"},

        // {"src": "/img/icon/icon192.png",
        // "type": "image/png",
        // "sizes": "192x192"},

        // {"src": "/img/icon/icon384.png",
        // "type": "image/png",
        // "sizes": "384x384"},

        // {"src": "/img/icon/icon512.png",
        // "type": "image/png",
        // "sizes": "512x512"}


/** GAME */


function Game() {
    var self = this;

    // var previousHTML = document.body.innerHTML;
    // this.body = document.getElementById("body");
    // this.script = document.createElement("script");
    // this.script.setAttribute("src", "VPJsOOP.js");
    // body.appendChild(this.script);


    this.buildGame = function () {

        body.innerHTML = "";
        var form = document.createElement("form");
        body.appendChild(form);
        form.setAttribute("id", "input_form");
        for (var i = 0; i < 5; i++) {
            var inputElem = document.createElement("input");
            inputElem.setAttribute("placeholder", "Type a word");
            inputElem.setAttribute("type", "text");
            inputElem.setAttribute("class", "input");
            form.appendChild(inputElem)

        }



        this.helpBtn = document.createElement("button");
        this.txt = document.createTextNode("Get Words")
        this.helpBtn.appendChild(this.txt);
        this.helpBtn.setAttribute("id", "help");
        this.helpBtn.setAttribute("type", "button");
        form.appendChild(this.helpBtn);

        var inputs = document.getElementsByClassName("input");
        var arr = [];
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i].value;
            // console.log(input.value)

            inputs[i].addEventListener("blur", function () {
                console.log(arr.length)
                console.log(arr)
                 console.log(this.value)
                if (this.value !== "") {
                    arr.push(this.value);
                    console.log(arr)
                    //var storeArr = localStorage.setItem("arr", arr);
                // self.controllInput(self.helpBtn, arr, self);
                } 
                if (arr.length === 5 ) {
                    console.log(arr);
                    self.next(self.helpBtn, arr, self);
                   // checkInputs(arr, form, self)
            //    self.helpBtn.innerHTML = "Start Now";
            //    self.controllInput(self.helpBtn, arr, self)
           } })


            inputs[i].addEventListener("focus", function () {
                console.log(arr)
                console.log(arr.length)
                console.log(this.value)
                var ix = arr.indexOf(this.value)
                console.log(this.value)
                if (ix !== -1) {
                    arr.splice(ix, 1);
                    // self.controllInput(self.helpBtn,arr, form);

                }
            })

            inputs[i].addEventListener("input", function () {
             console.log(arr.length)
            // console.log("inputstart")
                // if (this.value != ""  && arr.length === 5) {
                //  console.log('not empty')
                //     self.helpBtn.innerHTML = "Start Now"
                //     self.controllInput(self.helpBtn, arr)
                    
                //   //  self.link(self.helpBtn, form);
                //   // self.controllInput(self.helpBtn, arr)
                //  }    else 
                if (this.value === ""){
                    console.log('empty')

                    self.helpBtn.innerHTML = "Get Words";
                }
            })



        }

        this.helpBtn.addEventListener("click", function () {
            checkInputs.call(this, arr, form, self)
        })




    }
  

    var checkInputs = function (array, form, self) {
        var helpBtn = this;
        var inputs = document.getElementsByClassName("input");
        for (var i = 0; i < inputs.length; i++) {
            var value = inputs[i].value;
            console.log(value)

            if (value === "") {

               var fetch = new Fetch(helpBtn ,array, inputs[i], self, self.body)
            

                /* var empty = inputs[i];
                  ( function(input) {
     
             // var value = input.value;
            
              fetch('index.json')
                 .then( function (response) {
                     if (!response.ok) {
                         throw new Error('Network response was not ok');
                     }
                     return response.json();
                     
                 })
                 .then( function (data)  {
                     var arr = data.words;
                     var ranIx = Math.floor(Math.random() * arr.length);
                     var ranWord = arr[ranIx];
                     input.value = ranWord;
                     array.push(ranWord);
                     console.log(array);
                    // self.link(helpBtn, form);
                   
                  
                     
                  })//.then(function(){
                 //  //   self.controllInput(helpBtn, array, form);
                 //  if (arr.length < 5) {
                 //     console.log('KÖR INTE')
                 //     helpBtn.innerHTML = "Get Words";
                 // }  else if(arr.length === 5){
                 //     helpBtn.innerHTML = "Start Now";
                 //     self.controllInput(helpBtn, array, form)
     
                 // }
                 // })
                 .catch( function (error)  {
                     //console.error('Fetch error:', error);
                 });
             } 
         )(empty);*/

            } 

        }
       
    }

   




this.link = function (helpBtn, form) {

    alert("loo");
    if (helpBtn.innerHTML === "Get Words") {

        return;

    } else {
        ;
        var aElem = document.createElement("a");
        aElem.setAttribute("href", "round.html");
        aElem.setAttribute("id", "new_page");
        form.appendChild(aElem);
        aElem.appendChild(helpBtn);
        console.log('ikln,m')

        /* helpBtn.addEventListener("click", function (){
             var round = new Round(getArr);
      
            /* if (this.innerHTML === "Get Words"){
                 return
             }  else  if (this.innerHTML === "Start Now") {
                 var round = new Round(getArr);
      
             }
         }) */
    }


}

}

Game.prototype.controllInput = function (helpBtn, array, self, body) {
    console.log("KÖR");
   
    console.log(array)
    if (helpBtn.innerHTML === "Start Now"){
        console.log("...");

        //self.next(helpBtn)
        helpBtn.addEventListener("click", function(event){
            console.log('WORK')
            console.log(body);
            var round = new Round(body);
           })
        
  
}
    // console.log(array);
 //   console.log(helpBtn);
    
    // if (arr.length < 5){
    //     console.log("KÖR INTE");

    // } else if  (arr.length === 5){
    //     console.log("KÖR");

    // }


    // helpBtn.addEventListener("click", function (){
    //     var round = new Round();

    // }) 

    //   }



    //  if (arr.length === 5){
    //     console.log("KÖR INTE");
    //     return helpBtn.innerHTML = "Get Words";
    // } else if(arr.length === 5){

    //  helpBtn.innerHTML = "";
    //helpBtn.innerHTML = "Start Now";
    //  var storeArr = localStorage.setItem("arr",arr);

    // var getArr = localStorage.getItem("arr")




}
Game.prototype.next = function(helpBtn, array, self){
    helpBtn.innerHTML= "Start Now";
    this.controllInput(helpBtn, array, self)

}


/** GAME */


/*** GAME 62 - 104*/

//     for (var i = 0; i < inputs.length; i++) {
//       //  var input = inputs[i].value;

//       inputs[i].addEventListener("focus", function () {
          
//         var ix = arr.indexOf(this.value)
//         this.value = "";
//         self.helpBtn.innerHTML = "Get Words"
//         if (ix !== -1) {
//             arr.splice(ix, 1);

//         }
        
//     })
//      inputs[i].addEventListener("keypress", function (event) {
       
//        if (event.key === "Enter") {
//         event.preventDefault();
//         this.blur();
//     }
//   })

//         inputs[i].addEventListener("blur", function () {
//             if (this.value !== "" ) {
//                 arr.push(this.value);
//                 console.log(this.value )
//             }
//             if (arr.length === 5) {
//                   self.helpBtn.innerHTML = "Start Now";
//                    self.controllInput(self.helpBtn, arr, self)
//             }
//         })




//     }

//     this.helpBtn.addEventListener("click", function () {
//         // self.checkInputs( arr, form, self) /**/
//         self.checkInputs.call(this, arr, form, self)
//     })

 /**  GAME */


      /**  GAME 77-117 */


            /* var empty = inputs[i];
              ( function(input) {
 
         // var value = input.value;
        
          fetch('index.json')
             .then( function (response) {
                 if (!response.ok) {
                     throw new Error('Network response was not ok');
                 }
                 return response.json();
                 
             })
             .then( function (data)  {
                 var arr = data.words;
                 var ranIx = Math.floor(Math.random() * arr.length);
                 var ranWord = arr[ranIx];
                 input.value = ranWord;
                 array.push(ranWord);
                 console.log(array);
                // self.link(helpBtn, form);
               
              
                 
              })//.then(function(){
             //  //   self.controllInput(helpBtn, array, form);
             //  if (arr.length < 5) {
             //     console.log('KÖR INTE')
             //     helpBtn.innerHTML = "Get Words";
             // }  else if(arr.length === 5){
             //     helpBtn.innerHTML = "Start Now";
             //     self.controllInput(helpBtn, array, form)
 
             // }
             // })
             .catch( function (error)  {
                 //console.error('Fetch error:', error);
             });
         } 
     )(empty);*/

     /*** GAME */



     /*** GAME 89-118 */

     Game.prototype.link = function (helpBtn, form) {

        alert("loo");
        if (helpBtn.innerHTML === "Get Words") {
    
            return;
    
        } else {
            ;
            var aElem = document.createElement("a");
            aElem.setAttribute("href", "round.html");
            aElem.setAttribute("id", "new_page");
            form.appendChild(aElem);
            aElem.appendChild(helpBtn);
            console.log('ikln,m')
    
            /* helpBtn.addEventListener("click", function (){
                 var round = new Round(getArr);
          
                /* if (this.innerHTML === "Get Words"){
                     return
                 }  else  if (this.innerHTML === "Start Now") {
                     var round = new Round(getArr);
          
                 }
             }) */
        }
    
    
    }

    /** GAME */

    /** GAME 97-117*/

    // console.log("...");
        // if (window.DeviceOrientationEvent){
        //     console.log("...");
        //     window.addEventListener("deviceorientation", function (event){
        //         event.preventDefault();
        //         console.log("...");
        //         var leftToRight = event.gamma;
        //         console.log(leftToRight)
        //         console.log("...");
        //     }, true)

        // }
        // console.log("...");

        // //self.next(helpBtn)
        // helpBtn.addEventListener("click", function(event){
        //     console.log('WORK') /* problem /
            // console.log(body);
            // var round = new Round(body);
          // })
/**  GAME*/

/**  GAME 100-130*/

 // console.log(array);
    //   console.log(helpBtn);

    // if (arr.length < 5){
    //     console.log("KÖR INTE");

    // } else if  (arr.length === 5){
    //     console.log("KÖR");

    // }


    // helpBtn.addEventListener("click", function (){
    //     var round = new Round();

    // }) 

    //   }



    //  if (arr.length === 5){
    //     console.log("KÖR INTE");
    //     return helpBtn.innerHTML = "Get Words";
    // } else if(arr.length === 5){

    //  helpBtn.innerHTML = "";
    //helpBtn.innerHTML = "Start Now";
    //  var storeArr = localStorage.setItem("arr",arr);

    // var getArr = localStorage.getItem("arr")

    /** GAME */

     /** GAME */