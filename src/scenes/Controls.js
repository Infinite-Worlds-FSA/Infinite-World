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
    }};

  toggleLivesDisplay(visible) {
    const livesElement = document.querySelector(".lives");
    if (visible) {
      livesElement.classList.remove("lives-hidden");
    } else {
      livesElement.classList.add("lives-hidden");
    }
  }

  create() {
    const spaceBackground = this.add.graphics({
      fillStyle: { color: 0x1a113c },
    }); // 0x663399 is a dark purple, if the other purple is too dark
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
    this.toggleLivesDisplay(false);

    const title = this.add.text(
      this.cameras.main.width / 2,
      this.cameras.main.height / 4,
      "Controls",
      { font: "80px staatliches", fill: "#FFD408", align: "center" }
    );
    title.setOrigin(0.5, 1.0);

        
        const outerBox = this.add.graphics({ fillStyle: { color: 0xaaaaaa } });
        const outerBoxWidth = 200;
        const outerBoxHeight = 50;
        const outerBoxX = this.cameras.main.width / 2 - outerBoxWidth / 2;
        const outerBoxY = this.cameras.main.height * 7 / 8 - outerBoxHeight / 2; 
        outerBox.fillRect(outerBoxX, outerBoxY, outerBoxWidth, outerBoxHeight);

        const innerBox = this.add.graphics({ fillStyle: { color: 0x777777 } });
        const padding = 5;
        const innerBoxWidth = outerBoxWidth - 2 * padding;
        const innerBoxHeight = outerBoxHeight - 2 * padding;
        const innerBoxX = outerBoxX + padding;
        const innerBoxY = outerBoxY + padding;
        innerBox.fillRect(innerBoxX, innerBoxY, innerBoxWidth, innerBoxHeight);

     
        const keyWidth = 100;
        const keyHeight = 100;
        const keyPadding = 10;
        const centerY = this.cameras.main.height * 9 / 16; 
        const centerXLeft = this.cameras.main.width / 3;
        const centerXRight = this.cameras.main.width * 2 / 3;

        const outerLeftKey = this.add.graphics({ fillStyle: { color: 0xaaaaaa } });
        outerLeftKey.fillTriangle(
            centerXLeft, centerY,
            centerXLeft - keyWidth / 2, centerY - keyHeight / 2,
            centerXLeft - keyWidth / 2, centerY + keyHeight / 2
        );

        const innerLeftKey = this.add.graphics({ fillStyle: { color: 0x777777 } });
        innerLeftKey.fillTriangle(
            centerXLeft, centerY,
            centerXLeft - (keyWidth - keyPadding) / 2, centerY - (keyHeight - keyPadding) / 2,
            centerXLeft - (keyWidth - keyPadding) / 2, centerY + (keyHeight - keyPadding) / 2
        );

        const outerRightKey = this.add.graphics({ fillStyle: { color: 0xaaaaaa } });
        outerRightKey.fillTriangle(
            centerXRight, centerY,
            centerXRight + keyWidth / 2, centerY - keyHeight / 2,
            centerXRight + keyWidth / 2, centerY + keyHeight / 2
        );

        const innerRightKey = this.add.graphics({ fillStyle: { color: 0x777777 } });
        innerRightKey.fillTriangle(
            centerXRight, centerY,
            centerXRight + (keyWidth - keyPadding) / 2, centerY - (keyHeight - keyPadding) / 2,
            centerXRight + (keyWidth - keyPadding) / 2, centerY + (keyHeight - keyPadding) / 2
        );

        const controls = this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "\n\n\nSpacebar to jump\n\n",
            { font: "32px staatliches", fill: "#FFD408", align: "center" }
        )
        controls.setOrigin(0.5, 0.0);

        const controls2 = this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height / 4 + 10,
            "\n\nArrow Keys to move left and right \n\n",
            { font: "32px staatliches", fill: "#FFD408", align: "center" }
        )
        controls2.setOrigin(0.5, 0.3);

        const loadingText = this.add.text(
            10,
            this.cameras.main.height - 30,
            "Loading...",
            { font: "20px staatliches", fill: "#FFD408", align: "center" }
        );
        loadingText.setOrigin(0, 0);

        this.time.delayedCall(3000, () => {
            this.scene.start("Game");
        });
    };
};


export default Controls;
