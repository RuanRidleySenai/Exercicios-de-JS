var notas = [10,8,6];
var i = 0
var soma = 0
 while(i < 3){
    soma = soma + notas[i]
    i++
 }
 result = soma / 3

if(result < 6){
    console.log("Reprovado")
} else {
    console.log("Aprovado")

}

