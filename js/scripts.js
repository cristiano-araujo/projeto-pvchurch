// Seleção de elementos
const rendaInput  = document.querySelector("#renda");
const calcBtn  = document.querySelector("#calc-btn");
const clearBtn  = document.querySelector("#clear-btn");
const calcContainer = document.querySelector("#calc-container");
const resultContainer = document.querySelector("#result-container");
const valorPrimicia = document.querySelector("#primicia span");
const valorDizimo = document.querySelector("#dizimo span");

const valorOferta = document.querySelector("#oferta span");

const msg = document.querySelector("#msg span");
const backBtn = document.querySelector("#back-btn");
// funções

// botao limpar
function cleanInputs() {
    rendaInput.value = "";
}

function validDigits(text) {
    return text.replace(/[^0-9,]/g, ""); // substitui qualquer caracter que não seja número por nada;
}

function calcprimicias (renda) {
    const primicias = (renda / 30 ).toFixed(2);
    return primicias;
}

function calcdizimos (renda , primicias) {
    const dizimos = ((renda - primicias ) * 0.10).toFixed(2);
    return dizimos ;
}

function calcofertas (renda) {
    const ofertas = (renda * 0.01).toFixed(2);
    return ofertas ;
}

function showOrHideResults() {
    calcContainer.classList.toggle("hide");
    resultContainer.classList.toggle("hide");
}

// Inicialização

// Eventos

[rendaInput].forEach((el) => {
el.addEventListener("input", (e) => {
    const updatedValue = validDigits(e.target.value);
    e.target.value = updatedValue;
    });
});

calcBtn.addEventListener("click", (e) => { 
    e.preventDefault();

    const renda = +rendaInput.value.replace ("," , ".");
    
    if (!renda) return;

    const primicias = calcprimicias(renda);
    const dizimos = calcdizimos(renda, primicias);
    const ofertas = calcofertas(renda, primicias);

    valorPrimicia.innerText = primicias;
    valorDizimo.innerText = dizimos;
    valorOferta.innerText = ofertas;
 
    showOrHideResults();
});

// continuação do botao limpar

clearBtn.addEventListener("click", (e) => {
   e.preventDefault();
    cleanInputs();
});

backBtn.addEventListener("click", () => {
    cleanInputs();
    showOrHideResults();
});