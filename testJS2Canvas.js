//i draw a circle & a line
//! We have to add the canvas element in the HTML <canvas id="" height="" with=" " style=""></canvas>
window.onload = function () {
  var c = document.getElementById("testCanvas");
  var ctx = c.getContext("2d");
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 400);
  ctx.stroke();

  var c = document.getElementById("testCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(160, 200, 60, 0, 2 * Math.PI);
  ctx.stroke();
};
