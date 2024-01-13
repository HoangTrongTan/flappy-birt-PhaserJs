var config = {
    width: 300,
    height: 350,
    backgroundColor: "#ef0fe",
    scene: [Scene1, Scene2],
    physics:{
        default: "arcade",
        arcade:{
            debug: false
        }
    }
};
var ObjectGame = {
    birt: null,
    Score: 4,
}
var game = new Phaser.Game(config);