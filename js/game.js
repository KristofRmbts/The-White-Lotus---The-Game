class Game {
  constructor() {
    this.player = new Player()
  }

  preload() {
    this.player.image = loadImage("../assets/images/player/TanyaDown.png")
    this.player.imagedown = loadImage("../assets/images/player/TanyaDown.png")
    this.player.imageup = loadImage("../assets/images/player/TanyaUp.png")
    this.player.imageleft = loadImage("../assets/images/player/TanyaLeft.png") 
    this.player.imageright = loadImage("../assets/images/player/TanyaRight.png") 
  }

  draw() {
    clear()
    this.player.draw()
}
}