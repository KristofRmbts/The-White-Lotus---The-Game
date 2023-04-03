class Bullet {
    constructor(image) {
      this.image = image
      this.x = game.player.x + 32
      this.y = game.player.y + 24
      this.width = 30
      this.height = 10
      this.velocity = 10
      this.level = 0
    }
  
    draw() {
        this.x += this.velocity
        image(this.image, this.x, this.y, this.width, this.height)
    }

    collision(opponentInfo) {
        // Get the middle of the obstacle
        let bulletX = this.x + this.width/2
        let bulletY = this.y + this.height/2

        // Get the middle of the player
        let opponentX = opponentInfo.x + opponentInfo.width/2
        let opponentY = opponentInfo.y + opponentInfo.height/2

        // dist(x1, y1, x2, y2) returns the distance between the objects
        if (dist(opponentX, opponentY, bulletX, bulletY) > 25) {
            return false
        } else {
            return true 
        }
    }
}