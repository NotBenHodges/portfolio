//import Player from './player.js';

let canvas = document.getElementById("screen");
let ctx = canvas.getContext('2d');

const GAMEWIDTH = 50;
const GAMEHEIGHT = 50;

ctx.clearRect(0,0,canvas.width,canvas.height);

let p = new Player(GAMEWIDTH,GAMEHEIGHT);

class Player {
  constructor(gameWidth,gameHeight) {
    this.gameWidth = gameWidth;
    this.height = gameHeight;

    this.position={
      x: gameWidth,
      y: gameHeight
    };
  }

  draw(ctx) {
    ctx.fillRect(20,20,gameWidth,gameHeight);
  }
}

function gameLoop() {
  p.draw(ctx);
}

gameLoop();
