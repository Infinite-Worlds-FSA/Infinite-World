class GameOver extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  toggleScoreDisplay(visible) {
    const scoreElement = document.querySelector(".score");
    if (visible) {
      scoreElement.classList.remove("score-hidden");
    } else {
      scoreElement.classList.add("score-hidden");
    }
  }

  create() {
    const spaceBackground = this.add.graphics({
      fillStyle: { color: 0x1a113c },
    });
    spaceBackground.fillRect(
      0,
      0,
      this.cameras.main.width,
      this.cameras.main.height
    );

    const starsOverlay = this.add.graphics({ fillStyle: { color: 0xffffff } });
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * this.cameras.main.width;
      const y = Math.random() * this.cameras.main.height;
      const radius = Math.random() * 2;
      starsOverlay.fillCircle(x, y, radius);
    }

    this.toggleScoreDisplay(false);

    const gameOverText = this.add.text(
      this.game.config.width / 2,
      this.game.config.height / 2 - 50,
      "GAME OVER!",
      { font: "32px staatliches", fill: "#FFD408" }
    );
    gameOverText.setOrigin(0.5);

    const restartText = this.add.text(
      this.game.config.width / 2,
      this.game.config.height / 2 + 50,
      "Restart Level? Click the screen",
      { font: "24px staatliches", fill: "#FFD408" }
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
