class Enemy extends Phaser.GameObjects.Image{
    constructor(scene ){
        super(scene);
        this.sceneObj = scene;
        this.enemy1 = scene.physics.add.image( config.width + 50 , 0, "enemy1" );
        this.enemy1.setScale(0.04);
        this.enemy1.rotation = 20.4;
        this.enemy2 = scene.physics.add.image( config.width + 50 , 0 ,"enemy2" );
        this.enemy2.setScale(0.02);
        

        this.refresh();

        this.sceneObj.gr_enemy.add(this.enemy1);
        this.sceneObj.gr_enemy.add(this.enemy2);
    }
    refresh(){
        this.enemy1.setPosition( -10, 0);
        this.enemy2.setPosition( -10 , 0);
    }
    update(kc = 0){
        if( this.enemy1.x < 0 ){
            var x1 = Phaser.Math.Between( 220 , config.width + 200 );
            var y1 = Phaser.Math.Between( 100 , config.height );
            this.enemy1.setPosition( x1 , y1);
        }
        if( this.enemy2.x < 0 ){
            var x2 = Phaser.Math.Between( 260 , config.width + 300 );
            var y2 = Phaser.Math.Between( 100 , config.height );
            this.enemy2.setPosition( x2 , y2);
        }
    }
    run(){
        this.enemy1.x -= 1.8;
        this.enemy2.x -= 1.8;
    }
    getY(){
        return {
            ite1: this.enemy1.y,
            ite2: this.enemy2.y
        }
    }
}