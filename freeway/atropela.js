let atropelaVaca = false;
let atropelaBorboleta = false;

function atropelamento(){
  //Teste
  for(let i=0; i < imgCarro.length; i++){
    
    atropelaVaca = collideRectRect(xVaca, yVaca, 28, 28, xCarro[i], yCarro[i], 40, 30);
    
    if(atropelaVaca){
    //Vaca atropelada
      yVaca = 367;
      if(placarVaca > 0)//Evitar placar negativo
        placarVaca -= 1;
        atropelou.play();
    }

    atropelaBorboleta = collideRectRect(xBorboleta, yBorboleta, 34, 34, xCarro[i], yCarro[i], 40, 30);
    
    if(atropelaBorboleta){
    //Borboleta atropelada
      yBorboleta = 367;
      if(placarBorboleta > 0)//Evitar placar negativo
        placarBorboleta -= 1;
        atropelou.play();
    }
  }//for
}//atropelamento