/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// declaring a new Game object
const game = new Game();

// start game
const btn = document.querySelector("#btn__reset");
btn.addEventListener("click", game.startGame());

// keyboard
const keyboard = document.querySelector("#qwerty");
keyboard.addEventListener("click", (e) => game.handleInteraction(e));
document.addEventListener("keypress", (e) => {
  game.handleInteraction(e);
});
