class Birt extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "chim1");
    this.x_axis = x;
    this.y_axis = y;
    this.sceneObj = scene;
    this.alive = true;
    this.active = false;
    this.setScale(0.1);
    
    scene.physics.world.enableBody(this);
    // Phát triển vật lý cho đối tượng
    this.body.setAllowGravity(true); // Cho phép tác động của trọng lực
    // this.body.setGravityY(100); // set trọng lực
    
    scene.add.existing(this);
    this.play("chimbay");
  }
  move(){
    if(this.active){
      this.alpha = 1;
      this.alive = true;
      this.body.setAccelerationY(800); //sét gia tốc
    }
    if(this.sceneObj.cursorkey.space.isDown){
        // this.body.velocity.y -= 30;  
        this.active = true;
        this.body.setVelocityY(-200);
    }
  }
  clearPhysics(){
    // this.body.setVelocityY(-300);
    this.alive = false;
    this.sceneObj.physics.world.disable(this);
    // this.setTexture("chimdie");
    // this.setScale(0.05); 
    this.sceneObj.tweens.add({
      targets: this,
      y: 335,
      ease:"Power1",
      duration: 2000,
      onComplete: () => {
          this.alpha = 0.6;
      },
      callbackScope: this
    });
  }
  update() {
    //   console.log("vào cào", this.y); 
    if (this.y >= game.config.height - 30) {
        this.setPosition(this.x_axis, 335);
        this.sceneObj.physics.world.disable(this);
        this.alpha = 0.5;
        this.alive = false;
        return false;
    }
  }
}
