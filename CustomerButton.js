class CustomerButton extends Phaser.GameObjects.Container{
    constructor(scene , x , y , text , size , sizeText){
        super(scene , x, y );
        this.setScale(size);
        this.sceneObj = scene;
        scene.add.existing(this);
        this.text = scene.add.bitmapText( 0 , 0 , "pixel", text , sizeText).setOrigin(0.5);
        this.button = scene.add.image(0, 0, "button");
        this.button.setScale(size);    
        this.add(this.button);
        this.add(this.text);
        this.setPosition( x + 75, y + 130);
    }
    callbackFunc_EventClick( ){
        this.button.setInteractive();
        this.button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            ObjectGame.birt.destroy();
            ObjectGame.birt = new Birt( this.sceneObj , 50, 175  );
            ObjectGame.Score = 0;
        });
    }
}