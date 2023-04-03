class Opponents {
    constructor(image) {
      this.image = image
      this.x = random(300, 900)
      this.y = random(100, 530)
      this.width = 48
      this.height = 48
      this.velocity = 10
      this.level = 0 
    }
  
    draw() {
      this.y -= this.velocity
      image(this.image, this.x, this.y, this.width, this.height)

      if (this.y < 0 || this.y > 600-this.height) {
            this.velocity = -this.velocity
        }
    }
  }