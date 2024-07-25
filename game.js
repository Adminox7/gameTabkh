
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

class Tabkh extends Phaser.Scene {
  constructor() {
    super({ key: 'tabkh' });
  }

  preload() {
    this.load.image('kitchen', './assets/kitchen.png');
    this.load.image('tbasl', './assets/Calque 2.png');
    this.load.image('forno2', './assets/forno2.png');
    this.load.image('bayd', './assets/bayd.png');
    this.load.image('bayda', './assets/bayda.png');
    this.load.image('bidamfosa', './assets/bidamfosa.png');
    this.load.image('homlita', './assets/homlita.png');
    this.load.image('kas', './assets/kas.png');
    this.load.image('sukar', './assets/sukar.png');
    this.load.image('chwiyaDyalSukar', './assets/chwiyaDyalSukar.png');
    this.load.image('brad1', './assets/brad1.png');
    this.load.image('fran', './assets/fran.png');
    this.load.image('mi9lat', './assets/mi9lat.png');
    this.load.image('zit', './assets/zit.png');
    this.load.image('zitMkbob', './assets/zitMkbob.png');
    this.load.image('handVersBas', './assets/handVersBas.png');
  }

  create() {
    this.add.image(500, 250, 'kitchen').setScale(0.18);
    this.add.image(275, 420, 'forno2').setScale(0.04);
    this.bayd = this.add.image(500, 400, 'bayd').setScale(0.025).setInteractive({ useHandCursor: true });
    this.add.image(800, 400, 'kas').setScale(0.02);
    this.sukarInitialPosition = { x: 740, y: 385 };
    this.sukar = this.add.image(this.sukarInitialPosition.x, this.sukarInitialPosition.y, 'sukar').setScale(0.08).setInteractive({ useHandCursor: true });
    this.add.image(870, 408, 'brad1').setScale(0.3);
    this.mi9lat = this.add.image(300, 400, 'mi9lat').setScale(0.08);

    this.zitInitialPosition = { x: 680, y: 370 };
    this.zit = this.add.image(this.zitInitialPosition.x, this.zitInitialPosition.y, 'zit').setScale(0.08).setInteractive({ useHandCursor: true });
    this.input.setDefaultCursor('pointer');

    this.zit.on('pointerdown', this.zitdown, this);
    this.bayd.on('pointerdown', this.spawnBayda, this);
    this.sukar.on('pointerdown', this.spawnChwiyaDyalSukar, this);
    this.bayd.on('pointerdown', this.showHandVersBas, this);
    this.zit.on('pointerdown', this.showHandVersBas, this);
    this.sukar.on('pointerdown', this.showHandVersBas, this);

    this.handVersBas = this.add.image(250, 300, 'handVersBas').setScale(0.04).setVisible(false);

    this.zitMkbob = this.add.image(320, 350, 'zitMkbob').setScale(0.08).setVisible(false);
    this.chwiyaDyalSukar = this.add.image(0, 0, 'chwiyaDyalSukar').setScale(0.08).setVisible(false);

    // Store initial position of bayda
    this.baydaInitialPosition = { x: 500, y: 400 };
  }

