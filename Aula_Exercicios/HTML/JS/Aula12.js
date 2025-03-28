function adicionar(){
const chamarPeloId = document.getElementById("guest-1");
const chamarPelaClass = document.getElementsByClassName("guest");
const chamarPelaTag = document.getElementsByTagName("li");



const chamarPeloID = document.querySelector("#guest-1");
const chamarPeloClass = document.querySelector(".guest-1");
const chamarTodos = document.querySelectorAll("#Id ou .Class");

const input = document.querySelector("#name");
// add adicona, remove exclui, toggle faz o contrario (caso exista ele exclui e caso não exista ele adiciona)
input.classList.toggle("input-error");


//Adicionar cor
const button = document.querySelector("#btn1")
button.style.backgroundColor = "red"

//criar elementos com JS e inserir no DOM

const guests = document.querySelector("ul")
console.log(guests)
//Adicionando li no ul
const newGuest = document.createElement("li")
newGuest.classList.add("guest")
const guestName = document.createElement("span")
//Primeira maneira de adicionar
guestName.textContent = "Aluno3"
console.log(guestName);
//Segunda maneira de adicionar
newGuest.append(guestName);
console.log(guestName)
//Pôr no HTML
guests.append(newGuest);
}