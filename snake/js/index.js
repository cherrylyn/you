var randomNumber;
var guess;

function initGame() {
    input_txt.value = "";

    document.getElementById("input_txt").focus();

    document.getElementById("input_txt").disabled = false;
    document.getElementById("guess_btn").disabled = false;
    document.getElementById("playAgain_btn").disabled = true;

    document.getElementById("message_txt").innerHTML = "Choose a number between 1 and 100.";

    randomNumber = Math.ceil(Math.random() * 100);

    var input = document.getElementById("input_txt");

    input.onkeypress = function (e) {
        e = e || window.event;
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
            var charCode = (typeof e.which === "undefined") ? e.keyCode : e.which;
            if (charCode && !/\d/.test(String.fromCharCode(charCode))) {
                return false;
            }
        }
    }
}

function limitText(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    } else {
        limitCount.value = limitNum - limitField.value.length;
    }
}

function guessNumber() {
    guess = document.getElementById("input_txt").value;

    document.getElementById("input_txt").focus();

    if (guess === "") {
        document.getElementById("message_txt").innerHTML = "0 is too low. Try again!";
    } else if (guess > randomNumber) {
        document.getElementById("message_txt").innerHTML = guess + " is too high. Try again!";
        input_txt.value = "";
    } else if (guess < randomNumber) {
        document.getElementById("message_txt").innerHTML = guess + " is too low. Try again!"
        input_txt.value = "";
    } else {
        document.getElementById("message_txt").innerHTML = "Great guessing! The number is " + guess + ".";
        input_txt.value = "";

        endGame();
    }
}

function endGame() {
    document.getElementById("input_txt").disabled = true;
    document.getElementById("guess_btn").disabled = true;
    document.getElementById("playAgain_btn").disabled = false;
}

function playAgain() {
    initGame();
}

window.onload = initGame;