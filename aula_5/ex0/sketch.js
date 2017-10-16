

function setup() 
{
  createCanvas (windowWidth, windowHeight);

background(360, 0, 0);
}
function draw() 
{
  noStroke();

  ifif (mouseX>0 && mouseX<width/2 
    && mouseY>0 && mouseY<height/2)
    {
      fill(360, 0, 0, 5);
    }
    
   
    {
      noFill();
    }
    rect(0, 0, width/2, hieght/2);
}

{
function windowResized() 

  resizeCanvas (windowWidth, windowHeight);
}
