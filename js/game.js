class Game {
  constructor() {
    this.player = new Player()
    this.opponents = []
  }

  preload() {
    this.player.image = loadImage("../assets/images/player/TanyaDown.png")
    this.player.imagedown = loadImage("../assets/images/player/TanyaDown.png")
    this.player.imageup = loadImage("../assets/images/player/TanyaUp.png")
    this.player.imageleft = loadImage("../assets/images/player/TanyaLeft.png") 
    this.player.imageright = loadImage("../assets/images/player/TanyaRight.png") 
    this.player.gun = loadImage("../assets/images/player/gun.png")
    this.player.bulletImage = loadImage("../assets/images/player/bullet.png")

    this.opponents.image = loadImage("../assets/images/opponents/Gay1Down.png")
  }

  draw() {
    clear()
    this.player.draw()

    // Bullets

    this.player.bullets.forEach(bullet => {
      bullet.draw()
    })

    this.player.bullets = this.player.bullets.filter(bullet => {
      if (bullet.collision(this.opponents[0]) || bullet.x > 1000) {
          return false // false bc should not be in the array
      } else {
          return true // rest should be in the array
      }
    })

    // Opponents

    if (this.opponents.length === 0) {
      this.opponents.push(new Opponents(this.opponents.image))
    }

    this.opponents.forEach(opponent => {
      opponent.draw()
    })
}
}