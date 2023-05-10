class GameCredits extends Phaser.scene{
    constructor(){
        super('GameCredits');
    }

    create(){
        this.add.text(20,20, 'Infinite Worlds was created by, Jason Rouge, Hussein Aligabi, Vincent Bridger, and Abraham Flores');
    }

};

export default GameCredits;