class Opponents {
    constructor(image) {
      this.image = image
      this.x = random(350, 600)
      this.y = random(100, 450)
      this.width = 48
      this.height = 48
      this.velocity = 10
      this.level = 0 
    }
  
    draw() {
      this.y -= this.velocity
      image(this.image, this.x, this.y, this.width, this.height)

      if (this.y < 100 || this.y > 500-this.height) {
            this.velocity = -this.velocity
        }
    }
  }