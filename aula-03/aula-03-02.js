/*
O IMC - Indice de Massa Corporal é um criterio da Organização Mundial da Saúde para dar um indicação sobre
a condição de peso de um pessoa adulta.

Formula do IMC
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e altura de uma mostre sua condição de acordo com a tabela abaixo;

abaixo de 18.5 abaixo do peso
entre 18.5 e 25 peso normal
entre 25 e 30 acima do peso
30 e 40 acima do peso
acima de 40 obesidade
*/

function calculandoIMC(peso, altura) {
  const valorIMC = (peso / (altura * altura)).toFixed(2)

  if(valorIMC <= 18.5) {
    console.log(`Seu IMC é ${valorIMC}, você esta abaixo do peso.`)
  } else if(valorIMC > 18.5 && valorIMC <= 24.99) {
    console.log(`Seu IMC é ${valorIMC}, você esta com o peso normal.`)
  } else if (valorIMC >=25 && valorIMC <= 29.99) {
    console.log(`Seu IMC é ${valorIMC}, você esta acima do peso.`)
  } else if (valorIMC >=30 && valorIMC < 39.99) {
    console.log(`Seu IMC é ${valorIMC}, você esta obeso.`)
  } else if (valorIMC >= 40) {
    console.log(`Seu IMC é ${valorIMC}, você esta obesidade grave.`)
  } else {
    console.log(`sem dados`)
  }
}

calculandoIMC(117, 1.79)
calculandoIMC(90, 1.79)