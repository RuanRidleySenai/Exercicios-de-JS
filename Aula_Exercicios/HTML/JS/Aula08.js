function Salario() {
    let salarioFunc = parseFloat(prompt("Digite seu salário: "));
    let aum20 = 1.20;
    let aum15 = 1.15;
    let aum10 = 1.10;
    let aum05 = 1.05;
    var salarioFuncRea = 0;
    var valorAumento = 0
    if (salarioFunc <= 280.00){
        salarioFuncRea = salarioFunc * aum20
        valorAumento = (salarioFuncRea - salarioFunc);
        alert(`O salario antes do reajuste era de: R$${salarioFunc}, o percentual de aumento aplicado é de R$${aum20}, o valor do aumento é de R$${valorAumento} e o novo sálario é de R$${salarioFuncRea}`);
    } 
    else if (salarioFunc > 280.00 & salarioFunc <=700.00){
        salarioFuncRea = salarioFunc  * aum15;
        valorAumento = (salarioFuncRea - salarioFunc);
        alert(`O salario antes do reajuste era de: R$${salarioFunc}, o percentual de aumento aplicado é de R$${aum15}, o valor do aumento é de R$${valorAumento} e o novo sálario é de R$${salarioFuncRea}`);
    } 
    else if (salarioFunc > 700.00 & salarioFunc <1500.00){
        salarioFuncRea = salarioFunc  * aum10;
        valorAumento = (salarioFuncRea - salarioFunc);
        alert(`O salario antes do reajuste era de: R$${salarioFunc}, o percentual de aumento aplicado é de R$${aum10}, o valor do aumento é de R$${valorAumento} e o novo sálario é de R$${salarioFuncRea}`);
    }  
    else {
        salarioFuncRea = salarioFunc  * aum05;
        valorAumento = (salarioFuncRea - salarioFunc);
        alert(`O salario antes do reajuste era de:  R$${salarioFunc}, o percentual de aumento aplicado é de R$${aum05}, o valor do aumento é de R$${valorAumento} e o novo sálario é de R$${salarioFuncRea}`);
    }



}