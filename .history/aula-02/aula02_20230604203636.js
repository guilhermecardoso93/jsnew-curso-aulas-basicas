/* Operadores de Atribuição */

var age = 0 
const age2 = 32

const numeroPar = (age % 2) === 0

if(age === 0){
  console.log('o número é invalido')
  return
}

if(numeroPar == true) {
  console.log('Par')
}else{
  console.log('Impar')
}

console.log(numeroPar)

