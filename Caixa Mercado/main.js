function calcular() {
  var a = Number(document.getElementById('valor-a').value);
  var b = Number(document.getElementById('valor-b').value);

  document.getElementById('soma').textContent         = 'Soma: '           + (a + b);
  document.getElementById('subtracao').textContent    = 'Subtração: '      + (a - b);
  document.getElementById('multiplicacao').textContent = 'Multiplicação: '  + (a * b);
  document.getElementById('divisao').textContent      = b !== 0
    ? 'Divisão: ' + (a / b)
    : 'Divisão: impossível (B é zero)';

  style.display = 'block'
}
