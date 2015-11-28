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
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = (this.x + 101)*dt;
    if (player.x this.x )
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
    this.x = 210;
    this.y = 450;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function(dt) {

};

Player.prototype.handleInput = function(keycode, dt) {
    if (keycode === 'left' && this.x !== 0) {
        this.x = (this.x - 101)*dt;
    }
    else if (keycode === 'right' && this.x !>= 404) {
        this.x = (this.x + 101)*dt;
    }
    else if (keycode === 'down' && this.y !>= 450) {
        this.y = (this.y + 93)*dt;
    }
    else if (keycode === 'up' && this.y !== 0) {
        this.y = (this.y - 93)*dt;
    }

    if (this.y >= 93) {
        this.x = 210;
        this.y = 450;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
allEnemies[1] = new Enemy(0,95,200);
allEnemies[2] = new Enemy(0,188,100);
allEnemies[3] = new Enemy(0,281,50);
var player = new Player();

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
