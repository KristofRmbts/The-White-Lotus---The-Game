class Player {
    constructor() {
        this.width = 48
        this.height = 48
        this.x = 230
        this.y = 260
        this.image
        this.gun
        this.bullets = []
        this.bulletImage
    }
  
    draw() {
        image(this.image, this.x, this.y, this.width, this.height)
        image(this.gun, this.x+32, this.y+24, 32, 16)
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
        this.image = this.imageright
      }
    }