
function calculadora(vit, derr){
    let saldo = vit - derr
    return saldo
}

let resultado = calculadora(89,15)
let nivel = ""

if(resultado <= 10) {
    nivel = "Ferro"
    console.log("Ferro")
  } else if (resultado >= 11 && resultado <= 20){
    nivel = "Bronze"
    console.log("Bronze")
  } else if(resultado >=21 && resultado <= 50){
    nivel = "Prata"
    console.log("Prata")
  } else if(resultado >= 51 && resultado <= 80){
    nivel = "Ouro"
    console.log("Ouro")
  } else if(resultado >= 81 && resultado <= 90){
    nivel = "Diamante"
    console.log("Diamante")
  } else if(resultado >= 91 && resultado <= 100){
    nivel = "Lendário"
    console.log("Lendário")
  } else{
    nivel = "Imortal"
    console.log("Imortal")
  }

  console.log(`O Herói tem saldo de ${resultado} está no nível ${nivel}`)