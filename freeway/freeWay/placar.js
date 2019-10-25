let placarVaca = 0;
let placarBorboleta = 0;

function mostraPlacar(){
  textSize(30);
  fill("black");
  text(placarVaca, 420, 28);
  fill("purple");
  text(placarBorboleta, 190, 28);
  
   if(yVaca < 15){
    placarVaca +=1;
    ponto.play();
    yVaca = 368;
  }
  
  if(yBorboleta < 15){
    placarBorboleta +=1;
    ponto.play();
    yBorboleta = 368;
  } 
}