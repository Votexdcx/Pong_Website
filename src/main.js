import kaboom from "../node_modules/kaboom/dist/kaboom.mjs";
import { GameSceneInst } from "./GameScene.js";
import { loadSpriteclass } from "./LoadSprites.js";
import { UIInstance } from "./UI.js";
kaboom({
	width: 1920,
	height: 1080,
	letterbox: true,
	canvas: document.querySelector("#mycanvas")
})
loadSpriteclass.Sprites()
loadSpriteclass.Font()

const scenes = {
	menu: () => {
		UIInstance.DisplayMainmenu()
	},
	game: () =>{
		GameSceneInst.Level1();
	},
	gameover: () =>{
	} 
}
for(const key in scenes){
	scene(key, scenes[key])
}
go("menu")



