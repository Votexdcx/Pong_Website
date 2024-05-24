class GameScene{

    Level1(){
        let dir
        let dirnormal 
        let playerscore = 0
        let playerscore2 = 0

        Getrandomdir()
        console.log(dir);
        console.log(dirnormal)
        const SPEED = 600;
        let speed = 1300
        add ([
            sprite("BackgroundGame"),
        ])
        const player1 = add ([
            sprite("player"),
            pos(0,400),
            area(),
            body({mass:3000}),
            color(255,255,255),
            scale(vec2(1,1.5)),
            "Player1"
        ])
        const player2 = add ([
            sprite("player"),
            pos(1880,400),
            area(),
            body({mass:3000}),
            color(255,255,255),
            scale(vec2(1,1.5)),
            "Player2"
        ])
        const ball = add ([
            pos(center().x, center().y),
            circle(30),
            area(),
            body(),
            offscreen({ destroy: false}),
            color(255,255,255),
            "ball"
        ])

        const Topwall =add ([
            sprite("Wall"),
            pos(0,-30),
            area(),
            body(),
            color(255,255,255),
            scale(3,1),
            body({ isStatic: true }),

            "topwall"
        ])
        const Bottomwall =add ([
            sprite("Wall"),
            pos(0,1070),
            area(),
            body(),
            color(255,255,255),
            scale(3,1),
            body({ isStatic: true }),

            "bottomwall"
        ])
         const player1score = add([
            text(playerscore),
            pos(100,100),
            anchor("topleft"),
            z(50),
            { update() { this.text = playerscore }},
        ])
        const player2score = add([
            text(playerscore2),
            pos(1800,100),
            anchor("topright"),
            z(100),
            { update() { this.text = playerscore2 }},
        ])

        onKeyDown("a", () =>{
            player1.move(0,SPEED)
        })
        onKeyDown("d", () =>{
            player1.move(0,-SPEED)
        })
        
        onKeyDown("left", () =>{
            player2.move(0,SPEED)
        })
        onKeyDown("right", () =>{
            player2.move(0,-SPEED)
        })
        onUpdate("ball", (ball) => {
          // console.log(dirnormal.y)
            ball.move((dirnormal.x * speed),(dirnormal.y) * speed)
            if(ball.isOffScreen() == true){
                if(ball.pos.x<0){
                    playerscore2++
                }
                else{
                    playerscore++
                }
                console.log(ball.pos)
                speed = 1300
                Getrandomdir()
                ball.pos = vec2(center().x,center().y)
              }
              if(playerscore>=3 || playerscore2>=3){
                go("menu")
              }
        })
        ball.onCollide("topwall", (topwall) => {
            dirnormal.y = dirnormal.y*(-1)
            speed = speed+20
            return
         })
         ball.onCollide("bottomwall", (topwall) => {
             dirnormal.y = dirnormal.y*(-1)
             speed = speed+20
             return
         })
         ball.onCollide("Player1", (topwall) => {
             dirnormal.x = dirnormal.x*(-1)
             speed = speed+20
             return
          })
          ball.onCollide("Player2", (topwall) => {
              dirnormal.x = dirnormal.x*(-1)
              speed = speed+20
              return
        })    
        function Getrandomdir() {
             dir = new vec2(rand(-1,1),rand(-1,1))
             dirnormal = dir.unit();
        }
    }
    
}
export const GameSceneInst =  new GameScene();