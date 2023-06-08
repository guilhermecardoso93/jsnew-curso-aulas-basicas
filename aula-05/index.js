function isEqual(a,b){
  const isEqualNumbers = a === b
  const soma = a + b;
  const result = 
    soma >= 10 && 
    soma <= 20 && 
    isEqualNumbers !== true ? 
  `Os número ${a} e ${b} não são iguais e sua soma é de ${soma}` 
  : `Os número ${a} e ${b} são iguais e sua soma é de ${soma}`;

  return console.log(result)
  
}

isEqual(1,1)
isEqual(2,3)

function compare(a,b) {
  let firstFase = `Os Número ${a} e ${b}`
  let YesOrNo = 'Não'

  if( a === b) {
    YesOrNo = ''
  }

  const soma = a + b
  var menorQ10 = 'menor'
  var menorQ20 = 'menor'

  if(soma > 10) {
    menorQ10 = 'maior'
  }

  if(soma > 20) {
    menorQ20 = 'maior'
  }

  return `${firstFase} ${YesOrNo} são iguais. Sua soma é ${soma}, que é ${menorQ10} do que 10 e ${menorQ20} do que 20.`; 

  return ``
}



console.log(compare(10, 10));
console.log(compare(60, 4));
console.log(compare(4, 6));

