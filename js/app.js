/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

// start game
const btn = document.querySelector("#btn__reset");
btn.addEventListener("click", game.startGame());

// keyboard
const keyboard = document.querySelector("#qwerty");

keyboard.addEventListener("click", (e) => game.handleInteraction(e));
