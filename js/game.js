let bg

class Game {
  constructor() {
    this.player = new Player()
    this.opponents = []
    this.level = 4
  }

  preload() {
    bg = loadImage('../assets/images/backgrounds/ship.png');

    this.player.image = loadImage("../assets/images/player/TanyaRight.png")
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
    background(bg);
    this.player.draw()

    // Bullets

    this.player.bullets.forEach(bullet => {
      bullet.draw()
    })

    this.player.bullets.forEach((bullet, bulletIndex) => {
      this.opponents.forEach((opponent, opponentIndex) => {
        if (bullet.collision(opponent)) { 
          this.opponents.splice(opponentIndex, 1)
          this.player.bullets.splice(bulletIndex, 1)
        } 
        if (bullet.x > 610) {
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
      this.opponents.push(new Opponents(this.image1), new Opponents(this.image2));
      document.querySelector("#bg").innerHTML = `<img src="../assets/images/backgrounds/level2background.png" class="stretch" alt="" />` 
    } else if (this.level === 3 &&  this.opponents.length === 0) {
      this.opponents.push(new Opponents(this.image1), new Opponents(this.image2), new Opponents(this.image3));
      document.querySelector("#bg").innerHTML = `<img src="../assets/images/backgrounds/level3background.jpeg" class="stretch" alt="" />` 
    } else if (this.level === 4 &&  this.opponents.length === 0) {
      this.opponents.push(new Opponents(this.image1), new Opponents(this.image2), new Opponents(this.image3), new Opponents(this.image4));
      document.querySelector("#bg").innerHTML = `<img src="../assets/images/backgrounds/level4background.jpg" class="stretch" alt="" />` 
    } else if (this.level === 5 &&  this.opponents.length === 0) {
      this.opponents.push(new Opponents(this.image1), new Opponents(this.image2), new Opponents(this.image3), new Opponents(this.image4), new Opponents(this.image5))
    }

    this.opponents.forEach(opponent => {
      opponent.draw()
    })
}
}