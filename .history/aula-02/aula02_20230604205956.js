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

 const litrosConsumidos = distanciaDaViagemEmKm / quantoFazPorLitro
 const valoGasto = litrosConsumidos * etanol

 console.log(valoGasto)