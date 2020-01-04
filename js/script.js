//alert("connected")
let playingScore = 5;
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneButton = document.querySelectorAll("button")[0];
let playerTwoButton = document.querySelectorAll("button")[1];
let resetButton = document.querySelectorAll("button")[2];
let p1Display = document.getElementById("p1Display");
let p2Display = document.getElementById("p2Display");
let numInput = document.querySelector("input");
let playingNumber = document.getElementById("playingScore");
let gameOver = false;

//console.log(playerOneButton);
//console.log(playerTwoButton)
playerOneButton.addEventListener("click", function() {
    if (!gameOver) {
        playerOneScore++;
        if (playerOneScore === playingScore) {
            p1Display.style.color = "green";
            gameOver = true;
        }
        p1Display.textContent = playerOneScore;
    }

});
playerTwoButton.addEventListener("click", function() {
    if (!gameOver) {
        playerTwoScore++;
        if (playerTwoScore === playingScore) {
            p2Display.style.color = "green";
            console.log("Game Over");
            gameOver = true;
        }
        p2Display.textContent = playerTwoScore;
    }
});
resetButton.addEventListener("click", function() {
    playerOneScore = 0;
    playerTwoScore = 0;
    p1Display.textContent = playerOneScore;
    p2Display.textContent = playerTwoScore;
    p1Display.style.color = "#000";
    p2Display.style.color = "#000";
    gameOver = false;
});
numInput.addEventListener("change", function() {
    playingScore = Number(numInput.value);
    playingNumber.textContent = "Playing score : " + numInput.value;
    playerOneScore = 0;
    playerTwoScore = 0;
    p1Display.textContent = playerOneScore;
    p2Display.textContent = playerTwoScore;
    p1Display.style.color = "#000";
    p2Display.style.color = "#000";
    gameOver = false;
});