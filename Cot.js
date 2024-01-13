class Cot extends Phaser.GameObjects.Container {
  constructor(scene, x , speed) {
    super(scene, x);
    this.sceneObj = scene;
    this.speed = speed;
    this.x = x;
    this.axis_top_y = Phaser.Math.Between(-80, 70);

    this.ongtren = scene.physics.add.image(x + 100, this.axis_top_y, "ongtren");
    this.ongtren.body.allowGravity = false;
    // this.vekhung(scene);  

    this.ongduoi = scene.physics.add.image(x + 100, this.axis_top_y + 90 * 4.5, "ongduoi");

    this.khoangcach = scene.add.rectangle(
      x + 100,
      350,
      45,
      game.config.height * 2,
      0x5EDD62,
      0
    );

    scene.physics.add.existing(this.khoangcach);
    this.addCollider();  
    
    scene.add.existing(this);
    console.log("=====================================");
  }

  vekhung( ) {
    // Hiển thị khung vật lý xung quanh đối tượng
    this.sceneObj.physics.world.createDebugGraphic();
  }
  refresh(){
    this.ongtren.setPosition(-100, 0);
    this.ongduoi.setPosition(-100 , 0);
    this.khoangcach.setPosition(-100 , 0);
  }
  update() {
      this.ongtren.x -= this.speed;
      this.ongduoi.x -= this.speed;
      this.khoangcach.x -= this.speed;
      if( this.ongtren.x < 1){
        // this.ongtren.destroy();
        // this.ongduoi.destroy();
        // this.khoangcach.destroy();
        this.axis_top_y = Phaser.Math.Between(-80, 70);
        var x = Phaser.Math.Between(this.x, this.x + 150);
        this.ongtren.setPosition(this.x , this.axis_top_y);
        this.ongduoi.setPosition(this.x ,this.axis_top_y + 90 * 4.5 );
        console.log("hjk", x);

        this.ongtren.body.setVelocityY(0);
        this.ongduoi.body.setVelocityY(0);
        this.khoangcach.setPosition( this.x , 350 );

        this.sceneObj.physics.world.enableBody(this.ongtren);
        this.sceneObj.physics.world.enableBody(this.ongduoi);
        this.sceneObj.physics.world.enableBody(this.khoangcach);
           
        this.sceneObj.PiecesArr.splice(0 , 1);
      }
  }
  addCollider(){
    this.sceneObj.gr_ongtren.add(this.ongtren);
    this.sceneObj.gr_ongduoi.add(this.ongduoi);
    this.sceneObj.gr_khoangcach.add(this.khoangcach);
  }
  getKhoangCach(){
    return {
      axisY: this.ongduoi.y,
      height: this.ongduoi - this.ongtren
    }
  }
}
