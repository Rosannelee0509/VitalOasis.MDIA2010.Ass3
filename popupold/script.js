
function ChangeWord1() {

document.getElementById('Initial').innerHTML = "Welcome to the new era where you can achieve perfect health."

}

function PopupA() {

mywindow = window.open("popupA.html", "mywindow", "location=1,status=1,scrollbars=1, width=600,height=700");
mywindow.moveTo(10,10)

}

function playAudio2() {

var Audio = document.getElementById("Audio2");
if (Audio.paused) {
        Audio.play();
        Audio.volume = 1;
    } else {
        Audio.pause();
    }

}

function ChangeWord2() {

document.getElementById('Insurance').innerHTML = "This is a mandatory adjustment for optimising your health based on your bio-data. It cannot be undone."

}

function playAudio1() {

var Audio = document.getElementById("Audio1");
if (Audio.paused) {
        Audio.play();
        Audio.volume = 1.5;
    } else {
        Audio.pause();
    }

}

function changeBackground() {
    document.getElementById("background1").style.background = "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1)"


}

function changeBackground2() {
    document.getElementById("background2").style.background = "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1)"


}

function playAudio3() {

var Audio = document.getElementById("Audio3");
if (Audio.paused) {
        Audio.play();
        Audio.volume = 1.5;
    } else {
        Audio.pause();
    }

}



function ChangeWord3() {

document.getElementById('heartrate').innerHTML = "Optimal range detected. No further actions required."

}
function ChangeWord4() {

document.getElementById('hydration').innerHTML = "hydration level low.further actions required."

}
function ChangeWord5() {

document.getElementById('glucose').innerHTML = "glucose level low.further actions required."

}
function ChangeWord6() {

document.getElementById('bloodpressure').innerHTML = "Optimal range detected. No further actions required."

}
function ChangeWord7() {

document.getElementById('iron').innerHTML = "Iron level low.further actions required."

}

function ChangeWord8() {

document.getElementById('overall').innerHTML = "<b>Health is not at optimal level.</b> <br> Lifestyle changes are required. A curated plan has been created. Please follow the plan to improve your health, it includes dietary requirements, mandatory step count, and hydration daily requirements. Restrictions on access to food services are activated, you are not allowed to purchase any food items that are not on the curated plan after 5pm. Restrictions would be lifted after glucose and hydration levels are within optimal range."

}
