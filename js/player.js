class Player {
    constructor() {
        this.width = 48
        this.height = 48
        this.x = 100
        this.y = 300
        this.image
    }
  
    draw() {
        image(this.image, this.x, this.y, this.width, this.height)
    }
    
      moveUp() {
        this.y -= 40
        this.image = this.imageup
      }
    
      moveDown() {
        this.y += 40
        this.image = this.imagedown
      }

      moveRight() {
        this.x += 40
        this.image = this.imageright
      }
    
      moveLeft() {
        this.x -= 40
        this.image = this.imageleft
      }
  
    // shoot() {
  
    // }
  }