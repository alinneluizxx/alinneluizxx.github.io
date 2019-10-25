//Variáveis para as imagens
let imgEstrada;
let imgVaca;
let imgCarro = [];
let imgBorboleta;

//Variáveis da Tela
let larguraTela = 600;
let alturaTela = 400;


function preload(){
  imgEstrada = loadImage('imagens/estrada.png');
  
  //atores
  imgVaca = loadImage('imagens/ator-1.png');
  imgBorboleta = loadImage('imagens/borboleta.png');
  
  //carros
  imgCarro[0] = loadImage('imagens/carro-1.png');
  imgCarro[1] = loadImage('imagens/carro-2.png');
  imgCarro[2] = loadImage('imagens/carro-3.png');
  imgCarro[3] = loadImage('imagens/carro-4.png');
  imgCarro[4] = loadImage('imagens/carro-5.png');
  imgCarro[5] = loadImage('imagens/carro-6.png');
  
  //sons
  ponto = loadSound('sons/pontos.wav');
  atropelou = loadSound('sons/colidiu.mp3');
  trilha = loadSound('sons/trilha.mp3');
  vitoria = loadSound('sons/Vaca_louca.mp3);
}

//Variáveis de vaca
let yVaca = 368;
let yBorboleta = 368;

let xVaca = 450;
let xBorboleta = 150;

//Vetores do Carro
let xCarro = [605,605,605,-55,-55,-55]; //direita p esquerda
let yCarro = [45,105,155,215,265,320];
let velocidadeCarro = [5,2,7,8,3,4];