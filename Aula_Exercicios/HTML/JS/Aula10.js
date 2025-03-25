function sacarDinheiro() {
     //Pedir o valor do saque
    let valorDeSaque = parseInt(prompt("Digite o valor que deseja sacar: R$"));


//  Verificar se o valor tá dentro ou não do limite permitido para sacar

 if( isNaN(valorDeSaque) || valorDeSaque < 10 || valorDeSaque >600){
    alert("ERRO, não aceitamos esse valor aqui, valor de saque minimo R$10,00 e valor de saque máximo R$600");
 }

 let valorInicial = valorDeSaque;
 let notas = [100, 50, 20, 10, 5, 1];
 let resultado = " ";

 for (let nota of notas){
    if(valorDeSaque >= nota){
        let qtdNotas = Math.floor(valorDeSaque / nota);
        valorDeSaque -= qtdNotas * nota;
        resultado += `Notas de R$${nota}: ${qtdNotas}\n`
       
    }
 }

 alert(`Saque realizado com sucesso! \n  ${resultado}` + "\n" + `Valor Total: R$${valorInicial}`);

}