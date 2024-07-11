
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  backgroundColor: 0xffffff,
};

const game = new Phaser.Game(config);

class startGame extends Phaser.Scene {
  constructor() {
    super({ key: 'startGame' });
  }

  preload() {
    this.load.image('kitchen', './assets/kitchen.jpg');
  }

  create() {
    this.add.image(400, 250, 'kitchen').setScale(0.24);

  }

  
  update() {}



 
 
}

game.scene.add('startGame', startGame);
game.scene.start('startGame');
