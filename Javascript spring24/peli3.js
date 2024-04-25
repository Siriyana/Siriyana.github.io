/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 10;
const enemiesArray = [];


let gameFrame = 0;

class Enemy1 {
    constructor(){
        this.image = new Image();
        this.image.src = 'enemies/enemy1.png';
        //this.speed = Math.random() * 4 - 2; //random number between -2 to 2 (0-2 4-2)
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;       
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);  //randomize the starting point of enemy, but - this.width makes sure it is inside canvas
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 +1);
    }
    //method to define where enemy spawns and at what speed and direnction it goes
    update() {
        this.x += Math.random() * 3 - 1.5;
        this.y += Math.random() * 3 -1.5;
        //animate sprites
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
        
    }
    //draws enemy
    draw(){
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
};

class Enemy2 {
    constructor(){
        this.image = new Image();
        this.image.src = 'enemies/enemy2.png';
        this.speed = Math.random() * 4 - 6; //random number between -2 to 2 (0-2 4-2)
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth / 2.5;       
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);  //randomize the starting point of enemy, but - this.width makes sure it is inside canvas
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 +1);
    }
    //method to define where enemy spawns and at what speed and direnction it goes
    update() {
        this.x += this.speed;
        //this.y += Math.random() * 3 -1.5;
        if (this.x + this.width < 0) this.x = canvas.width;
        //animate sprites
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
        
    }
    //draws enemy
    draw(){
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
};

//create enemies and save them to array
for (let i = 0; i < numberOfEnemies; i++){
    enemiesArray.push(new Enemy2());     //created enemies are pushed to array
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();