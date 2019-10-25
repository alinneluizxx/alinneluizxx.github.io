function setup() {
  createCanvas(larguraTela, alturaTela);
  //trilha.setVolume(0,3);
  //trilha.loop();
}

function draw() {
  if(frameCount > 400){// +/- 8s
    if(placarVaca <5 && placarBorboleta <5)
       jogar();
    else 
      verificaVencedor();
  }else{
    telaInicial();
  }
}

function verificaVencedor(){
  if(placarVaca >= 5)
    vacaVencedora(); //Tela Final
  else
    borboletaVencedora();
}

function vacaVencedora(){
  background("LightSteelBlue");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("SlateGrey");
  textSize(55);
  text("Vaca Venceu",300,90);
  image(imgVaca,200,120,200,200);
}

function borboletaVencedora(){
  background("PaleVioletRed ");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Crimson");
  textSize(55);
  text("Borboleta Venceu",300,90);
  image(imgBorboleta,200,120,200,200);
}

function telaInicial(){
  background("LightCoral");
  textStyle(BOLDITALIC);
  textAlign(CENTER);
  textSize(55);
  fill("DarkRed");
  text("FreeWay",300,200);
  textStyle(ITALIC);
  textSize(28);
  text("Desenvolvido por Aline G.",300,250);
}

function jogar(){
  background(imgEstrada);
  mostraVaca();
  movimentaVaca();
  movimentaBorboleta();
  mostraCarro();
  movimentaCarro();
  mostraPlacar();
  atropelamento();
}