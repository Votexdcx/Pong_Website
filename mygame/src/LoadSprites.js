export const loadSpriteclass = {


    Font: function() {
        return "Hello World!";
    },
    Sprites: function() {
        loadSprite("player", "src/Sprites/player2.png")
        loadSprite("menubackground","src/Sprites/MenuBackground.jpg")
        loadSprite("ball", "src/Sprites/ball3.png")
        loadSprite("Logo", "src/Sprites/PongLogo.png")
        loadSprite("BackgroundGame", "src/Sprites/GameBackgroundimage.png")
        loadSprite("Wall", "src/Sprites/Wall2.png")
    }
}
