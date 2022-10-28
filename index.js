//Getting the list of all buttons with the class "drum"
var buttonList = document.querySelectorAll(".drum");

//BUTTON CLICK DETECTOR
//looping through the list and carrying out a unique action for each button
for (var i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function () {
        playSound(this.textContent);
        animateButton(this.textContent);

    });
}

//KEYBOARD PRESS DETECTOR
document.addEventListener("keydown", function (event) {
    //1. the "event" argument returns the Keyboard Event for the key tapped
    //try: console.log(event)
    //2. the keyboard event is a class which contains an object property called "key", which is what we need.
    /*3. To check if this key is any of the letters we need to play the drum, we pass it to the switch as the key whose 
    value will determne the case to be executed.*/
    playSound(event.key);
    animateButton(event.key);

});

//Unique action for each drum button
function playSound(key) {

    // var drumIdentity = this.textContent

    switch (key) {
        case "w":
        case "W":
            var tom1 = new Audio("assets/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
        case "A":
            var tom2 = new Audio("assets/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
        case "S":
            var tom3 = new Audio("assets/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
        case "D":
            var tom4 = new Audio("assets/sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
        case "J":
            var snare = new Audio("assets/sounds/snare.mp3");
            snare.play();
            break;

        case "k":
        case "K":
            var crash = new Audio("assets/sounds/crash.mp3");
            crash.play();
            break;

        case "l":
        case "L":
            var kickBass = new Audio("assets/sounds/kick-bass.mp3");
            kickBass.play();
            break;

        default:
            console.log(key)
    }
}

//ANIMATION SECTION

function animateButton(key) {
    document.querySelector("." + key).classList.add("pressed");

    //Using the setTimeOut, we are able to add and remove the animation kinda class, hence animating element.
    setTimeout(
        function () { document.querySelector("." + key).classList.remove("pressed"); },
        100);
}

/*
WHEN YOU HAVE FORGOTTEN HOW ADD EVENT LISTENER WORKS
RUN THIS ON YOUR CHROME BROWSER

function anotherAddEventListener(eventType, cfunc){

    var prop = {
        typeOf: "click",
        boolVal: "1001",
        key: "p"
    }

    if (prop.typeOf ===eventType){
        cfunc(prop);
    }
}

function dfunc(eventProp){
    console.log(eventProp.key);
}

anotherAddEventListener("click", dfunc);
 */