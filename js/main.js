let myFont
let mySound

const game = new Game()

function preload() {
    myFont = loadFont("../assets/monogram.ttf")
    soundFormats('mp3', 'ogg');
    mySound = loadSound('../assets/audio/pistol.wav');
    game.preload()
}

function setup() {
    createCanvas(1000, 600)
}

function draw() {
    game.draw()
    // Pop-Up screen
    

    // Game controls
    fill("white")
    rect(840, 520, 150, 70)
    textFont(myFont)
    textStyle(BOLD)
    textSize(20)
    fill("black")
    text("CONTROLS:", 846, 538)
    textSize(16)
    text("^, v, >, <       MOVE", 846, 558)
    text("space            SHOOT", 846, 578)
}

function keyPressed() {
    if (keyCode === 38) { // Moves up
        if (game.player.y > 150) {
            game.player.moveUp()
        }
    }
  
    if (keyCode === 40) { // Moves down
        if (game.player.y < 350) {
      game.player.moveDown()
        }
    }

    if (keyCode === 37) { // Moves to the left
        if (game.player.x > 230) {
        game.player.moveLeft()
        }
    }
    
    if (keyCode === 39) { // Moves to the right
        if (game.player.x < 300) {
        game.player.moveRight()
        }
    }

    if (keyCode === 32 && game.player.bullets.length < 1) {
        game.player.bullets.push(new Bullet(game.player.bulletImage));
        mySound.play()
      }
  }