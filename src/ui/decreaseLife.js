class decreaseLife {
  constructor() {}
  decreaseLife() {
    const livesElement = document.getElementsByClassName("num-lives")[0];
    const currentLives = parseInt(livesElement.innerText);

    if (currentLives > 0) {
      livesElement.innerText = currentLives - 1;
    }
  }
}
export default decreaseLife;
