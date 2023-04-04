class Game {
  constructor() {
    this.player = new Player()
    this.opponents = []
    this.level = 1
  }

  preload() {
    this.player.image = loadImage("../assets/images/player/TanyaDown.png")
    this.player.imagedown = loadImage("../assets/images/player/TanyaDown.png")
    this.player.imageup = loadImage("../assets/images/player/TanyaUp.png")
    this.player.imageleft = loadImage("../assets/images/player/TanyaLeft.png") 
    this.player.imageright = loadImage("../assets/images/player/TanyaRight.png") 
    this.player.gun = loadImage("../assets/images/player/gun.png")
    this.player.bulletImage = loadImage("../assets/images/player/bullet.png")

    this.image1 = loadImage("../assets/images/opponents/Gay1Down.png")
    this.image2 = loadImage("../assets/images/opponents/Gay2Down.png")
    this.image3 = loadImage("../assets/images/opponents/Gay3Down.png")
    this.image4 = loadImage("../assets/images/opponents/Gay4Down.png")
    this.image5 = loadImage("../assets/images/opponents/Gay5Down.png")
  }

  draw() {
    clear()
    this.player.draw()

    // Bullets

    this.player.bullets.forEach(bullet => {
      bullet.draw()
    })

    // this.player.bullets = this.player.bullets.filter(bullet => {
    //   this.opponents.forEach((opponent, index) => {
    //     console.log(bullet.collision(opponent))
    //     if (bullet.collision(opponent)) { 
    //       this.opponents.splice(index, 1)
    //       return false // false bc should not be in the array
    //     } if (bullet.x > 1000) {
    //     return false
    //     }
    //     })
    //   return true
    // })

    this.player.bullets.forEach((bullet, bulletIndex) => {
      this.opponents.forEach((opponent, opponentIndex) => {
        if (bullet.collision(opponent)) { 
          this.opponents.splice(opponentIndex, 1)
          this.player.bullets.splice(bulletIndex, 1)
        } 
        if (bullet.x > 1000) {
          this.player.bullets.splice(bulletIndex, 1)
        }
        })
    })

    // Next level

    // if (frameCount % 2 === 0) {
    //   if (this.opponents.length === 0) {
    //     this.level++
    //   }
    // }

    // Opponents

    if (this.level === 1 && this.opponents.length === 0) {
      this.opponents.push(new Opponents(this.image1))
    } else if (this.level === 2 && this.opponents.length === 0) {
      this.opponents.push(new Opponents(this.image1), new Opponents(this.image2))
    } else if (this.level === 3 &&  this.opponents.length === 0) {
      this.opponents.push(new Opponents(this.image1), new Opponents(this.image2), new Opponents(this.image3))
    } else if (this.level === 4 &&  this.opponents.length === 0) {
      this.opponents.push(new Opponents(this.image1), new Opponents(this.image2), new Opponents(this.image3), new Opponents(this.image4))
    } else if (this.level === 5 &&  this.opponents.length === 0) {
      this.opponents.push(new Opponents(this.image1), new Opponents(this.image2), new Opponents(this.image3), new Opponents(this.image4), new Opponents(this.image5))
    }

    this.opponents.forEach(opponent => {
      opponent.draw()
    })
}
}