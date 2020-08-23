/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/**
 * Game class
 */
class Game {
  // constructor method keps track of our values
  constructor(missed, phrases, activePhrase) {
    this.missed = 1; // amount of times missed
    this.phrases = [
      "This is you",
      "America",
      "Ukraine",
      "Russia",
      "Dmytro",
      "programming",
      "hardware",
      "france",
      "germany",
      "england",
      "java",
      "javascript",
      "website",
      "design",
      "creative",
    ]; // our phrases that are going to be used in a game
    this.activePhrase = null; // active phrase not yet declared as it is not yet generated
  }

  /**
   * `startGame` starts the game and before the game starts resets the variables - images of hearts back to red and missed var back to 1
   */
  startGame() {
    // keyboard
    const keys = document.querySelectorAll(".key");
    [...keys].map((key) => {
      key.classList.remove("wrong", "chosen");
      key.disabled = false;
    });

    // hearts
    const score = document.querySelectorAll("#scoreboard img");
    score.forEach((item) => (item.src = "images/liveHeart.png"));
    this.missed = 0;

    // phrase
    this.activePhrase = new Phrase(game.getRandomPhrase());
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * `getRandomPhrase` gets radom phrase and sets the activePhrase to the random phrase and returns the phrase
   */
  getRandomPhrase() {
    const randomPhrase = Math.floor(Math.random() * this.phrases.length);
    this.activePhrase = this.phrases[randomPhrase];
    return this.phrases[randomPhrase];
  }

  /**
   * `handleInteraction` this is where most of the user interactions with the website takes place
   *
   */
  handleInteraction(e) {
    const key = e.target;
    const li = document.querySelectorAll("#phrase > ul li");
    // checks for the key that has been pressed on the screen keyboard
    if (key.classList == "key") {
      // check the key to the keys in the phrase
      if ([...li].every((list) => list.textContent !== key.textContent)) {
        // the key doesnt exists add the wrong clas to the key letter and removeLife, checkforWin
        key.classList.add("wrong");
        this.removeLife();
        this.missed += 0;
        this.checkForWin(li);
      } else {
        // the key exists then checkLetter and checkForWin
        [...li].map((list) => this.activePhrase.checkLetter(key, list));
        this.checkForWin(li);
      }
    }

    // checks if the overlay is hidden to allow keyboard clicking
    if (document.querySelector("#overlay").style.display == "none") {
      // checks for the key code that has been pressed on the keyboard
      if (e.charCode >= "65" || e.charCode >= "90") {
        // check the key to the keys in the phrase
        if ([...li].every((list) => list.textContent !== e.key)) {
          // the key doesnt exists add the wrong clas to the key letter and removeLife, checkforWin
          const keys = document.querySelectorAll(".key");
          [...keys].map((k) =>
            k.textContent == e.key ? k.classList.add("wrong") : null
          );
          this.removeLife();
        } else {
          // the key exists then checkLetter and checkForWin
          [...li].map((list) =>
            this.activePhrase.checkLetter(e.key.toLowerCase(), list)
          );
          this.checkForWin(li);
        }
      }
    }
  }

  /**
   * `removeLife` changes the heart images when the player presses the wrong key
   */
  removeLife() {
    const score = document.querySelectorAll("#scoreboard img");
    score[score.length - (this.missed + 1)].src = "images/lostHeart.png";
    this.missed += 1;
    // if lost
    if (this.missed === 5) {
      this.gameOver("You Lost");
    }
  }

  /**
   * `checkForWin` checks if the player with the made move has won the game or lost
   */
  checkForWin(li) {
    // if won
    if (
      [...li].every(
        (item) =>
          item.classList.contains("show") || item.classList.contains("space")
      )
    ) {
      this.gameOver("You Won");
    }
  }

  /**
   * `gameOver` restarts the game by calling the startGame method
   */
  gameOver(text) {
    document.querySelector("#overlay").style.display = "";
    const msg = document.querySelector("#game-over-message");
    msg.textContent = text;
    this.startGame();
  }
}
