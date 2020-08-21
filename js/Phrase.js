/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const ul = document.querySelector("#phrase > ul");
    ul.innerHTML = "";
    for (let i = 0; i < this.phrase.length; i++) {
      const li = document.createElement("li");

      if (this.phrase[i] !== " ") {
        li.classList.add("hide");
        li.classList.add("letter");
        li.classList.add(this.phrase[i]);
        li.textContent = this.phrase[i];
      } else {
        li.classList.add("space");
      }
      ul.appendChild(li);
    }
  }

  checkLetter(key, list) {
    if (key.textContent == list.textContent) {
      key.classList.add("chosen");
      this.showMatchedLetter(list);
    }
  }

  showMatchedLetter(list) {
    list.classList.remove("hide");
    list.classList.add("show");
  }
}
