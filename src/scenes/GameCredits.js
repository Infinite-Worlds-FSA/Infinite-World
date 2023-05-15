class GameCredits extends Phaser.Scene {
    constructor() {
        super("GameCredits");
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
        const spaceBackground = this.add.graphics({ fillStyle: { color: 0x1a113c } }); // 0x663399 is a dark purple, if the other purple is too dark
        spaceBackground.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);

        const starsOverlay = this.add.graphics({ fillStyle: { color: 0xffffff } });
        for (let i = 0; i < 200; i++) { // adjusting this number will change the number of stars
            const x = Math.random() * this.cameras.main.width;
            const y = Math.random() * this.cameras.main.height;
            const radius = Math.random() * 2;
            starsOverlay.fillCircle(x, y, radius);
        };

        this.toggleScoreDisplay(false);

        this.cameras.main.resetFX();

        const creditText = this.add.text(
            this.cameras.main.width / 2,
            -this.cameras.main.height / 4,
            "Infinite Worlds was created by\nJason Ruge\nHussein Aligabi\nVincent Bridger\nAbraham Flores",
            { font: "32px staatliches", fill: "#FFD408", align: "center" }
        );
        creditText.setOrigin(0.5, 0.5);

        const thankYouText = this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height + this.cameras.main.height / 2,
            "Thank you for playing!",
            { font: "32px staatliches", fill: "#FFD408", align: "center" }
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
