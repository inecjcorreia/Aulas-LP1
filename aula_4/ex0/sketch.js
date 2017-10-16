
var frase;
function setup() 
{
  createCanvas (windowWidth, windowHeight);

  frase ="olá mundo!!!"
}


function draw() 
{
  background(255);
  textAlign(CENTER, CENTER);
  textFont("Modak");
  textSize(50);
  textLeading(200);
  text(frase, width/2, height/2, 50);
 }



function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight)
}
