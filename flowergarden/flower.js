size(500, 500);

/*************
*OBJECT TYPES
**************/
/*********************
*Ground Object Type
**********************/
var Ground = function (x, y, height) {
  this.x = x;
  this.y = y;
  this.height = height;
}

Ground.prototype.draw = function () {
  noStroke();
  fill(153, 102, 51);
  rect(this.x, this.y, width, this.height);
}

/*********************
*Grass Object Type
**********************/
var Grass = function (x, y) {
  this.x = x;
  this.y = y;
}

Grass.prototype.draw = function () {
  fill(0, 153, 51);
  var x = this.x;
  var y = this.y;
  triangle(x - 15, y, x + 20, y, x - 20, y - 30);
  triangle(x - 15, y, x + 25, y, x + 5, y - 40);
  triangle(x + -5, y, x + 25, y, x + 30, y - 35);
}

/*********************
*Sun Object Type
**********************/
var Sun = function (x, y) {
  this.x = x;
  this.y = y;
}

Sun.prototype.draw = function () {
  noStroke();
  fill(255, 51, 0);
  var x = this.x;
  var y = this.y;
  ellipse(x, y, 150, 150);
}

/*********************
*Cloud Object Type
**********************/
var Cloud = function (x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed * 0.2;
}

Cloud.prototype.draw = function () {
  noStroke();
  fill(102, 153, 153);
  var x = this.x;
  var y = this.y;
  ellipse(x, y, 100, 50);
  ellipse(x, y + 20, 70, 50);
  ellipse(x, y - 20, 70, 50);
}

Cloud.prototype.animation = function () {
  this.x += this.speed;
  if (this.x > 500) this.x = 0;
}
/*********************
*House Object Type
**********************/
var House = function (x, y) {
  this.x = x;
  this.y = y;
}

House.prototype.draw = function () {
  fill(153, 153, 102);
  var x = this.x;
  var y = this.y;
  rect(x, y, 200, 200);
  fill(255, 153, 102);
  quad(x - 50, y, x, y - 50, 500, y - 50, 500, y);

  fill(255, 80, 80);
  for (var i = 0; i < 7; i++) {
    arc(x + i * 30, y - 35, 10, 10, 0, 180);
  }
  for (var i = 0; i < 8; i++) {
    arc(x - 10 + i * 30, y - 10, 10, 10, 0, 180);
  }

  fill(255, 204, 153);
  rect(x + 80, y + 100, 50, 100);
  rect(x + 150, y + 50, 40, 40);
  rect(x + 10, y + 50, 40, 40);
}

/******************
*Flower Object Type
*******************/
var Flower = function (x, y, height) {
  this.x = x;
  this.y = y;
  this.height = height;
}

Flower.prototype.growBy = function (amount) {
  this.height += amount;
}

/*****************
*Tulip Object Type
******************/
var Tulip = function (x, y, height) {
  Flower.call(this, x, y, height);
};

Tulip.prototype = new Flower();
Tulip.prototype.constructor = Tulip;
Tulip.prototype.draw = function () {
  noStroke();
  fill(16, 122, 12);
  rect(this.x, this.y, 10, -this.height);
  fill(255, 0, 0);
  // petals
  ellipse(this.x + 5, this.y - this.height, 44, 44);
  triangle(this.x - 16, this.y - this.height,
    this.x + 20, this.y - this.height,
    this.x - 20, this.y - this.height - 31);
  triangle(this.x - 14, this.y - this.height,
    this.x + 24, this.y - this.height,
    this.x + 3, this.y - this.height - 39);
  triangle(this.x + -4, this.y - this.height,
    this.x + 26, this.y - this.height,
    this.x + 29, this.y - this.height - 36);
};


/*********************
*SunFlower Object Type
**********************/
var Sunflower = function (x, y, height) {
  Flower.call(this, x, y, height);
};

Sunflower.prototype = new Flower();
Sunflower.prototype.constructor = Sunflower;
Sunflower.prototype.draw = function () {
  fill(16, 122, 12);

  rect(this.x, this.y, 10, -this.height);

  // petals
  stroke(0, 0, 0);
  fill(255, 221, 0);
  ellipse(this.x - 10, this.y - this.height, 20, 18);
  ellipse(this.x + 5, this.y - this.height - 15, 20, 18);
  ellipse(this.x + 5, this.y - this.height + 15, 20, 18);
  ellipse(this.x + 20, this.y - this.height, 20, 18);
  fill(20, 20, 20);
  ellipse(this.x + 5, this.y - this.height, 20, 20);
};

/*********************
*CircleFlower Object Type
**********************/
var CircleFlower = function (x, y, height, size) {
  Flower.call(this, x, y, height);
  this.size = size;
};

