function setup() {
  createCanvas(720, 480);
  background("white");
}

function draw() {
  if (mouseIsPressed) {}
  stroke("blue"); //cor da linha
  fill("blue"); //cor do fundo
  rect(320,185,75,75); //retangulo
  stroke("green"); //cor da linha
  fill("green"); //cor do fundo
  rect(320,300,75,75); //retangulo
  stroke("red"); //cor da linha
  fill("red"); //cor do fundo
  rect(320,70,75,75); //retangulo
  stroke("yellow"); //cor da linha
  fill("yellow"); //cor do fundo
  rect(220,185,75,75); //retangulo
  stroke("orange"); //cor da linha
  fill("orange"); //cor do fundo
  rect(420,185,75,75); //retangulo
    stroke("white"); //cor da linha
  fill("black"); //cor do fundo
  rect(mouseX,mouseY,75,75); //retangulo
}
