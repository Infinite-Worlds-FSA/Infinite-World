class TitleMenu extends Phaser.Scene {
    constructor() {
        super('TitleMenu');
    }

    preload() {
        this.load.image('start-button', 'src/assets/img/start-button.png')
    }

    create() {
        this.add.text(20, 20, 'Welcome to Infinite Worlds', { font: '25px Sans-serif', fill: 'black' });

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