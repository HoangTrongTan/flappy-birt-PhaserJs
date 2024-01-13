class ScoreBoard extends Phaser.GameObjects.Container{
    constructor(scene,x,y){
        super(scene , x , y)
        this.sceneObj = scene;
        this.x = x;
        this.y = y;
        this.textLabel = 0;
        this.active = false;
        this.create();
    }
    create(){
        this.bang = this.sceneObj.add.image( this.x , this.y , "bang" );
        this.bang.setScale(0.5);  
        this.text = this.sceneObj.add.bitmapText( this.x / 2 +50, this.y / 2 + 40 , "pixel", String(this.textLabel) , 40);
        this.btnRefresh = new CustomerButton( this.sceneObj , this.x / 2, this.y / 2, "REFRESH" , 0.4 , 30);
    }
    hide(){
        this.bang.alpha = 0;
        this.text.alpha = 0;
        this.btnRefresh.alpha = 0;
    }
    show(score){
        //------------------bảng-------------
        this.sceneObj.tweens.add({
            targets: this.bang,
            ease: "Power1",
            duration: 1000,
            repeat: 0,
            onComplete: () => {
                this.bang.alpha = 1;
            },
            callbackScope: this,
        });
        //------------------bảng-------------

        this.sceneObj.tweens.add({
            targets: this.text,
            ease: "Power1",
            duration: 1000,
            repeat: 0,
            onComplete: () => {
                this.text.text = score;
                this.text.alpha = 1;

            },
            callbackScope: this,
        });
        //button
        this.sceneObj.tweens.add({
            targets: this.btnRefresh,
            ease: "Power1",
            duration: 1000,
            repeat: 0,
            onComplete: () => {
                this.btnRefresh.alpha = 1;
            },
            callbackScope: this,
        });
    }
    onClickRefresh(){
        this.btnRefresh.callbackFunc_EventClick();
    }
}