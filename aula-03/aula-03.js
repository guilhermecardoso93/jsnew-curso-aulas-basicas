/* 
  Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta mais a forma de pagamento

  A vista Debito 10% desc
  A vista Dinheiro 15% desc
  A Pix 15% desc
  Credito duas vezes preço normal
  acima de duas vezes juros de 10%

*/

var produto = 100;

var debito = 10 / 100;
var money = 15 / 100;
var pix = 15 / 100;
var cred = 0 / 100;
var amais = 10 * 100;

function calcular(forma) {
  if (forma == debito) {
    const desconto = produto * 0.1;
    const valorFinal = produto - desconto;
    console.log(valorFinal);
  } else if (forma == cred) {
    const desconto = produto * cred;
    const valorFinal = produto + desconto;
    console.log(valorFinal);
  } else if (forma == money && forma == pix) {
    const desconto = produto * 0.15;
    const valorFinal = produto - desconto;
    console.log(valorFinal);
  } else if (forma == amais) {
    const desconto = produto * 0.15;
    const valorFinal = produto + desconto;
    console.log(valorFinal);
  }
}

calcular(debito);
calcular(cred);
calcular(money);
calcular(pix);
calcular(amais);

const nomeDoProfessor = 'Renan Johannsen de Paula';
    console.log(nomeDoProfessor);

    nomeDoProfessor = 'Vitor Johansen Guerra';
    console.log(nomeDoProfessor);