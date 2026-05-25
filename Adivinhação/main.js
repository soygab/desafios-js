// Número aleatório entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Tentativas
let contador = 0;

function verificarNumero(){

  let palpite = Number(document.getElementById("palpite").value);

  contador++;

  if(palpite < 1 || palpite > 100 || isNaN(palpite)){
    document.getElementById("mensagem").innerHTML =
      "Digite um número válido entre 1 e 100!";
  }

  else if(palpite > numeroSecreto){
    document.getElementById("mensagem").innerHTML =
      "Muito alto!";
  }

  else if(palpite < numeroSecreto){
    document.getElementById("mensagem").innerHTML =
      "Muito baixo!";
  }

  else{
    document.getElementById("mensagem").innerHTML =
      "Acertou! O número era " + numeroSecreto;
  }

  document.getElementById("tentativas").innerHTML =
    "Tentativas: " + contador;

}
