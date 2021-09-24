/*
?REMINDERS ABOUT CANVAS ELEMENT : 
*The HTML element canvas is used to draw graphics on a web page
*It is only a container for graphics. You must use JavaScript to actually draw the graphics.
*It has several methods for drawing paths,boxes, circles, text and adding images
*A canvas is a rectangular area on an HTML page. By default, a canvas has no border and no content.
i<canvas id="myCanvas" width="200" height="100"></canvas>
!Note: Always specify an id attribute (to be referred to in a script), and a width and height attribute to define the size of the canvas. To add a border, use the style attribute.
*Canvas have a strong API for drawing graphics via Javascript & the HTML <canvas> element.
i<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas> 
def There are four ways to draw things on the web: Canvas, SVG, CSS, and direct DOM animation.
def with Canvas API we mean 2D API there also a 3D  API called WebGL
*/

//During this project i will deal with drawing and animations via Canvas

window.onload = function () {
  var canvas;
  var ctx;
  var delay = 50;
  var xCoord = 0;
  var yCoord = 0;

  init();

  function init() {
    canvas = document.createElement("Canvas");
    canvas.width = 1000;
    canvas.height = 600;
    canvas.style.border = "3px solid";
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    refreshCanvas();
  }

  function refreshCanvas() {
    xCoord += 2;
    yCoord += 5;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff0000";
    ctx.fillRect(xCoord, yCoord, 100, 50);
    setTimeout(refreshCanvas, delay);
  }

  /*
How do we can use the DOM ?
 // run this function when the document is loaded
       window.onload = function() {

         // create a couple of elements in an otherwise empty HTML page
         const heading = document.createElement("h1");
         const heading_text = document.createTextNode("Big Head!");
         heading.appendChild(heading_text);
         document.body.appendChild(heading);
      }
*/
};
