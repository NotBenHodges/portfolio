export default class Player {
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
