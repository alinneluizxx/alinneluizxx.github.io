//Carros
function mostraCarro(){
  for(let i=0; i < imgCarro.length; i++)
    image(imgCarro[i],xCarro[i],yCarro[i],40,30);
}

function movimentaCarro(){
  
  for(let i=0; i < imgCarro.length; i++){
    if(i < 3){
    //Carros indo para a esquerda
      xCarro[i] -= velocidadeCarro[i];
    
    //Carro chegou ao fim do percurso
      if(xCarro[i] < -55)
      xCarro[i] = 605;
      velocidadeCarro[i] = ceil(random(2,9));

    }else{
    //Carros indo para a direita
      xCarro[i] += velocidadeCarro[i];
      
      if(xCarro[i] > 605)
      xCarro[i] = -55;
      velocidadeCarro[i] = ceil(random(2,9));
      }
    }
  }