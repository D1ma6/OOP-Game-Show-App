/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * `addPhraseToDisplay` creates a html for the phrase and adds it to the DOM
   */
  addPhraseToDisplay() {
    const ul = document.querySelector("#phrase > ul");
    ul.innerHTML = "";
    for (let i = 0; i < this.phrase.length; i++) {
      const li = document.createElement("li");
      if (this.phrase[i] !== " ") {
        li.classList.add("hide", "letter", this.phrase[i]);
        li.textContent = this.phrase[i];
      } else {
        li.classList.add("space");
      }
      ul.appendChild(li);
    }
  }

  /**
   * `checkLetter` checks for the letter is the letter is in the phrase then adds class chosen to the screen keyboard if not then adds wrong class
   */
  checkLetter(key, list) {
    // if letter is in the phrase
    if (key.textContent == list.textContent) {
      key.classList.add("chosen");
      this.showMatchedLetter(list);
    }
    // if letter is not in the phrase
    if (key == list.textContent) {
      const keys = document.querySelectorAll(".key");
      [...keys].map((k) =>
        k.textContent == key ? k.classList.add("chosen") : null
      );
      this.showMatchedLetter(list);
    }
  }

  /**
   * `showMatchedLetter` shows matched letter by removing/adding classes
   */
  showMatchedLetter(list) {
    list.classList.remove("hide");
    list.classList.add("show");
  }
}