CircleFlower.prototype = new Flower();
CircleFlower.prototype.constructor = CircleFlower;
CircleFlower.prototype.draw = function () {
  noStroke();
  fill(16, 122, 12);
  rect(this.x, this.y, 10, -this.height + 20);

  fill(255, 102, 102);
  var angle = 2 * PI / 7;
  for (var i = 0; i < 7; i++) {
    ellipse(this.x + 5 + this.size * cos(angle * i), this.y + this.size * sin(angle * i) - this.height, this.size, this.size);
  }
};

/*********************
* Basic Object Type
**********************/
var BasicFlower = function (x, y, height) {
  Flower.call(this, x, y, height);
};

BasicFlower.prototype = new Flower();
BasicFlower.prototype.constructor = BasicFlower;
BasicFlower.prototype.draw = function () {
  //draw green stem
  strokeWeight(10);
  fill(16, 122, 12);
  rect(this.x, this.y, 10, -this.height + 20);


  //change stroke back to thin black line
  strokeWeight(1);
  stroke(0);

  //draw petals
  fill(204, 153, 255);
  ellipse(this.x - 15, this.y - this.height, 30, 30);
  ellipse(this.x + 20, this.y - this.height, 30, 30);
  ellipse(this.x + 5, this.y - this.height + 15, 30, 30);
  ellipse(this.x + 5, this.y - this.height - 15, 30, 30);

  //draw middle part
  fill(255, 128, 0);
  ellipse(this.x + 5, this.y - this.height, 30, 30);
};

/*********************
* WeirdFlower Object Type
**********************/
var WeirdFlower = function (x, y, height) {
  Flower.call(this, x, y, height);
};

WeirdFlower.prototype = new Flower();
WeirdFlower.prototype.constructor = WeirdFlower;
WeirdFlower.prototype.draw = function () {
  fill(16, 122, 12);
  rect(this.x, this.y, 10, -this.height);

  fill(255, 255, 255);
  ellipse(this.x + 5, this.y - this.height + 15, 15, 15);
  ellipse(this.x - 7, this.y - this.height + 8, 15, 15);
  ellipse(this.x - 11, this.y - this.height, 15, 15);
  ellipse(this.x - 7, this.y - this.height - 12, 15, 15);
  ellipse(this.x + 5, this.y - this.height - 15, 15, 15);
  ellipse(this.x + 15, this.y - this.height - 12, 15, 15);
  ellipse(this.x + 19, this.y - this.height - 2, 15, 15);
  ellipse(this.x + 17, this.y - this.height + 8, 15, 15);

  //draw middle part
  fill(0, 0, 0);
  ellipse(this.x + 5, this.y - this.height, 30, 30);
};

/**************
*MAIN PROGRAM
***************/

/** create object instances **/
var sun = new Sun(500, 0);

var clouds = [];
for (var i = 0; i < 5; i++) {
  clouds.push(new Cloud(Math.floor(random(0, 500)), Math.floor(random(0, 50)), Math.floor(random(1, 6))));
}

var ground = new Ground(0, 350, 150);

var grasses = [];
for (var i = 0; i < 10; i++) {
  grasses.push(new Grass(Math.floor(random(0, 250)), Math.floor(random(350, 500))));
}

var house = new House(300, 250);

var totalFlower = Math.floor(random(5, 11));
var posX = [20, 70, 120, 180, 225, 45, 85, 150, 200, 250];
var flowers = [];

for (var i = 1; i < totalFlower + 1; i++) {
  var index = Math.floor(random(0, posX.length + 1 - i));
  if (i % 5 == 0) {
    flowers.push(new Sunflower(posX[index], 390 + i / 5 * 50, 100));
  }
  if (i % 5 == 1) {
    flowers.push(new Tulip(posX[index], 390 + i / 5 * 50, 150));
  }
  if (i % 5 == 2) {
    flowers.push(new CircleFlower(posX[index], 390 + i / 5 * 50, 120, 15));
  }
  if (i % 5 == 3) {
    flowers.push(new BasicFlower(posX[index], 390 + i / 5 * 50, 180));
  }
  if (i % 5 == 4) {
    flowers.push(new WeirdFlower(posX[index], 390 + i / 5 * 50, 80));
  }
  posX[index] = posX[posX.length - i];
}

var drawScene = function () {
  background(207, 250, 255);
  sun.draw();
  for (var i = 0; i < clouds.length; i++) {
    clouds[i].draw();
    clouds[i].animation();
  }
  ground.draw();
  house.draw();
  for (var i = 0; i < grasses.length; i++) {
    grasses[i].draw();
  }
  for (var i = 0; i < flowers.length; i++) {
    flowers[i].draw();
  }
};

mouseClicked = function () {
  drawScene();
  for (var i = 0; i < flowers.length; i++) {
    flowers[i].growBy(Math.floor(random(5, 21)));
  }
};

drawScene();

draw = function () {
  drawScene();
}
