var drawing = [];
var currentPath = [];
var database;
var isDrawing = false;
var h = 0, u = 0; e = 0;
// Creating the red green blue colour
var r = 0;
var g = 0;
var b = 0;



// Calling the function setup
function setup() {

  // Adding database
  database = firebase.database();

  // Creating the canvas
  var canvas = createCanvas(800, 500);

  // Starting the drawing
  canvas.mousePressed(startPath);
  canvas.parent('canvascontainer');

  // Ending the drawing
  canvas.mouseReleased(endPath);
}



// Calling the main part of the code
function draw() {
  
  // Colouring the background
  background(r,g,b);

  // Changing the value of Red based on the mouse movement about the X ang Y axis
  r = map(mouseX,0,1366,0,255);
  r = map(mouseY,0,625,0,255);

  // Changing the value of Green based on the mouse movement about the X and Y axis
  g = map(mouseX,0,1366,0,255);
  g = map(mouseY,0,625,0,255);
  
  // Changing the value of Blue based on the mouse movement about the X axis
  b = map(mouseX,0,1366,0,255);

  // Adding the point to current path if the isDrawing is true
  if(isDrawing === true) {
    var point = {
      x: mouseX,
      y: mouseY
    }
    currentPath.push(point);
  }

  // Changing the stroke and stroke Weight according to the keys pressed
  if(keyCode === 82) {
    stroke("red");
    strokeWeight(6);
  }else if(keyCode === 71) {
    stroke("green");
    strokeWeight(8);
  }else if(keyCode === 89) {
    stroke("yellow");
    strokeWeight(10);
  }else if(keyCode === 66) {
    stroke("blue");
    strokeWeight(4);
  }else if(keyCode === 87) {
    stroke("white");
    strokeWeight(6);
  }else if(keyCode === 79) {
    stroke("orange");
    strokeWeight(8);
  }else if(keyCode === 85) {
    stroke("purple");
    strokeWeight(10);
  }else if(keyCode === 80) {
    stroke("pink");
    strokeWeight(8);
  }else if(keyCode === 76) {
    stroke("black");
    strokeWeight(7);
  }
  
  // Displaying the drawing
  for(var i = 0; i < drawing.length; i++) {
    var path = drawing[i];
    beginShape();
    noFill();
    for(var j = 0; j < path.length; j++) {
      vertex(path[j].x,path[j].y);
    }
    endShape();
  }
}




// Starting the drawing
function startPath() {
  isDrawing = true;
  currentPath = [];
  drawing.push(currentPath);
}



// Ending the drawing
function endPath() {
  isDrawing = false;
}