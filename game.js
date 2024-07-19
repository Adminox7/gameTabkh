
const config = {
  type: Phaser.AUTO,
  width: 1000,
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
    this.load.image('startgame', './assets/start game.jpeg');
    this.load.image('play', './assets/Calque 1.png');

  }

  create() {
    this.add.image(400, 250, 'startgame').setScale(1);
    this.button = this.add.image(404, 368, 'play').setInteractive({ useHandCursor: true }).on('pointerdown', () => this.start());
  

  }

  update() {}
  start(){
    this.button.setInteractive({ useHandCursor: false })
    this.scene.start('tabkh');
    
  }
  
}

class tabkh extends Phaser.Scene {
  constructor(){
    super({ key: 'tabkh' });
  }

  preload(){
    this.load.image('kitchen', './assets/kitchen.png');
    this.load.image('tbasl', './assets/Calque 2.png');
    this.load.image('forno2', './assets/forno2.png');
    this.load.image('bayd', './assets/bayd.png');
    this.load.image('bayda', './assets/bayda.png');
    this.load.image('kas', './assets/kas.png');
    this.load.image('sukar', './assets/sukar.png');
    this.load.image('brad1', './assets/brad1.png');
    this.load.image('fran', './assets/fran.png');
    this.load.image('mi9lat', './assets/mi9lat.png');
    this.load.image('zit', './assets/zit.png');
  }
  create() {
    this.add.image(500, 250, 'kitchen').setScale(0.18);
    this.add.image(275, 420, 'forno2').setScale(0.04);
    this.bayd = this.add.image(500, 400, 'bayd').setScale(0.025).setInteractive({ useHandCursor: true });
    this.add.image(800, 400, 'kas').setScale(0.02);
    this.add.image(740, 385, 'sukar').setScale(0.08);
    this.add.image(870, 408, 'brad1').setScale(0.3);
    this.add.image(300, 400, 'mi9lat').setScale(0.08);
    this.add.image(680, 370, 'zit').setScale(0.08);

    this.input.setDefaultCursor('pointer');

    this.bayd.on('pointerdown', () => this.bayda());
  }

  bayda() {
    this.baydaImage = this.add.image(this.input.activePointer.x, this.input.activePointer.y, 'bayda').setScale(0.045);
    this.input.on('pointermove', this.moveBayda, this);
    this.input.on('pointerup', this.releaseBayda, this);
  }

  moveBayda(pointer) {
    if (this.baydaImage) {
      this.baydaImage.setPosition(pointer.x, pointer.y);
    }
  }

  releaseBayda() {
    this.input.off('pointermove', this.moveBayda, this);
    this.input.off('pointerup', this.releaseBayda, this);
  }








  update(){

  }

}

game.scene.add('tabkh',tabkh)
game.scene.add('startGame', startGame);
game.scene.start('startGame');
