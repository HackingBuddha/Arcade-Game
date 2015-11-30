// Enemies our player must avoid
var Enemy = function(xpos, ypos, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = xpos;
    this.y = ypos;
    this.speed = speed;
    this.random = Math.random()
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.random*this.speed*dt;
    
    // Change of the enemy lanes and speeds upon them reapearing on the game board
    if (this.x > 500) {

        // Change the speed of the enemy
        var randomSpeedChange = Math.random();
        this.speed = randomSpeedChange*this.speed*3;

        if (this.speed < 100) {
            this.speed = 100;
        }

        if (this.speed > 500) {
            this.speed = 500
        }
        
        // Change the lane of the enemy
        var randomLaneChange = Math.random();

        if (randomLaneChange <= 0.33) {
            this.y -= 93;
            if (this.y <= 62) {
                this.y = 62;
            }
        }

        else if (randomLaneChange > 0.66) {
            this.y += 93;
            if (this.y >= 228) {
                this.y = 228;
            }
        }

        // Reset the enemy on the left of the game board
        this.x = -100;
    }

    // Player Enemy collision and reset of the player
    if (this.x === player.x) {
        player.x = 202;
        player.y = 400;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    
    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 400;
};

Player.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function() {

    if (this.y < 50) {
        this.x = 202;
        this.y = 400;  
    }
};

Player.prototype.handleInput = function(key) {
    
    if (key === 'left') {
        this.x -= 101;
    }
    
    else if (key === 'right') {
        this.x += 101;
    }

    else if (key === 'up') {
        this.y -= 83;
    }

    else if (key === 'down') {
        this.y += 83;
    }

    if (this.x > 400) {
        this.x = 400;
    }

    else if (this.x < 0) {
        this.x = 0;
    }

    else if (this.y > 400) {
        this.y = 400;
    }

    else if (this.y < 0) {
        this.y = 0;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();

var allEnemies = [new Enemy(0,62,300), new Enemy(0,145,500), new Enemy(0,228,400)];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {

    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
