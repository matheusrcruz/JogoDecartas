var cartaUm = {
    nome: "Ivern o pai do verde",
    imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/b/be/Ivern_OriginalLoading.jpg",
    atributos : {
    ataque: 14,
    defesa: 11,
    magia: 40
    }
  }
  var cartaDois = {
    nome: "Singed o quimico louco",
    imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/3/35/Singed_OriginalLoading.jpg",
    atributos: {
    ataque: 35,
    defesa: 100,
    magia: 90
    }
  }
  var cartaTres = {
    nome: "Skarner o vanguarda de cristal",
    imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/0/0d/Skarner_OriginalLoading.jpg",
    atributos: {
      ataque: 45,
      defesa: 105,
      magia: 99
      
    }
  }
  var cartaPaulo = {
      nome: "Seiya de Pegaso",
      imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
      atributos: {
          ataque: 80,
          defesa: 60,
          magia: 90
      }
  }
  var cartaRafa = {
      nome: "Bulbasauro",
      imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
      atributos: {
          ataque: 70,
          defesa: 65,
          magia: 85
      }
  }
  var cartaGui = {
      nome: "Lorde Darth Vader",
      imagem: "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
      atributos: {
          ataque: 88,
          defesa: 62,
          magia: 90
      }
  }
  
  
  var cartaMaquina
  var cartaJogador
  var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaUm, cartaDois, cartaTres]
  //                0          1           2         3        4         5
  
  var pontosJogador = 0
  var pontosMaquina = 0
  
  atualizaPlacar()
  atualizaQuantidadeDeCartas()
  
  function atualizaPlacar() {
    var divPlacar = document.getElementById('placar');
    var html = 'Jogador: '+pontosJogador+' / '+pontosMaquina+' :Máquina'
    
    divPlacar.innerHTML = html;
  }

function atualizaQuantidadeDeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas');
  var html = 'Quantidades de cartas no jogo: '+cartas.length;
  
  divQuantidadeCartas.innerHTML = html;
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
  
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    document.getElementById('btnJogar').disabled = true

  if(cartas.length == 0) {
      alert('Fim de jogo.')
      if(pontosJogador > pontosMaquina){
        htmlResultadp = '<p class="resultado-final">Venceu a máquina</p>'
      } else if (pontosJogador == pontosMaquina) {
        htmlResultado = '<p class="resultado-final">Empataram</p>'
      } else {
        htmlResultado = '<p class="resultado-final">Perdeu o jodo</p>'
      }
    } else {
      document.getElementById('btnProximaRodada').disabled = false
    }
  
    divResultado.innerHTML = htmlResultado

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas');
  divCartas.innerHTML = `<div id='carta-jogador' class="carta"></div> <div id="carta-maquina" class="carta" ></div>`
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnProximaRodada').disabled = true
  var divResultado = document.getElementById('resultado')
  
  divResultado.innerHTML = '';

}
