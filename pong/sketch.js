let tocouMinhaRaquete = false;
let tocouRaqueteOponente = false

//Dimensões da Tela
let alturaTela = 600;
let larguraTela = 1280;
let metadeTela = larguraTela/2;

//Váriaveis em Javascript da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let velocidadeX = 10;
let velocidadeY = 10;
let aumentoDeVelocidade = 2;

let raio = diametro / 2;

//Váriaveis das Raquetes
let velocidadeRaquete = 15;
let alturaRaquete = 110;
let larguraRaquete = 10;

let xMinhaRaquete = larguraTela - larguraRaquete;
let yMinhaRaquete = alturaTela/2 - alturaRaquete/2;

let xRaqueteOponente = 0;
let yRaqueteOponente = alturaTela/2 - alturaRaquete/2;

//Placar
let meuPlacar = 0;
let placarOponente = 0;

function preload(){
  somPonto = loadSound("ponto.mp3");
  somRaquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(larguraTela, alturaTela);
  altura = height;
  largura = width;
  console.log("Largura = "+largura);
  console.log("Altura = "+altura);
}

//Um looping sempre, desenha o que tem dentro
function draw() {
  background("#fae");
  stroke("green");
  strokeWeight(2);
  line(metadeTela, 0, metadeTela, alturaTela);
  if(frameCount < 200) //5 segundos
    telaInicial();
  else
  jogar();
}//Fim da função Draw

function telaInicial(){
  fill("#fc9090");
  rect(larguraTela/4, 0,metadeTela, alturaTela);
  textAlign(CENTER);
  textSize(24);
  fill("#02243b");
  text("Ping Pong do Programador", metadeTela, alturaTela/2);
}

function jogar(){
  if(meuPlacar < 5 && placarOponente < 5){
    mostraBolinha();
    movimentaBolinha();
    detectaColisao();
    mostraRaquetes();
    movimentaMinhaRaquete();
    movimentaRaqueteOponente();
    detectaColisaoBolinhaRaquetes();
    mostraPlacar();
  } else{
    //Verifica e mostra campeão
      if(meuPlacar ==5)
        setasVenceu();
      else
        letrasVenceu();
  }
}
  
function letrasVenceu(){
  fill("orange");
  rect(0, 0, metadeTela, alturaTela);
  textSize(40);
  fill("white");
  textAlign(CENTER);
  text("Letras Venceu", metadeTela/2, alturaTela/2);
}

function setasVenceu(){
  fill("purple");
  rect(metadeTela, 0, larguraTela, alturaTela);
  textSize(40);
  fill("white");
  textAlign(CENTER);
  text("Setas Venceu", metadeTela + metadeTela/2, altura/2);
}
  
function mostraPlacar(){
  textSize(30);
  fill("black");
  text(meuPlacar, 3/4 * larguraTela, 30);
  text(placarOponente, larguraTela/4, 30);
}

function detectaColisaoBolinhaRaquetes(){
  //Colisão com a MinhaRaquete
  tocouMinhaRaquete = collideRectCircle(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
 
  if(tocouMinhaRaquete){
    //Impede gol contra
    if(xBolinha > metadeTela && velocidadeX >0){
      velocidadeX *=-1;
      somRaquetada.play();
    }
  }
  
  //Colisão com a RaqueteOponente
  tocouRaqueteOponente = collideRectCircle (xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
 
  if(tocouRaqueteOponente){
    //Impede gol
    if(xBolinha < metadeTela && velocidadeX <0){
      velocidadeX *=-1;
      somRaquetada.play();
    }
  }
}

function movimentaMinhaRaquete(){
  //console.log("y: " + yMinhaRaquete);
  //console.log("x: " + xMinhaRaquete);
  if (keyIsDown(UP_ARROW)) {
    if(yMinhaRaquete > 0) //Teto
       yMinhaRaquete -= velocidadeRaquete;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(yMinhaRaquete < (alturaTela - alturaRaquete)) //Chão
       yMinhaRaquete += velocidadeRaquete;
  }
  if (keyIsDown(LEFT_ARROW)) {
    if(xMinhaRaquete > metadeTela) //Parede Esquerda
       xMinhaRaquete -= velocidadeRaquete;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if(xMinhaRaquete < (larguraTela - larguraRaquete)) //Parede Direita
    xMinhaRaquete += velocidadeRaquete;
  }
}

function movimentaRaqueteOponente(){
  if (keyIsDown(87)) { // W para cima
    if(yRaqueteOponente > 0) //Teto
       yRaqueteOponente -= velocidadeRaquete;
  }
  if (keyIsDown(83)) { //S para baixo
    if(yRaqueteOponente < (alturaTela - alturaRaquete)) //Chão
       yRaqueteOponente += velocidadeRaquete;
  }
if (keyIsDown(65)) { // A para direita
  if(xRaqueteOponente > 0) //Parede Esquerda
      xRaqueteOponente -= velocidadeRaquete;
  }
if (keyIsDown(68)) { // D para esquerda
  if(xRaqueteOponente <(metadeTela - larguraRaquete - 2)) //Parede Direita
     xRaqueteOponente += velocidadeRaquete;
  }
}  

function mostraRaquetes(){
  fill("#38a1f2");
  rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete);

  fill("#b00c17");
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);
}

function mostraBolinha(){
  fill("#171ca6");
  noStroke();
  circle(xBolinha,yBolinha,diametro);
}//Fim mostra Bolinha

function movimentaBolinha(){
   //Incremento de Velocidade
  //xBolinha = xBolinha + velocidade;
  //yBolinha = yBolinha + velocidade;
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
}//Fim movimenta Bolinha

function detectaColisao(){
  //Colisão com as bordas laterais
  
  //Lado direito - meu lado
  if (xBolinha + raio >= largura){
    velocidadeX *= -1; //velocidade *(-1)
    placarOponente +=1;
    somPonto.play();
    velocidadeX -= aumentoDeVelocidade;
    velocidadeY -= aumentoDeVelocidade;
  }
  
  //Lado esquerdo - lado oponente
  if(xBolinha - raio <=0){
    velocidadeX *=-1;
    meuPlacar +=1;
    somPonto.play();
    velocidadeX += aumentoDeVelocidade;
    velocidadeY += aumentoDeVelocidade;
  }
  
  //Colisão com as bordas superiores e inferiores
  if (yBolinha + raio >= altura || yBolinha - raio <=0){
    velocidadeY *= -1; //velocidade *(-1)
    console.log(velocidadeY);
  }  
}//Fim detecta Colisão
