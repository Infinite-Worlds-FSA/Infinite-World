export default (scene) => {
  scene.anims.create({
    key: "idle",
    frames: scene.anims.generateFrameNames("zombie", {
      start: 0,
      end: 4,
    }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: "run",
    frames: scene.anims.generateFrameNames("zombie", {
      start: 5,
      end: 8,
    }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: "jump",
    frames: scene.anims.generateFrameNumbers("zombie", { frames: [9] }),
    frameRate: 10,
  });

  scene.anims.create({
    key: "die",
    frames: scene.anims.generateFrameNames("zombie", {
      start: 10,
      end: 11,
    }),
    frameRate: 10,
  });

  scene.anims.create({
    key: "goombaRun",
    frames: scene.anims.generateFrameNames("goomba", {
      start: 0,
      end: 4,
    }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: "goombaDie",
    frames: scene.anims.generateFrameNames("goomba", {
      start: 5,
      end: 6,
    }),
    frameRate: 10,
  });

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
