class GameOver extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  create() {
    this.cameras.main.setBackgroundColor("#000");

    const gameOverText = this.add.text(
      this.game.config.width / 2,
      this.game.config.height / 2 - 50,
      "GAME OVER!",
      { font: "32px staatliches", fill: "#fff" }
    );
    gameOverText.setOrigin(0.5);

    const restartText = this.add.text(
      this.game.config.width / 2,
      this.game.config.height / 2 + 50,
      "Restart Level? Click the screen",
      { font: "24px staatliches", fill: "#fff" }
    );
    restartText.setOrigin(0.5);

    this.input.on("pointerdown", () => {
      this.scene.start("Game", { levelKey: this.scene.levelKey });
    });

    this.time.delayedCall(4000, () => {
      this.scene.start("GameCredits");
    });
  }
}

export default GameOver;
