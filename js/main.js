const game = new Game()

function preload() {
    game.preload()
}

function setup() {
    createCanvas(1000, 600)
}

function draw() {
    game.draw()
    fill("white")
    rect(840, 520, 150, 70)
    textSize(12)
    fill("black")
    text("CONTROLS:", 846, 538)
    textSize(10)
    text("↑, ↓, →, ←            MOVE", 846, 558)
    text("space                    SHOOT", 846, 578)
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

    if (keyCode === 32 && game.player.bullets.length < 2) {
        game.player.bullets.push(new Bullet(game.player.bulletImage))
      }
  }