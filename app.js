canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

function uploadimage() {
  bird_pic = new Image();
  bird_pic.src = "bird.png";
}

function init() {
  score = 0;
  //obstacles description
  pilars = [
    pilar1 = {
      x: 10,
      y: 100,
      w: 20,
      h: 10
    },
    pilar2 = {
      x: 55,
      y: 140,
      w: 20,
      h: 10
    },
    pilar3 = {
      x: 170,
      y: 60,
      w: 20,
      h: 10
    },
    pilar4 = {
      x: 250,
      y: 70,
      w: 20,
      h: 10
    },
    pilar5 = {
      x: 120,
      y: 0,
      w: 20,
      h: 10
    },
    pilar6 = {
      x: 210,
      y: 0,
      w: 20,
      h: 30
    },
    pilar7 = {
      x: 30,
      y: 0,
      w: 20,
      h: 60
    },
    pilar8 = {
      x: 150,
      y: 40,
      w: 20,
      h: 10
    },
    pilar9 = {
      x: 90,
      y: 80,
      w: 20,
      h: 10
    },
    pilar10 = {
      x: 160,
      y: 120,
      w: 20,
      h: 10

    },
    pilar11 = {
      x: 110,
      y: 130,
      w: 20,
      h: 10

    },
  ];
  //bird's descriotion
  bird = {
    x: 120,
    y: 60,
    w: 10,
    h: 10
  }
}
//function to move the bird naturally to control the movement of obstacles and to control the gameover logic
function update() {
  //movement of obstacles
  for (var i = 0; i < pilars.length; i++) {
    pilars[i].x -= 0.5;
    if (pilars[i].x <= 0) {
      pilars[i].x = canvas.width;
    }
  }
  //birds narural moveent
  bird.y += 0.2;
  //game over logic
  for (var i = 0; i < pilars.length; i++) {
    if (isColide(pilars[i], bird)) {
      clearInterval(f);
      // alert("The game is over and your score is "+score+"press ctrl+R or refresh the page to play the game again");
      document.getElementById("gameover-massage").innerHTML = "Game over  :-(";
    }
  }
  if (bird.y <= 0 || bird.y >= canvas.height) {
    clearInterval(f);
    // alert("The game is over and your score is "+score+"press ctrl+R or refresh the page to play the game again");
    document.getElementById("gameover-massage").innerHTML = "Game over  :-(";
  }
}
//draw function to draw the game screen
function draw() {
  for (var i = 0; i < pilars.length; i++) {
    ctx.fillStyle = "brown";
    ctx.fillRect(pilars[i].x, pilars[i].y, pilars[i].w, pilars[i].h);

  }
  ctx.drawImage(bird_pic, bird.x, bird.y, bird.w, bird.h);
  score += 1;
  ctx.fillStyle = "black";
  ctx.fillText(score, 10, 10);

}
//the main loop of the game
function gameloop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //to clear the previous screen
  draw();
  update();
}

//To control the birds movement by the player
document.addEventListener("click", () => {
  // console.log("I got clicked");
  bird.y -= 10;
});

function up() {
  // console.log("I got clicked");
  bird.y -= 10;
}
//function to check the the collision happend or not
function isColide(b1, b2) {
  if (Math.abs((b2.x - b1.x)) < b2.w && Math.abs((b1.y - b2.y)) < b1.h)
    return true;
  else false;
}
// the function calls to start the game
init();
uploadimage();
var f = setInterval(gameloop, 20);
