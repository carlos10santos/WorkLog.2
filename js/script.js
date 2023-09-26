// Obtém uma referência para o botão
const changeBackgroundBtn = document.getElementById("changeBackgroundBtn");

// Define uma lista de cores de plano de fundo
const backgroundColors = ["#FFFFFF", "#8A307F", "#5733FF", "#000000"];

let currentIndex = 0; // Índice da cor atual 

// Função para alterar o plano de fundo
function changeBackground() {
    document.body.style.backgroundColor = backgroundColors[currentIndex];
    currentIndex = (currentIndex + 1) % backgroundColors.length;
}

// Adiciona um evento de clique ao botão
changeBackgroundBtn.addEventListener("click", changeBackground);