
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
    this.scene.start('menu');
    
  }
  
}


class menu extends Phaser.Scene {
  constructor() {
    super({ key: 'menu' });
  }

  preload() {
    this.load.image('menu', './assets/menu1.png');
    this.load.image('fotor1', './assets/الشاي و البيض .png');


  }

  create() {
    this.add.image(400, 250, 'menu').setScale(0.3);
    this.add.image(600, 150, 'fotor1').setScale(0.15).setInteractive({ useHandCursor: true }).on('pointerdown', () => this.start());

  

  }

  update() {}
  start(){

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
    this.load.image('homlitaFm9la', './assets/homlitaFm9la.png');
    this.load.image('kas', './assets/kas.png');
    this.load.image('sukar', './assets/sukar.png');
    this.load.image('chwiyaDyalSukar', './assets/chwiyaDyalSukar.png');
    this.load.image('brad1', './assets/brad1.png');
    this.load.image('brad2', './assets/brad2.png');
    this.load.image('mi9lat', './assets/mi9lat.png');
    this.load.image('zit', './assets/zit.png');
    this.load.image('zitMkbob', './assets/zitMkbob.png');
    this.load.image('handVersBas', './assets/handVersBas.png');
    this.load.image('m9labZit', './assets/m9labZit.png');
    this.load.image('mlha', './assets/mlha.png');
    this.load.image('mlhamkboba', './assets/mlha mkboba.png');
    this.load.image('bidblmlha', './assets/bidblmlha.png');
    this.load.image('bidatayba', './assets/bidatayba.png');
    this.load.image('9ar3a', './assets/9ar3a.png');
    this.load.image('9ar3am7lola', './assets/9ar3am7lola.png');
  }

  create() {
    this.add.image(500, 250, 'kitchen').setScale(0.18);
    this.add.image(275, 420, 'forno2').setScale(0.04);
    this.bayd = this.add.image(500, 400, 'bayd').setScale(0.025).setInteractive({ useHandCursor: true });
    this.add.image(800, 400, 'kas').setScale(0.02);
    this.sukarInitialPosition = { x: 740, y: 385 };
    this.sukar = this.add.image(this.sukarInitialPosition.x, this.sukarInitialPosition.y, 'sukar').setScale(0.08).setInteractive({ useHandCursor: true });
    this.brad1 = this.add.image(870, 408, 'brad1').setScale(0.3).setInteractive({ useHandCursor: true });
    this.brad2 = this.add.image(870, 408, 'brad2').setScale(0.067).setVisible(false);
    this.mi9lat = this.add.image(300, 400, 'mi9lat').setScale(0.08);
    
    this.qar3aInitialPosition = { x: 620, y: 370 };
    this.qar3a = this.add.image(this.qar3aInitialPosition.x, this.qar3aInitialPosition.y, '9ar3a').setScale(0.06).setInteractive({ useHandCursor: true }).setVisible(false);

    this.zitInitialPosition = { x: 680, y: 370 };
    this.zit = this.add.image(this.zitInitialPosition.x, this.zitInitialPosition.y, 'zit').setScale(0.08).setInteractive({ useHandCursor: true });
    this.input.setDefaultCursor('pointer');

    this.zit.on('pointerdown', this.zitdown, this);
    this.bayd.on('pointerdown', this.spawnBayda, this);
    this.sukar.on('pointerdown', this.spawnChwiyaDyalSukar, this);
    this.bayd.on('pointerdown', this.showHandVersBas, this);
    this.zit.on('pointerdown', this.showHandVersBas, this);
    this.sukar.on('pointerdown', this.showHandVersBas, this);
    this.brad1.on('pointerdown', this.swapPositions, this);
    this.qar3a.on('pointerdown', this.qar3aDown, this);

    this.handVersBas = this.add.image(250, 300, 'handVersBas').setScale(0.04).setVisible(false);

    this.zitMkbob = this.add.image(320, 350, 'zitMkbob').setScale(0.08).setVisible(false);
    this.chwiyaDyalSukar = this.add.image(0, 0, 'chwiyaDyalSukar').setScale(0.08).setVisible(false);
    this.mlhaMkboba = this.add.image(0, 0, 'mlhamkboba').setScale(0.08).setVisible(false);

    // Store initial position of bayda
    this.baydaInitialPosition = { x: 500, y: 400 };
    this.brad1InitialPosition = { x: 870, y: 408 };

    this.mlha = this.add.image(400, 393, 'mlha').setScale(0.04).setInteractive({ useHandCursor: true });
    this.mlha.on('pointerdown', this.mlhaDown, this);

    // Initialize flags
    this.isOiled = false;
    this.isCookedWithEggs = false;
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
    this.handVersBas.y = this.handVersBas.y - 20;
  }

  showHandVersBasNear(element) {
    this.handVersBas.setPosition(element.x + 30, element.y);
    this.showHandVersBas();
  }

