// comentário single line

/*
  comentário de multi linha
*/

//Variável

var preco = 2
var desconto = 0.3

preco = preco - desconto
console.log(preco)


function returnEvenNumbers(array) {
  let evenNumber = []

  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0 ) {
      evenNumber.push(array[i])
    }
  }

  console.log(evenNumber)
}

let array = [1,2,3,4,5,6,7,8,9]

returnEvenNumbers(array)