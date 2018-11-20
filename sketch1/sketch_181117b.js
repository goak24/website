var a;
var b;
var c;
function setup() {
  createCanvas(900, 900);
  background(222,118, 33);
}

function  draw() {
  a=mouseX/9;
  b=mouseY/9;
  c=(mouseX+mouseY)/9;
  noStroke();
  fill(a+147, b+83, c+155);
  beginShape();
  vertex(74, 74);
  vertex(381, 74);
  vertex(381, 184);
  vertex(304, 184);
  vertex(304, 246);
  vertex(74, 246);
  endShape(CLOSE);

  fill(255, 255, 255);
  beginShape();
  vertex(384, 873);
  vertex(620, 76);
  vertex(729, 217);
  vertex(859, 230);
  vertex(848, 331);
  vertex(784, 668);
  vertex(581, 628);
  vertex(598, 698);
  vertex(606, 854);
  vertex(281, 842);
  vertex(274, 872);
  vertex(204, 872);
  vertex(79, 837);
  vertex(149, 437);
  vertex(74, 430);
  vertex(69, 248);
  vertex(301, 248);
  vertex(301, 185);
  vertex(381, 184);
  vertex(381, 84);
  vertex(628, 75);
  endShape(CLOSE);

  fill(a+67, b+112, c+54);
  beginShape();
  vertex(582, 81);
  vertex(836, 64);
  vertex(843, 340);
  vertex(595, 272);
  endShape(CLOSE);

  fill(a+61, b+54, c+62);
  beginShape();
  vertex(403, 78);
  vertex(606, 216);
  vertex(511, 349);
  vertex(329, 219);  
  endShape(CLOSE); 

  fill(a+108, b+50, c+86);
  beginShape();
  vertex(98, 277);
  vertex(334, 207);
  vertex(374, 338);
  vertex(319, 419); 
  vertex(182, 519);
  endShape(CLOSE);

  fill(a+157, b+107, c+49);
  beginShape();
  vertex(741, 289);
  vertex(805, 336);
  vertex(704, 464); 
  vertex(642, 427);  
  vertex(701, 335);
  endShape(CLOSE);

  fill(a+79, b+127, c+47);
  beginShape();
  vertex(585, 623);
  vertex(818, 677);
  vertex(778, 881); 
  vertex(618, 853);
  endShape(CLOSE);

  fill(a+154, b+45, c+79);
  beginShape();
  vertex(643, 429);
  vertex(730, 521);
  vertex(814, 590); 
  vertex(618, 690);  
  vertex(511, 490);
  endShape(CLOSE);

  fill(a+177, b+104, c+10);
  beginShape();
  vertex(422, 522);
  vertex(485, 523);
  vertex(529, 518); 
  vertex(511, 690);
  vertex(400, 690);
  endShape(CLOSE);



  fill(a+163, b+153, c+40);
  beginShape();
  vertex(307, 437);
  vertex(429, 528);
  vertex(325, 672); 
  vertex(195, 597);
  endShape(CLOSE);

  fill(a+56, b+94, c+41);
  beginShape();
  vertex(369, 355);
  vertex(522, 321);
  vertex(568, 515);
  vertex(311, 489); 
  vertex(304, 445);
  vertex(335, 425);
  endShape(CLOSE);



  fill(a+19, b+91, c+142);
  beginShape();
  vertex(110, 669);
  vertex(582, 681);
  vertex(588, 882); 
  vertex(99, 853);
  endShape(CLOSE);
}
