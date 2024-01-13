class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
    this.Piece_cur = 350;
    this.PiecesArr = [];
    this.chim = null;
  }
  taodiem(){
    this.scoreLabel = this.add.bitmapText( 140, 50, "pixel" , "0" , 40 );
  }
  Sound(){
    this.music = this.sound.add("sound_music");
    var musicConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0
    };
    this.music.play(musicConfig);

    this.music_die = this.sound.add("sound_die");
    this.music_bay = this.sound.add("sound_bay");
    this.music_enemy = this.sound.add("sound_enemy");
    this.music_pass = this.sound.add("sound_pass");
  }
  groupCollier(){
    this.gr_ongtren = this.physics.add.group();
    this.gr_ongduoi = this.physics.add.group();
    this.gr_khoangcach = this.physics.add.group();


    this.gr_enemy  = this.physics.add.group();
  }
  addCollider(){
    this.physics.add.collider(
      this.gr_ongtren,
      ObjectGame.birt,
      (chim ,ongtren) => {
        this.music_die.play();
        this.physics.world.disable(ongtren);
        ObjectGame.birt.clearPhysics();
      },

    );
    this.physics.add.collider(
      this.gr_ongduoi,
      ObjectGame.birt,
      (chim ,ongduoi) => {
        this.music_die.play();
        this.physics.world.disable(ongduoi);
        ObjectGame.birt.clearPhysics();   
      },

    );
    this.physics.add.overlap(
      this.gr_khoangcach,
      ObjectGame.birt,
      (chim, khoangcach) => {
          ObjectGame.Score += 1;
          this.music_pass.play();
          this.scoreLabel.text = ObjectGame.Score;
          this.physics.world.disable(khoangcach);
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.gr_enemy,
      ObjectGame.birt,
      (chim, enemy) => {
        ObjectGame.birt.clearPhysics();   
      },
      null,
      this
    );

  }
  create() {
    this.groupCollier();
    // this.background = this.add.image(0, 0 , "background");
    this.background = this.add.tileSprite( 0 , 0 , game.config.width, game.config.height, "background");
    this.background.setOrigin(0);
    this.background.setScrollFactor(0);
    this.chim = new Birt( this, 50, 175 );//175
    ObjectGame.birt = this.chim;
    this.physics.add.existing(this.chim);
    this.cursorkey = this.input.keyboard.createCursorKeys();
    this.addCollider();
    this.taodiem();

    this.piece1 = new Cot( this,300 , 1);
    
    this.bang = new ScoreBoard(  this , game.config.width / 2 , game.config.height / 2 );
    this.bang.hide();

    this.enemy = new Enemy(this);
    this.Sound();
  }
  update(time){
    this.scoreLabel.text = ObjectGame.Score;
    this.addCollider();
    // console.log(ObjectGame.birt);
    this.bang.onClickRefresh();
    // console.log(ObjectGame.birt.alive, ObjectGame.birt.active);
    if(!ObjectGame.birt.alive){
      ObjectGame.birt.setTexture("chimdie");
      ObjectGame.birt.setScale(0.05);
      this.bang.show(ObjectGame.Score);
      this.piece1.refresh();
      this.enemy.refresh();
    }else{
      this.bang.hide();
    }

    ObjectGame.birt.move();
    ObjectGame.birt.update();
    if(  (ObjectGame.birt.alive )  &&  (ObjectGame.birt.active ) ){
      
      this.piece1.update();
      // this.background.tilePositionX += 4;
      //Địch 
      if(ObjectGame.Score % 5 === 0 && ObjectGame.Score !== 0){
        this.enemy.run();
        this.enemy.update();
      }else{
        this.enemy.refresh();
      }
    }
    
  }
}