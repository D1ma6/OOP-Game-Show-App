/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 1;
    this.phrases = ["This is you", "America", "Ukraine", "Russia", "Dmytro"];
    this.activePhrase = null;
  }

  startGame() {
    btn.addEventListener("click", () => {
      document.querySelector("#overlay").style.display = "none";
    });
    // keyboard
    const keys = document.querySelectorAll(".key");

    [...keys].map((key) => {
      key.classList.remove("wrong");
      key.classList.remove("chosen");
      key.disabled = false;
    });
    // hearts
    const score = document.querySelectorAll("#scoreboard img");
    score.forEach((item) => (item.src = "images/liveHeart.png"));
    this.missed = 1;

    // phrase
    this.activePhrase = new Phrase(game.getRandomPhrase());
    this.activePhrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
    const randomPhrase = Math.floor(Math.random() * this.phrases.length);
    this.activePhrase = null;
    this.activePhrase = this.phrases[randomPhrase];
    return this.phrases[randomPhrase];
  }

  handleInteraction(e) {
    const key = e.target;

    const li = document.querySelectorAll("#phrase > ul li");
    if (key.classList == "key") {
      if ([...li].every((list) => list.textContent !== key.textContent)) {
        key.classList.add("wrong");
        this.removeLife();
        this.missed += 1;
        this.checkForWin(li);
      } else {
        for (let i = 0; i < li.length; i++) {
          const list = li[i];
          this.activePhrase.checkLetter(key, list);
        }
        this.checkForWin(li);
      }
    }
  }

  removeLife() {
    const score = document.querySelectorAll("#scoreboard img");
    score[score.length - this.missed].src = "images/lostHeart.png";
  }

  checkForWin(li) {
    console.log(this.missed);
    if (
      [...li].every(
        (item) =>
          item.classList.contains("show") || item.classList.contains("space")
      )
    ) {
      this.gameOver("You Won");
    }
    if (this.missed === 6) {
      this.gameOver("You Lost");
    }
  }

  gameOver(text) {
    document.querySelector("#overlay").style.display = "";
    const msg = document.querySelector("#game-over-message");
    msg.textContent = text;
    this.startGame();
  }
}
