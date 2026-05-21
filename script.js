// =========================
// MMP Plataforma
// script.js
// =========================


// Mensagem inicial
console.log("MMP Plataforma iniciada.");


// Botão principal
const botao = document.querySelector(".btn");

if(botao){

botao.addEventListener("click", () => {

alert("Bem-vindo à MMP Plataforma!");

});

}


// Efeito de entrada nos cards
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

card.style.opacity = "0";
card.style.transform = "translateY(40px)";
card.style.transition = "0.6s";

setTimeout(() => {

card.style.opacity = "1";
card.style.transform = "translateY(0px)";

}, 300 * index);

});


// Relógio digital
function atualizarHorario(){

const agora = new Date();

const horas = agora.getHours().toString().padStart(2,"0");
const minutos = agora.getMinutes().toString().padStart(2,"0");
const segundos = agora.getSeconds().toString().padStart(2,"0");

const relogio = document.getElementById("relogio");

if(relogio){

relogio.innerHTML = `${horas}:${minutos}:${segundos}`;

}

}

setInterval(atualizarHorario,1000);


// Tema escuro e claro
const temaBtn = document.getElementById("temaBtn");

if(temaBtn){

temaBtn.addEventListener("click", () => {

document.body.classList.toggle("light");

});

}


// Animação do título
const titulo = document.querySelector(".hero h1");

if(titulo){

let mostrar = true;

setInterval(() => {

titulo.style.opacity = mostrar ? "0.7" : "1";

mostrar = !mostrar;

},1000);

}


// Scroll suave
document.querySelectorAll("a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const id = this.getAttribute("href");

if(id !== "#"){

document.querySelector(id).scrollIntoView({
behavior:"smooth"
});

}

});

});


// Simulação de carregamento
window.addEventListener("load", () => {

console.log("Sistema carregado com sucesso.");

});


// Informações do navegador
console.log("Navegador:", navigator.userAgent);


// Data automática
const ano = new Date().getFullYear();

const footer = document.querySelector("footer");

if(footer){

footer.innerHTML = `© ${ano} MMP Plataforma - Todos os direitos reservados.`;

}
