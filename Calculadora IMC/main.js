function calcularIMC() {

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
      alert("Digite valores válidos!");
      return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
      classificacao = "Magreza";
    } 
    else if (imc < 25) {
      classificacao = "Normal";
    } 
    else if (imc < 30) {
      classificacao = "Sobrepeso";
    } 
    else {
      classificacao = "Obesidade";
    }

    document.getElementById("resultado").style.display = "block";
    document.getElementById("imc").innerHTML = 
      "IMC: <strong>" + imc.toFixed(2) + "</strong>";

    document.getElementById("classificacao").innerHTML = 
      "Classificação: <strong>" + classificacao + "</strong>";
}