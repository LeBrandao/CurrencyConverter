function ConverterDolar(){
  
  var valueTypedDolar = document.getElementById("dolar").value;
  var value = parseFloat(valueTypedDolar);
  var valueDolar = value * 5;
  var elementConvert = document.getElementById("resultDolar");
  var valueConvert = "O resultado de Dólar para Reais é R$: " + valueDolar;
  
  elementConvert.innerHTML = valueConvert;
}

function ConverterEuro(){
  
  var valueTypedEuro = document.getElementById("euro").value;
  var valueEuro = parseFloat(valueTypedEuro);
  var valueEuroConvert = valueEuro * 6;
  var elementConvertEuro = document.getElementById("resultEuro");
  var valueConvertEuro = "O resultado de Euro para Reais é R$: " + valueEuroConvert;

  elementConvertEuro.innerHTML = valueConvertEuro;
}