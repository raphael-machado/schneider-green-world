var per1 = "Você separa regularmente seu lixo para reciclagem?";
var per2 =
  "Você utiliza transporte público ou compartilhado em vez de carros particulares?";
var per3 = "Você costuma reduzir o consumo de água em suas atividades diárias?";
var per4 =
  "Você participa de programas de reflorestamento ou atividades de conservação ambiental?";
var per5 =
  "Você compra produtos locais e sazonais para reduzir a pegada de carbono?";
var per6 =
  "Você adota práticas de economia de energia, como desligar aparelhos eletrônicos quando não estão em uso?";
var per7 =
  "Você evita o uso de produtos descartáveis, optando por itens reutilizáveis?";
var per8 =
  "Você participa de campanhas de conscientização ambiental na sua comunidade?";
var per9 =
  "Você planta ou cuida regularmente de árvores e plantas em espaços públicos ou privados?";

var txt1 =
  "No quiz sobre sustentabilidade, percebemos que sua pontuação foi abaixo de 33%. <br><br> Isso indica uma oportunidade para aprimorar seu conhecimento e envolvimento com práticas ecológicas. <br><br> Não se preocupe, estamos aqui para ajudar! A sustentabilidade é uma jornada contínua, e mesmo as pequenas mudanças fazem a diferença. <br><br> Explore nossa aba de sustentabilidade e descubra dicas e informações para fortalecer sua compreensão e compromisso com um estilo de vida mais verde. Juntos, podemos transformar seus esforços em impactos positivos para o planeta!";
var txt2 =
  "No quiz sobre sustentabilidade, percebemos que sua pontuação foi abaixo de 66%. <br><br> Você demonstrou um conhecimento sólido, mas sempre há espaço para crescer.  Continue se aprofundando nas práticas e conceitos ecológicos para fazer um impacto ainda maior. Cada passo conta na jornada rumo a um estilo de vida mais sustentável. <br><br> Explore nossa aba de sustentabilidade e veja recursos adicionais e dicas para continuar avançando e contribuindo para um futuro mais verde e consciente.";
var txt3 =
  "No quiz sobre sustentabilidade, percebemos que sua pontuação foi acima de 66%. <br><br> Incrível! Seu desempenho no quiz de sustentabilidade foi impressionante. Sua compreensão das práticas ecológicas é evidente e inspiradora. Continue sendo um exemplo para os outros e mantenha esse compromisso com um estilo de vida sustentável. <br><br> Compartilhe seus conhecimentos e continue explorando a nossa aba de sustentabilidade, para causar um impacto positivo ainda maior no meio ambiente. Estamos animados para ver suas contribuições contínuas para um futuro mais verde e saudável para todos!";

let pergts = [per1, per2, per3, per4, per5, per6, per7, per8, per9];
let txts = [txt1, txt2, txt3];
let pontuacao = 0;
let i = 0;

function mudaCor(cor) {
  var bold__cor = document.getElementById("bold__cor");
  bold__cor.classList.add(cor);
}

function verPonto() {
  var txtElement = document.getElementById("txt");
  var porcen = document.getElementById("porcen");
  var conta = Math.round((pontuacao / 30) * 100);

  if (0 <= pontuacao && pontuacao <= 10) {
    txtElement.innerHTML = txts[0];
    porcen.innerHTML =
      "A sua porcentagem foi de <b id='bold__cor' class='bold__cor'>" +
      conta +
      "%";
    mudaCor("vermelho");
  } else if (10 <= pontuacao && pontuacao <= 20) {
    txtElement.innerHTML = txts[1];
    porcen.innerHTML =
      "A sua porcentagem foi de <b id='bold__cor' class='bold__cor'>" +
      conta +
      "%";
    mudaCor("amarelo");
  } else {
    txtElement.innerHTML = txts[2];
    porcen.innerHTML =
      "A sua porcentagem foi de <b id='bold__cor' class='bold__cor'>" +
      conta +
      "%";
    mudaCor("verde");
  }
}

function ganhaPonto(p) {
  if (i < pergts.length) {
    var prgtElement = document.getElementById("prgt");
    prgtElement.innerHTML = pergts[i];
    pontuacao += p;
    console.log("Pontuação: " + pontuacao);
    i++;
  } else {
    var tudo = document.getElementById("tudo");
    var resps = document.getElementById("respostas");
    tudo.style.display = "none";
    resps.style.display = "flex";
    verPonto();
  }
}
