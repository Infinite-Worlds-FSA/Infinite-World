import Phaser from "Phaser";

import Game from "./scenes/Game.js";
import GameOver from "./scenes/GameOver.js";
import TitleMenu from "./scenes/TitleMenu.js";
import GameCredits from './scenes/GameCredits.js';

import "./assets/scss/index.scss";

const config = {
  width: 640,
  height: 480,
  parent: "sprite",
  backgroundColor: "#FFFFAC",
  title: "Tilemap",
  url: "webtips.dev",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      // debug: true, // Set it to true if you want debugger enabled by default
      gravity: {
        y: 1000,
      },
    },
  },
  scene: [TitleMenu, Game, GameOver, GameCredits],
};

new Phaser.Game(config);
