// Espera o DOM estar completamente carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o formulário e define o evento de envio
    const form = document.querySelector("form");

    // Evento de envio do formulário
    form.addEventListener("submit", function(event) {
        // Previne o comportamento padrão de envio do formulário (que recarrega a página)
        event.preventDefault();

        // Recupera os valores dos campos
        const valorInput = document.querySelector("#amount"); // Pegando o input de valor
        const tipoMoeda = document.querySelector("#currency").value; // Pegando o select de moeda

        const valor = parseFloat(valorInput.value); // Convertendo o valor em número
        if (isNaN(valor) || valor <= 0) {
            alert("Número inválido, tente novamente.");
            return;
        }

        if (!tipoMoeda) {
            alert("Por favor, selecione uma moeda.");
            return;
        }

        // Taxas de câmbio
        let cambio = 1;
        if (tipoMoeda === "USD") {
            cambio = 5.70;
        } else if (tipoMoeda === "EUR") {
            cambio = 6.20;
        } else if (tipoMoeda === "GBP") {
            cambio = 7.44;
        }

        // Calcula o valor convertido
        const valorConvertido = (valor * cambio).toFixed(2);

        // Exibe o resultado no rodapé
        const descriptionElement = document.querySelector("#description");
        const resultElement = document.querySelector("#result");

        descriptionElement.innerText = `Você inseriu ${valor} ${tipoMoeda}.`;
        resultElement.innerText = `O valor em Reais é: R$ ${valorConvertido}`;

        // Exibe o footer (se estava oculto)
        const footer = document.querySelector("footer");
        footer.classList.add("show-result");

        // Limpa o campo de entrada após a conversão (opcional)
        valorInput.value = "";
    });
});