  spawnBayda() {
    if (this.isOiled) {
      this.baydaImage = this.add.image(this.input.activePointer.x, this.input.activePointer.y, 'bayda').setScale(0.045);
      this.input.on('pointermove', this.moveBayda, this);
      this.input.on('pointerup', this.releaseBayda, this);
      this.baydaImage.setInteractive({ useHandCursor: true });
      this.baydaImage.on('pointerdown', this.animateBidamfosa, this);
      this.zit.disableInteractive();
      this.showHandVersBasNear(this.baydaImage);
    }
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
      if (Phaser.Math.Distance.Between(this.baydaImage.x, this.baydaImage.y, this.mi9lat.x, this.mi9lat.y) < 50) {
        this.baydaImage.setPosition(this.mi9lat.x - 20, this.mi9lat.y - 50);
      } else {
        this.tweens.add({
          targets: this.baydaImage,
          x: this.baydaInitialPosition.x,
          y: this.baydaInitialPosition.y,
          duration: 500,
          ease: 'Power2',
          onComplete: () => {
            this.handVersBas.setVisible(false);
            this.baydaImage.setVisible(false);
            this.zit.setInteractive();
          }
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
          this.mi9lat.setTexture('homlitaFm9la');
          this.isCookedWithEggs = true;
          this.zit.disableInteractive();
          this.bayd.disableInteractive();
          this.showHandVersBasNear(this.mlha);
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
    if (this.chwiyaDyalSukar) {
      this.chwiyaDyalSukar.setPosition(pointer.x, pointer.y);
    }
  }

  releaseChwiyaDyalSukar() {
    this.input.off('pointermove', this.moveChwiyaDyalSukar, this);
    this.input.off('pointerup', this.releaseChwiyaDyalSukar, this);
    this.chwiyaDyalSukar.setVisible(false);
    this.sukar.setPosition(this.sukarInitialPosition.x, this.sukarInitialPosition.y);
    this.handVersBas.setVisible(false);
  }

  zitdown(pointer) {
    this.zit.setPosition(pointer.x, pointer.y);
    this.input.on('pointermove', this.moveZit, this);
    this.input.on('pointerup', this.releaseZit, this);
  }

  moveZit(pointer) {
    if (this.zit) {
      this.zit.setPosition(pointer.x, pointer.y);
      if (Phaser.Math.Distance.Between(pointer.x, pointer.y, this.mi9lat.x, this.mi9lat.y) < 100) {
        this.zitMkbob.setVisible(true).setPosition(this.mi9lat.x + 25, this.mi9lat.y - 60);
        this.mi9lat.setTexture('m9labZit');
        this.zit.setVisible(false);
        this.chwiyaDyalSukar.setVisible(false);
        this.isOiled = true;
        this.zit.disableInteractive();
        this.showHandVersBasNear(this.bayd);
      } else {
        this.zitMkbob.setVisible(false);
        this.mi9lat.setVisible(true);
        this.zit.setVisible(true);
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
    this.handVersBas.setVisible(false);
  }

  mlhaDown(pointer) {
    if (this.isCookedWithEggs) {
      this.mlha.setPosition(pointer.x, pointer.y);
      this.input.on('pointermove', this.moveMlha, this);
      this.input.on('pointerup', this.releaseMlha, this);
      this.showHandVersBasNear(this.mlha);
    }
  }

  moveMlha(pointer) {
    if (this.mlha) {
      this.mlha.setPosition(pointer.x, pointer.y);
      if (Phaser.Math.Distance.Between(pointer.x, pointer.y, this.mi9lat.x, this.mi9lat.y) < 100) {
        this.mlhaMkboba.setVisible(true).setPosition(this.mi9lat.x + 25, this.mi9lat.y - 60).setScale(0.04);
        this.mlha.setVisible(false);
        this.mi9lat.setTexture('bidblmlha');
        this.showBidataybaAfterDelay();
        this.zit.disableInteractive();
        this.bayd.disableInteractive();
      } else {
        this.mlhaMkboba.setVisible(false);
        this.mlha.setVisible(true);
      }
    }
  }

  releaseMlha() {
    this.input.off('pointermove', this.moveMlha, this);
    this.input.off('pointerup', this.releaseMlha, this);
    this.mlha.setPosition(400, 393);
    this.mlhaMkboba.setVisible(false);
    this.mlha.setVisible(true);
    this.handVersBas.setVisible(false);
  }

  showBidataybaAfterDelay() {
    setTimeout(() => {
      this.mi9lat.setTexture('bidatayba');
    }, 5000);
  }

  swapPositions() {
    // Swap the positions of bayd and brad2
    const tempPosition = { x: this.bayd.x, y: this.bayd.y };
    this.bayd.setPosition(this.brad2.x-20, this.brad2.y+10);
    this.brad2.setPosition(tempPosition.x, tempPosition.y);

    // Hide brad1 and show brad2
    this.brad1.setVisible(false);
    this.brad2.setVisible(true);
    
    // Make qar3a visible and interactive
    this.qar3a.setVisible(true).setInteractive();
  }

  qar3aDown(pointer) {
    this.qar3a.setPosition(pointer.x, pointer.y);
    this.input.on('pointermove', this.moveQar3a, this);
    this.input.on('pointerup', this.releaseQar3a, this);
  }

  moveQar3a(pointer) {
    if (this.qar3a) {
      this.qar3a.setPosition(pointer.x, pointer.y);
      if (Phaser.Math.Distance.Between(pointer.x, pointer.y, this.brad2.x, this.brad2.y) < 100) {
        this.qar3a.setTexture('9ar3am7lola');
      } else {
        this.qar3a.setTexture('9ar3a');
      }
    }
  }

  releaseQar3a() {
    this.input.off('pointermove', this.moveQar3a, this);
    this.input.off('pointerup', this.releaseQar3a, this);
    this.qar3a.setPosition(this.qar3aInitialPosition.x, this.qar3aInitialPosition.y);
    this.qar3a.setTexture('9ar3a');
  }

  update() {
    if (this.zit.input.enabled && !this.handVersBas.visible) {
      this.showHandVersBasNear(this.zit);
    }
  }
}










game.scene.add('tabkh',Tabkh)
game.scene.add('startGame', startGame);
game.scene.add('menu', menu);
game.scene.start('startGame');
