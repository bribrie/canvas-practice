const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Arc (circles)
ctx.beginPath();
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

//* Draw head
//arc(x, y, radius, startAngle, endAngle, anticlockwise);
ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

//* Move to mouth
ctx.moveTo(centerX + 100, centerY);

//* Draw mouth
ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

//* Move left eye
ctx.moveTo(centerX - 60, centerY - 80);

//* Draw left eye
ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

//* Move right eye
ctx.moveTo(centerX + 100, centerY - 80);

//* Draw right eye
ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);
ctx.stroke();
