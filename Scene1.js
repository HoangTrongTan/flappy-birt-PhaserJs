class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }
    loadFont(){
        this.load.bitmapFont("pixel", "asests/Fonts/Unnamed.png" , "asests/Fonts/Unnamed.xml");
    }
    preload(){
        this.load.image("chim1" , "asests/images/chima.png");
        this.load.image("chim2" , "asests/images/chimb.png");
        this.load.image("chimdie" , "asests/images/chimdie.png");
        this.load.image("ongtren" , "asests/images/ongtren.png");
        this.load.image("ongduoi" , "asests/images/ongduoi.png");
        this.load.image("background", "asests/images/nenchinh.png");

        this.load.image("bang", "asests/images/bang.png" );
        this.load.image("button", "asests/images/button.png" );


        this.load.image("enemy1", "asests/images/enemy.png" );
        this.load.image("enemy2", "asests/images/enemy2.png" );



        //load font
        this.loadFont();
    }
    create(){
        this.scene.start("playGame"); // lưu ý phải có dòng này 

        this.anims.create({
            key: 'chimbay',
            frames: [
                {
                    key: "chim1"
                },
                {
                    key: "chim2"
                }
            ],
            frameRate: 7,
            repeat: -1
        });


    }
}