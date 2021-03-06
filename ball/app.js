const ctx = document.getElementById("canvas").getContext("2d");

const circle = {
  x: 200,
  y: 200,
  size: 30, //radius
  dx: 5,
  dy: 4,
};

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
  ctx.fillStyle = "coral";
  ctx.fill();
}

function update() {
  //clear entire thing on canvas and draw
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();

  //change position
  circle.x += circle.dx;
  circle.y += circle.dy;

  //Detect side walls
  if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
    circle.dx *= -1;
  }

  //Detect top and bottom walls
  if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
    circle.dy *= -1;
  }

  requestAnimationFrame(update);
}

update();
