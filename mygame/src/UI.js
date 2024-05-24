class UI{

    DisplayBlinkingmessage(Text, position){
        const PressStartText = add([
        text(Text, {size: 50,font: "arial", color:"white" }), 
        area(),
        anchor("center"),
        pos(position),
        opacity(),
        state("flash-up",["flash-up","flash-down"])
        ])
        PressStartText.onStateEnter("flash-up", async () => {
        await tween(PressStartText.opacity,0,0.5, (Nextopacityvalue) => PressStartText.opacity = Nextopacityvalue, easings.linear ),
        PressStartText.enterState("flash-down")
        })
        PressStartText.onStateEnter("flash-down", async () =>{
        await tween(PressStartText.opacity,1,0.5, (Nextopacityvalue) => PressStartText.opacity = Nextopacityvalue, easings.linear ),
        PressStartText.enterState("flash-up")
        })
    }
    DisplayMainmenu(){
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
        this.DisplayBlinkingmessage("Press Enter To Start!!", vec2(center().x, center().y +300)),
        onKeyPress("enter", () =>{
            go("game")
        })
    }

}
export const UIInstance = new UI();