//Vacas
function mostraVaca(){
  image(imgVaca,xVaca,yVaca,28,28);
  image(imgBorboleta,xBorboleta,yBorboleta,34,34);
}

function movimentaVaca(){
  if(keyIsDown(UP_ARROW)){
    //yVaca = yVaca - 3;
    if(yVaca > 5)
      yVaca -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    //yVaca = yVaca +3;
    if(yVaca < 365)
      yVaca +=10;
  }
}

function movimentaBorboleta(){
  if(keyIsDown(87)){
    //yVaca = yVaca - 3;
    if(yBorboleta > 5)
      yBorboleta -= 10;
  }
  if(keyIsDown(83)){
    //yVaca = yVaca +3;
    if(yBorboleta < 365)
      yBorboleta +=10;
  }
}