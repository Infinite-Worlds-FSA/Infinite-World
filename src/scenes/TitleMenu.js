class TitleMenu extends Phaser.Scene{
    constructor(){
        super('TitleMenu');
    }

    create(){
        this.add.text(20,20, 'Welcome to Infinite Worlds', {font: '25px Sans-serif', fill: 'yellow'});
    }
};

export default TitleMenu;