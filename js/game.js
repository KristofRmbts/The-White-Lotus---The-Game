let bg
let tanyaQuote

class Game {
  constructor() {
    this.player = new Player()
    this.opponents = []
    this.level = 1
  }

  preload() {
    bg = loadImage('../assets/images/backgrounds/ship.png')
    tanyaQuote = loadSound('../assets/audio/Please, these gays are trying to murder me!.mp3');;

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

    popUpMessage()
  }

  draw() {
    clear()
    background(bg);
    this.player.draw()
    this.opponents.forEach(opponent => {
      opponent.draw()
    })

    // Pop-Up Message between levels
    // Spawn Opponents per level
    // Redirect after final level

    if (this.level === 1 && this.opponents.length === 0) {
      tanyaQuote.play();
      this.level++
    }
    
    if (this.level === 2 && this.opponents.length === 0 && keyCode === 83) {
      this.opponents.push(new Opponents(this.image1));
      document.querySelector(".popUp").style.display = "none";
      this.level++
    }
    
    if (this.level === 3 && this.opponents.length === 0) {
      document.querySelector(".popUp").style.display = "block"
      if (keyCode === 83) {
        this.opponents.push(new Opponents(this.image1), new Opponents(this.image2));
        document.querySelector(".popUp").style.display = "none";
        document.querySelector("#bg").innerHTML = `<img src="../assets/images/backgrounds/level2background.png" class="stretch" alt="" />`;
        this.level++ 
      }
    }
    
    if (this.level === 4 && this.opponents.length === 0) {
      document.querySelector(".popUp").style.display = "block"
      if (keyCode === 83) {
      this.opponents.push(new Opponents(this.image1), new Opponents(this.image2), new Opponents(this.image3));
      document.querySelector(".popUp").style.display = "none";
      document.querySelector("#bg").innerHTML = `<img src="../assets/images/backgrounds/level3background.jpeg" class="stretch" alt="" />`;
      this.level++
      console.log(this.level)
      }
    }

    if (this.level === 5 && this.opponents.length === 0)  {
      document.querySelector(".popUp").style.display = "block"
      if (keyCode === 83) {
      this.opponents.push(new Opponents(this.image1), new Opponents(this.image2), new Opponents(this.image3), new Opponents(this.image4));
      document.querySelector(".popUp").style.display = "none";
      document.querySelector("#bg").innerHTML = `<img src="../assets/images/backgrounds/level4background.jpg" class="stretch" alt="" />`;
      this.level++
      }
    }

    if (this.level === 6 && this.opponents.length === 0) {
      document.querySelector(".popUp").style.display = "block"
      if (keyCode === 83) {
      this.opponents.push(new Opponents(this.image1), new Opponents(this.image2), new Opponents(this.image3), new Opponents(this.image4), new Opponents(this.image5))
      document.querySelector(".popUp").style.display = "none";
      this.level++
      }
    }

    if (this.level === 7 && this.opponents.length === 0) {
      window.location.replace("../html/gameover.html");
    }

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
}
}

function popUpMessage() {
  let div = document.createElement('div')
  div.className = "popUp"

  div.innerHTML = `<h1 class="level">Objective</h1><span class="popUpText">SAVE TANYA FROM THE GAYS!</span><br><br><span class="popUpStart">PRESS S TO START!</span>`

  console.log(game.level)

  let parent = document.querySelector('body');
  parent.appendChild(div);
}