/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// declaring a new Game object
const game = new Game();

// start game
const btn = document.querySelector("#btn__reset");

// event listener on btn
btn.addEventListener("click", () => {
  document.querySelector("#overlay").style.display = "none"; // hide the overlay when the start game btn is pressed
  game.startGame();
});

// event listener on enter key press
document.addEventListener("keypress", (e) => {
  // check if overlay is hidden to allow enter key press
  if (document.querySelector("#overlay").style.display == "") {
    if (e.key == "Enter") {
      document.querySelector("#overlay").style.display = "none"; // hide the overlay when the start game btn is pressed
      game.startGame();
    }
  }
});

// keyboard
const keyboard = document.querySelector("#qwerty");
keyboard.addEventListener("click", (e) => game.handleInteraction(e));
document.addEventListener("keypress", (e) => {
  game.handleInteraction(e);
});
