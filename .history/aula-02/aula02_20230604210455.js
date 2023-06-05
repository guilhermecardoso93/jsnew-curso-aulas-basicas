/* Operadores de Atribuição */

var age = 10;
const age2 = 32;

const numeroPar = age % 2 === 0;

if (age === 0) {
  console.log("o número é invalido");
  return;
} else if (numeroPar == true) {
  console.log("Par");
} else {
  console.log("Impar");
}

console.log(numeroPar);

var etanol = 9.90
var gasolina = 6.60
var quantoFazPorLitro = 10
var distanciaDaViagemEmKm =  60
var tipoDeCombustivel = 'gasolina'

 const litrosConsumidos = distanciaDaViagemEmKm / quantoFazPorLitro


 if(tipoDeCombustivel === 'etanol') {
    valorGasto = (litrosConsumidos * etanol).toFixed(2)
 } else{
    valorGasto = (litrosConsumidos * gasolina).toFixed(2)
 }

 console.log(valorGasto)