class GameCredits extends Phaser.Scene {
  constructor() {
    super("GameCredits");
  }

  create() {
    const creditText = this.add.text(
        this.cameras.main.width / 2,
        this.cameras.main.height / 4,
      "Infinite Worlds was created by, Jason Rouge, Hussein Aligabi, Vincent Bridger, and Abraham Flores",
      { font: '25px Sans-serif', fill: 'black', wordWrap: { width: 450 } }
    );
    creditText.setOrigin(0.5, 0.5);

    const thankYouText = this.add.text(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
      "Thank you for playing!",
      { font: '25px Sans-serif', fill: 'black' }
    );
    thankYouText.setOrigin(0.5, 0.5);
  }
}

export default GameCredits;
