class GameCredits extends Phaser.Scene {
  constructor() {
    super("GameCredits");
  }

  create() {
    this.cameras.main.resetFX();
    this.cameras.main.setBackgroundColor(0x000000);

    const creditText = this.add.text(
      this.cameras.main.width / 2,
      -this.cameras.main.height / 4,
      "Infinite Worlds was created by\nJason Ruge\nHussein Aligabi\nVincent Bridger\nAbraham Flores",
      { font: "32px staatliches", fill: "#ffffff", align: "center" }
    );
    creditText.setOrigin(0.5, 0.5);

    const thankYouText = this.add.text(
      this.cameras.main.width / 2,
      this.cameras.main.height + this.cameras.main.height / 2,
      "Thank you for playing!",
      { font: "32px staatliches", fill: "#ffffff", align: "center" }
    );
    thankYouText.setOrigin(0.5, 0.5);

    this.tweens.add({
      targets: creditText,
      y: this.cameras.main.height / 4,
      duration: 5000,
      ease: "Linear",
      onComplete: () => {
        this.tweens.add({
          targets: thankYouText,
          y: this.cameras.main.height / 2,
          duration: 3000,
          ease: "Linear",
        });
      },
    });
  }
}

export default GameCredits;
