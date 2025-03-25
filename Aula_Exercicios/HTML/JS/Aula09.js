function Salario() {
    let qtdHoras = parseFloat(prompt("Digite a quantidade de horas trabalhadas: "));
    let valorHorasTrabalhadas = parseFloat(prompt("Digite o valor das suas horas: "));
    let salarioBruto = (qtdHoras * valorHorasTrabalhadas);
    let impostoSindicato = 0.03;
    let fgts = 0.11;
   
   









   if (salarioBruto <= 900.00){
    salarioLiquido = salarioBruto + (salarioBruto * fgts)
    alert(`O Salário Bruto (${qtdHoras} * ${valorHorasTrabalhadas}) - R$${salarioBruto}`)

} 
else if (salarioBruto > 900.00 & salarioBruto <=1500.00){
    salarioLiquido = salarioBruto - (impostoSindicato * salarioBruto) + (fgts * salarioBruto);
    valorIR = (salarioBruto * 0.05);
    valorINSS = (salarioBruto * 0.1);
    valorFGTS = (fgts * salarioBruto);
    totalDescontos = (valorIR + valorINSS)
    alert(`O Salário Bruto (${qtdHoras} * ${valorHorasTrabalhadas})          : R$${salarioBruto}`+ "\n"+ `( - ) IR (5%)                                 : R$ ${valorIR}` + "\n"+ `( - ) INSS (10%)                          : R$ ${valorINSS}`  + "\n" + `FGTS (11%.)                                : R$ ${valorFGTS}` + "\n" + `Total de descontos                     : R$ ${totalDescontos}`  + "\n" + `Salário Liquido                         : R$ ${salarioLiquido}`);
    
} 
else if (salarioFunc > 1500.00 & salarioFunc <=2500.00){
    salarioLiquido = salarioBruto - (impostoSindicato * salarioBruto) + (fgts * salarioBruto);
    valorIR = (salarioBruto * 0.10);
    valorINSS = (salarioBruto * 0.1);
    valorFGTS = (fgts * salarioBruto);
    totalDescontos = (valorIR + valorINSS)
    alert(`O Salário Bruto (${qtdHoras} * ${valorHorasTrabalhadas})          : R$${salarioBruto}`+ "\n"+ `( - ) IR (5%)                                 : R$ ${valorIR}` + "\n"+ `( - ) INSS (10%)                          : R$ ${valorINSS}`  + "\n" + `FGTS (11%.)                                : R$ ${valorFGTS}` + "\n" + `Total de descontos                     : R$ ${totalDescontos}`  + "\n" + `Salário Liquido                         : R$ ${salarioLiquido}`);
}  
else {
    salarioLiquido = salarioBruto - (impostoSindicato * salarioBruto) + (fgts * salarioBruto);
    valorIR = (salarioBruto * 0.20);
    valorINSS = (salarioBruto * 0.1);
    valorFGTS = (fgts * salarioBruto);
    totalDescontos = (valorIR + valorINSS)
    alert(`O Salário Bruto (${qtdHoras} * ${valorHorasTrabalhadas})          : R$${salarioBruto}`+ "\n"+ `( - ) IR (5%)                                 : R$ ${valorIR}` + "\n"+ `( - ) INSS (10%)                          : R$ ${valorINSS}`  + "\n" + `FGTS (11%.)                                : R$ ${valorFGTS}` + "\n" + `Total de descontos                     : R$ ${totalDescontos}`  + "\n" + `Salário Liquido                         : R$ ${salarioLiquido}`);

}
}