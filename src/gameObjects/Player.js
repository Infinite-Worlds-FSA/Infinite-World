import decreaseLife from "../ui/decreaseLife";

class Player {
    static livesCount = 3;
    constructor(scene, x, y) {
    const useDeadZone = false;

    this.scene = scene;

    this.isDed = false;
    this.decreaseLifeHandler = new decreaseLife();

    this.gameOverScene = scene.scene.get("GameOver");

    this.sprite = scene.physics.add.sprite(x, y, "zombie").setScale(2);

    this.sprite.setCollideWorldBounds(true);
    this.sprite.isDed = false;

    scene.cameras.main
      .setBounds(0, 0, scene.map.widthInPixels, scene.map.heightInPixels)
      .startFollow(this.sprite);

    if (useDeadZone) {
      scene.cameras.main.setDeadzone(
        scene.game.config.width / 4,
        scene.game.config.height
      );
    }

    return this;
  }

  collideWith(gameObject) {
    this.collider = this.scene.physics.add.collider(this.sprite, gameObject);

    return this;
  }

  reFollowPlayer() {
    this.scene.physics.world.bounds.setPosition(
      this.scene.cameras.main.worldView.x,
      0
    );

    if (
      this.sprite.body.position.x + this.sprite.body.width / 2 >
        this.scene.cameras.main.midPoint.x &&
      !this.scene.cameras.main._follow
    ) {
      this.scene.cameras.main.startFollow(this.sprite);
    }
  }

  update(input) {
    if (input.left.isDown) {
      this.sprite.setVelocityX(-200).setFlipX(true);
      this.sprite.body.onFloor() &&
        !this.sprite.isDed &&
        this.sprite.play("run", true);

      this.scene.cameras.main.stopFollow(this.sprite);
    } else if (input.right.isDown) {
      this.sprite.setVelocityX(200).setFlipX(false);
      this.sprite.body.onFloor() &&
        !this.sprite.isDed &&
        this.sprite.play("run", true);

      this.reFollowPlayer();
    } else {
      this.sprite.setVelocityX(0);
      this.sprite.body.onFloor() &&
        !this.sprite.isDed &&
        this.sprite.play("idle", true);
    }

    if (input.space.isDown && this.sprite.body.onFloor()) {
      this.sprite.setVelocityY(-350);
      this.sprite.play("jump", true);
    }
  }
  

  loseLife() {
    Player.livesCount--;
    console.log('Line 86',Player.livesCount);
    if(Player.livesCount === 0) {
      setTimeout(() => {
        this.scene.scene.start("GameOver");
      }, 2000);
      
    }
    
    this.decreaseLifeHandler.decreaseLife();
    setTimeout(() => {
      this.scene.scene.restart();
    }, 2000);
  }

  die() {
    this.sprite.isDed = true;
    this.sprite.play("die", true);
    this.sprite.setVelocity(0, -350);
    this.sprite.setCollideWorldBounds(false);

    this.loseLife();
  }
}

export default Player;
