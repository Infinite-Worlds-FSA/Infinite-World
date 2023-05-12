export default (scene) => {
  scene.anims.create({
    key: "run",
    frames: scene.anims.generateFrameNames("atlas", {
      prefix: "sprite-atlas_",
      start: 1,
      end: 3,
    }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: "idle",
    frames: [{ key: "atlas", frame: "sprite-atlas_0" }],
    frameRate: 10,
  });

  scene.anims.create({
    key: "jump",
    frames: [{ key: "atlas", frame: "sprite-atlas_4" }],
    frameRate: 10,
  });

  scene.anims.create({
    key: "die",
    frames: [{ key: "atlas", frame: "sprite-atlas_5" }],
    frameRate: 10,
  });

  // scene.anims.create({
  //   key: "idle",
  //   frames: scene.anims.generateFrameNames("zombie", {
  //     prefix: "zombie ",
  //     start: 0,
  //     end: 4,
  //     zeroPad: 1,
  //   }),
  //   frameRate: 10,
  //   repeat: -1,
  // });
  // scene.anims.create({
  //   key: "run",
  //   frames: scene.anims.generateFrameNames("zombie", {
  //     prefix: "zombie ",
  //     start: 5,
  //     end: 8,
  //     zeroPad: 1,
  //   }),
  //   frameRate: 10,
  //   repeat: -1,
  // });

  // scene.anims.create({
  //   key: "jump",
  //   frames: [{ key: "zombie", frame: "zombie_9" }],
  //   frameRate: 10,
  // });

  // scene.anims.create({
  //   key: "die",
  //   frames: scene.anims.generateFrameNames("zombie", {
  //     prefix: "zombie ",
  //     start: 10,
  //     end: 11,
  //     zeroPad: 1,
  //   }),
  //   frameRate: 10,
  //   repeat: -1,
  // });

  // Goomba
  scene.anims.create({
    key: "goombaRun",
    frames: scene.anims.generateFrameNames("atlas", {
      prefix: "sprite-atlas_",
      start: 11,
      end: 12,
    }),
    frameRate: 15,
    repeat: -1,
  });

  scene.anims.create({
    key: "goombaDie",
    frames: [{ key: "atlas", frame: "sprite-atlas_10" }],
    frameRate: 10,
    hideOnComplete: true,
  });

  // Coin
  scene.anims.create({
    key: "rotate",
    frames: scene.anims.generateFrameNames("atlas", {
      prefix: "sprite-atlas_",
      start: 6,
      end: 9,
    }),
    frameRate: 10,
    repeat: -1,
  });
};
