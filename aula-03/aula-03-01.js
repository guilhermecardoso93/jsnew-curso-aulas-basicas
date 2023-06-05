/* Faça um algortimo que dando 3 notas tiradas de um aluno em um 
semetre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela baixo:

Classificação:
menor que 5 = reprovado
entre 5 e 7 = recuperação
entre 7 e 10 = aprovado
*/


function grades(grad1, grad2, grad3) {
  var finalGrad = ((grad1 + grad2 + grad3) / 3).toFixed(2)

  if(finalGrad >= 0 && finalGrad <= 4.99){
    console.log(`Reprovado ${finalGrad}`)
  } else if(finalGrad >= 5 && finalGrad <= 6.99){
    console.log(`Recuperação ${finalGrad}`)
  } else if(finalGrad >= 7 && finalGrad <= 10) {
    console.log(`Aprovado ${finalGrad}`)
  } else {
    console.log(`Sem informações ${finalGrad}`)
  }
} 

grades(5,6,7.8)
grades(5,4,3.7)
grades(9,9,8)
grades()

