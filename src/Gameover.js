class gameover{
    Displaygameover(){
        add ([
            sprite("menubackground"),
        ])
        add ([
            sprite("Logo"),
            area(),
            anchor("center"),
            pos(center().x,center().y),
            scale(0.75)
        ])
    }
}

export const gameoverinst = new gameover();