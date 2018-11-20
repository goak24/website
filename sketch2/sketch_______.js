function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(255);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  if (mouseY<455){
  rect(mouseX, 0, 455, 445);}

  fill(255, 255, 255);
  rect(0, 0, 126, 180);

  fill(0);
  rect(126, 0, 19, 600);
  //rect(413, 0, 15, 600);



  fill(0);
  stroke(0);
  rect(0, 180, 126, 33);
  rect(0, 180, 126, 33);



  fill(0);
  rect(0, 445, 600, 19);
  
  fill(0, 0, 255);
  stroke(0, 0, 255);
  rect(0, 464, 126, 136);
  //rect(423,0,126,445);
if ((mouseY>455)&&(mouseY<600)&&(mouseX>0)&&(mouseX<136)){
  fill(random(255), random(255),random(255));
  stroke(0, 0, 255);
  rect(0, 464, 126, 136); 
}
  fill(0);
  stroke(0);
  rect(533, 464, 19, 136);

  fill(0);
  stroke(0);
  rect(552, 520, 48, 24);
  //rect(420, 90, 190, 23);

  fill(255);
  //rect(420, 0, 179, 90);

  fill(255, 255, 0);
  stroke(255, 255, 0);
  rect(552, 544, 48, 56);
  noStroke();
  fill(255);
  //rect(145, 183, 268, 262);
}
