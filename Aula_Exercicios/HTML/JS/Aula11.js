/* alcool:
         até 20L - 3% desconto
         acima 20L - 5% por litro
    Gasolina:
        até 20L - 4% de desconto
        acima 20L - 6% de desconto

um algoritmo que leia o número de litros vendidos, o tipo de combustivel  (A-álcool, G-gasolina)

Gasolina: R$6,20 e Alcool: R$4,70
     */

const precoAlcool = 4.70;
const precoGasolina = 6.20;

function calcularValor(){
     let litros = parseFloat(prompt("Digite o número de litros vendidos: "));
let tipoCombustivel = prompt("Digite o tipo de combustivel (A-álcool, G-gasolina): ");

if(tipoCombustivel === 'A' || tipoCombustivel === 'a'){
    if(litros < 20){ 
     total = (litros * precoAlcool) - (litros * precoAlcool * 0.03)
     alert(`Valor total a ser pago: R$ ${total}`);
    }
    else {
     total = (litros * precoAlcool) - (litros * precoAlcool * 0.05)
     alert(`Valor total a ser pago: R$ ${total}`)
    }
}
else if (tipoCombustivel === 'G' || tipoCombustivel === 'g'){
     if(litros < 20){
          total = (litros * precoGasolina) - (litros * precoGasolina * 0.04)
          alert(`Valor total a ser pago: R$ ${total}`);
         }
         else {
          total = (litros * precoGasolina) - (litros * precoGasolina * 0.06)
          alert(`Valor total a ser pago: R$ ${total}`)
         }

}
else{
     alert("ERRO -------- Digite: A-álcool, G-gasolina")
     return
}











}