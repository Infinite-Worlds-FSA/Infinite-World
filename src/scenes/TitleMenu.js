class TitleMenu extends Phaser.Scene {
  constructor() {
    super("TitleMenu");
  }

    preload() {
        this.load.image('title_menu_background', 'src/assets/img/title_menu_background.png'); //background image not loading for some reason
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
        this.add.image(0,0, 'title_menu_background').setOrigin(0,0).setDisplaySize(this.cameras.main.width, this.cameras.main.height);

        this.toggleScoreDisplay(false);

        const titleText = this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height / 4,
            'Welcome to\nInfinite Worlds',
            { font: '40px staatliches', fill: 'white', align: 'center' }
        );
        titleText.setOrigin(0.5, 0.5);


        const buttonWidth = 200;
        const buttonHeight = 50;
        const x = this.cameras.main.width / 2 - buttonWidth / 2;
        const y = this.cameras.main.height / 2 - buttonHeight / 2 + 100;



    const buttonGraphics = this.add.graphics({
      fillStyle: { color: 0xff0000 },
    });
    buttonGraphics.fillRect(x, y, buttonWidth, buttonHeight);

    const buttonText = this.add.text(
      x + buttonWidth / 2,
      y + buttonHeight / 2,
      "Start Game",
      {
        font: "25px staatliches",
        fill: "black",
      }
    );
    buttonText.setOrigin(0.5, 0.5);

    const startButton = this.add
      .zone(x, y, buttonWidth, buttonHeight)
      .setOrigin(0)
      .setInteractive();
    startButton.on("pointerdown", () => {
      this.toggleScoreDisplay(true);
      this.scene.start("Game");
    });

    startButton.on("pointerover", () => {
      this.game.canvas.style.cursor = "pointer";
    });

    startButton.on("pointerout", () => {
      this.game.canvas.style.cursor = "default";
    });
  }
}

export default TitleMenu;
