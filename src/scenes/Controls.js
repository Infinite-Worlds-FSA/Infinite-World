class Controls extends Phaser.Scene {
  constructor() {
    super("Controls");
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

    const title = this.add.text(
      this.cameras.main.width / 2,
      this.cameras.main.height / 4,
      "Controls",
      { font: "80px staatliches", fill: "#FFD408", align: "center" }
    );
    title.setOrigin(0.5, 1.0);

    const controls = this.add.text(
      this.cameras.main.width / 2,
      this.cameras.main.height / 4,
      "\n\nArrow Keys to move left and right \n<=  =>\nSpacebar to jump \n[___]\n\n",
      { font: "32px staatliches", fill: "#FFD408", align: "center" }
    );
    controls.setOrigin(0.5, 0.0);

    const loadingText = this.add.text(
      10,
      this.cameras.main.height - 30,
      "Loading...",
      { font: "20px staatliches", fill: "#FFD408", align: "center" }
    );
    loadingText.setOrigin(0, 0);

    this.time.delayedCall(6000, () => {
      this.scene.start("Game");
    });
  }
}

export default Controls;
