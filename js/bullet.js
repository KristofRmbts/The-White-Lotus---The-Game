class Bullet {
    constructor(image) {
      this.image = image
      this.x = game.player.x + 32
      this.y = game.player.y + 24
      this.width = 30
      this.height = 10
      this.velocity = 2
    }
  
    draw() {
        this.x += this.velocity
        image(this.image, this.x, this.y, this.width, this.height)
    }
}