  showHandVersBas() {
    this.handVersBas.setVisible(true);
    this.tweens.add({
      targets: this.handVersBas,
      y: this.handVersBas.y + 20,
      duration: 500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }

  spawnBayda() {
    this.baydaImage = this.add.image(this.input.activePointer.x, this.input.activePointer.y, 'bayda').setScale(0.045);
    this.input.on('pointermove', this.moveBayda, this);
    this.input.on('pointerup', this.releaseBayda, this);
    this.baydaImage.setInteractive({ useHandCursor: true });
    this.baydaImage.on('pointerdown', this.animateBidamfosa, this);
  }

  moveBayda(pointer) {
    if (this.baydaImage) {
      this.baydaImage.setPosition(pointer.x, pointer.y);
    }
  }

  releaseBayda() {
    this.input.off('pointermove', this.moveBayda, this);
    this.input.off('pointerup', this.releaseBayda, this);
    if (this.baydaImage) {
      // Check if baydaImage is near mi9lat
      if (Phaser.Math.Distance.Between(this.baydaImage.x, this.baydaImage.y, this.mi9lat.x, this.mi9lat.y) < 50) {
        this.baydaImage.setPosition(this.mi9lat.x, this.mi9lat.y - 20); // Adjust position to be above mi9lat
      } else {
        this.tweens.add({
          targets: this.baydaImage,
          x: this.baydaInitialPosition.x,
          y: this.baydaInitialPosition.y,
          duration: 500,
          ease: 'Power2',
          onComplete: () => {
            this.handVersBas.setVisible(false);// Hide handVersBas when the element returns to its initial position
          
            this.baydaImage.setVisible(false); }

        });
      }
    }
  }

  animateBidamfosa() {
    if (this.baydaImage) {
      this.baydaImage.destroy();
      const bidamfosa = this.add.image(277, 355, 'bidamfosa').setScale(0.035);

      this.tweens.add({
        targets: bidamfosa,
        y: bidamfosa.y + 30,
        duration: 1000,
        ease: 'Power2',
        onComplete: () => {
          bidamfosa.destroy();
          this.add.image(277, 397, 'homlita').setScale(0.035);
        }
      });
    }
  }

  spawnChwiyaDyalSukar() {
    this.chwiyaDyalSukar.setPosition(this.input.activePointer.x, this.input.activePointer.y).setVisible(true);
    this.input.on('pointermove', this.moveChwiyaDyalSukar, this);
    this.input.on('pointerup', this.releaseChwiyaDyalSukar, this);
  }

  moveChwiyaDyalSukar(pointer) {
    if (this.chwiyaDyalSukar.visible) {
      this.chwiyaDyalSukar.setPosition(pointer.x, pointer.y);
    }
  }

  releaseChwiyaDyalSukar() {
    this.input.off('pointermove', this.moveChwiyaDyalSukar, this);
    this.input.off('pointerup', this.releaseChwiyaDyalSukar, this);
    this.chwiyaDyalSukar.setVisible(false);
    this.sukar.setPosition(this.sukarInitialPosition.x, this.sukarInitialPosition.y);
    this.handVersBas.setVisible(false); // Hide handVersBas when the element returns to its initial position
  }

  zitdown(pointer) {
    this.zit.setPosition(pointer.x, pointer.y);
    this.input.on('pointermove', this.moveZit, this);
    this.input.on('pointerup', this.releaseZit, this);
  }

  moveZit(pointer) {
    if (this.zit) {
      this.zit.setPosition(pointer.x, pointer.y);
      // Check if zit is near (300, 300) within a range of 100 pixels
      if (Phaser.Math.Distance.Between(pointer.x, pointer.y, 300, 300) < 100) {
        this.zitMkbob.setVisible(true);
        this.zit.setVisible(false);
        this.chwiyaDyalSukar.setVisible(false); // Hide the small sugar when zitMkbob appears
      } else {
        this.zitMkbob.setVisible(false);
        this.zit.setVisible(true);
        // Show chwiyaDyalSukar if zit is near the sugar (740, 385) within a range of 50 pixels
        if (Phaser.Math.Distance.Between(pointer.x, pointer.y, 740, 385) < 50) {
          this.chwiyaDyalSukar.setVisible(true);
          this.chwiyaDyalSukar.setPosition(pointer.x, pointer.y);
        } else {
          this.chwiyaDyalSukar.setVisible(false);
        }
      }
    }
  }

  releaseZit() {
    this.input.off('pointermove', this.moveZit, this);
    this.input.off('pointerup', this.releaseZit, this);
    this.zit.setPosition(this.zitInitialPosition.x, this.zitInitialPosition.y);
    this.zitMkbob.setVisible(false);
    this.zit.setVisible(true);
    this.chwiyaDyalSukar.setVisible(false);
    this.handVersBas.setVisible(false); // Hide handVersBas when the element returns to its initial position
  }

  update() {}
}













game.scene.add('tabkh',Tabkh)
game.scene.add('startGame', startGame);
game.scene.start('startGame');
