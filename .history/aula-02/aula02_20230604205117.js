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
var typeOfCar = 'etanol'| 'gasolina'
var DistanceKm =  60



if(typeOfCar = 'etanol') {
  var result = DistanceKm * etanol
  console.log(result)
} else {
  var result = DistanceKm * gasoline
  console.log(result)
}

typeOfCar = 'gasoline'