import increaseScore from "../ui/increaseScore";

class Goomba {
  constructor(scene) {
    this.scene = scene;
    this.goombas = this.scene.physics.add.group();
    this.collider = this.scene.physics.add.collider(
      this.scene.player.sprite,
      this.goombas,
      this.handlePlayerGoombaCollision,
      null,
      this
    );

    const goombaObjects = this.scene.map.getObjectLayer("goomba").objects;

    for (const goomba of goombaObjects) {
      this.goombas
        .create(goomba.x, goomba.y - goomba.height, "goomba")
        .setScale(1.5)
        .setOrigin(0)
        .setDepth(-1);
    }

    for (const goomba of this.goombas.children.entries) {
      goomba.direction = "RIGHT";
      goomba.isDed = false;
    }
  }

  collideWith(gameObject) {
    this.scene.physics.add.collider(this.goombas, gameObject);

    return this;
  }

  update() {
    for (const goomba of this.goombas.children.entries) {
      if (goomba.body.blocked.right) {
        goomba.direction = "LEFT";
      }

      if (goomba.body.blocked.left) {
        goomba.direction = "RIGHT";
      }

      if (goomba.direction === "RIGHT") {
        goomba.setVelocityX(100);
      } else {
        goomba.setVelocityX(-100);
      }

      !goomba.isDed && goomba.play("goombaRun", true);
    }
  }

  handlePlayerGoombaCollision(playerSprite, goomba) {
    if (this.scene.player.sprite.body.touching.down) {
      this.scene.player.die();
    } else {
      for (const goomba of this.goombas.children.entries) {
        if (goomba.body.touching.up) {
          this.die(goomba);
        }
      }
      setTimeout(() => {
        this.scene.scene.start("GameOver");
      }, 1500);
    }
  }

  die(goomba) {
    goomba.isDed = true;
    goomba.play("goombaDie", true);
    goomba.on("animationcomplete", () => goomba.destroy());

    increaseScore(0.5);

    this.scene.player.sprite.setVelocity(0, -350);
    this.scene.player.sprite.play("jump");
  }
}

export default Goomba;
