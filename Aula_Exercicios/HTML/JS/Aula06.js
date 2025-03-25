function mudarVariaveis(){
    let num1 = parseInt(prompt("Digite o primeiro número inteiro"));
    let num2 = parseInt(prompt("Digite o segundo número inteiro"));
    

if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    alert("Digite números inteiros válidos");
} 

let antes = `Antes de inverter: num1 = ${num1}, num2 = ${num2}`;

[num1, num2] = [num2, num1];

let depois = `Depois da inversão: num1 ${num1}, num2 = ${num2}`;
document.getElementById("resultado").innerHTML = `${antes} <br> ${depois}`
}