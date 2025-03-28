
    let input = document.getElementById("nomeImput");
    let nome = input.alue.trim();

    if(nome != " "){
        let lista = document.getElementById("listaNomes");
        let novoItem = createElement("li");
        novoItem.textContent = nome;
        lista.appendChild(novoItem);
        input.value = " ";
    }
    
