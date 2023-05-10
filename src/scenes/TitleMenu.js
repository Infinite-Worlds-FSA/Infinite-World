class TitleMenu extends Phaser.Scene {
    constructor() {
        super('TitleMenu');
    }

    preload() {
        this.load.image('start-button', 'src/assets/img/start-button.png')
    }

    toggleScoreDisplay(visible){
        const scoreElement = document.querySelector('.score');
        if (visible) {
            scoreElement.classList.remove('score-hidden');
        } else {
            scoreElement.classList.add('score-hidden');
        }
    }

    create() {
        this.toggleScoreDisplay(false);

        const titleText = this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height / 4,
            'Welcome to Infinite Worlds',
            { font: '25px Sans-serif', fill: 'black' }
        );
        titleText.setOrigin(0.5, 0.5);

        // this is the button, png files were not working for some reason

        const buttonWidth = 200;
        const buttonHeight = 50;
        const x = this.cameras.main.width / 2 - buttonWidth / 2;
        const y = this.cameras.main.height / 2 - buttonHeight / 2;

        const buttonGraphics = this.add.graphics({ fillStyle: { color: 0xFF0000 } }); 
        buttonGraphics.fillRect(x, y, buttonWidth, buttonHeight);

        const buttonText = this.add.text(x + buttonWidth / 2, y + buttonHeight / 2, 'Start Game', {
            font: '20px Sans-serif',
            fill: 'black',
        });
        buttonText.setOrigin(0.5, 0.5);

        const startButton = this.add.zone(x, y, buttonWidth, buttonHeight).setOrigin(0).setInteractive();
        startButton.on('pointerdown', () => {
            this.toggleScoreDisplay(true); // Show the score
            this.scene.start('Game');
        });

        // adds hover effect over the button

        startButton.on('pointerover', () => { 
            this.game.canvas.style.cursor = 'pointer';
        });

        startButton.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default';
        });
    }
};

export default TitleMenu;