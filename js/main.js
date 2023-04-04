let myFont

const game = new Game()

function preload() {
    myFont = loadFont("../assets/monogram.ttf")
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
      game.player.moveUp()
    }
  
    if (keyCode === 40) { // Moves down
      game.player.moveDown()
    }

    if (keyCode === 37) { // Moves to the left
        game.player.moveLeft()
    }
    
    if (keyCode === 39) { // Moves to the right
        game.player.moveRight()
    }

    if (keyCode === 32 && game.player.bullets.length < 5000) {
        game.player.bullets.push(new Bullet(game.player.bulletImage))
      }
  }