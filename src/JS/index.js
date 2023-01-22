/*
Objetivo 1 - quando o usuário clicar no botão de veja o trailer , devemos abrir o modal com o video do trailer



Objetivo 1 - quando o usuário clicar no botão de veja o trailer , devemos abrir o modal com o video do trailer
- passo 1 - dar um jeito de pegar o elemento que represente o botão na tela usando o JS
- passo 2 - dar um jeito de identificar quando o usuário clicar no botão
- passo 3 - dar um jeito de pegar o elemento da modal no JS
- passo 4 - abrir a modal na tela 



Objetivo 2 - quando o usuário clicar no X devemos fechar o modal
- passo 1 - dar um jeito de pegar o elemento de fechar a modal
- passo 2 - dar um jeito de identificar quando o usuário clicar no X
- passo 3 - fechar a modal

 */


const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
	modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", "");
}); 