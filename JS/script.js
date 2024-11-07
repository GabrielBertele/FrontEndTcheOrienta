// Seleciona elementos do DOM
const restaurants = document.querySelectorAll(".restaurant");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-btn");
const container = document.querySelector(".container");

// Adiciona evento de clique a cada restaurante
restaurants.forEach((restaurant) => {
    restaurant.addEventListener("click", () => {
        popup.style.display = "flex";
        container.classList.add("blur"); // Aplica blur ao fundo
    });
});

// Fecha o pop-up quando o botão de fechar é clicado
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    container.classList.remove("blur"); // Remove o blur do fundo
});

// Fecha o pop-up se o usuário clicar fora do conteúdo do pop-up
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
        container.classList.remove("blur"); // Remove o blur do fundo
    }
});