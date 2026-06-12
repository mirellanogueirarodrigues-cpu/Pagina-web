// --- Código das Aulas Anteriores (Contador de Reações) ---
const botoes = document.querySelectorAll(".btn-reacao");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        console.log("Reação registrada no console!");
        let contador = this.querySelector("span");
        contador.textContent = parseInt(contador.textContent) + 1;
    });
});


// --- AULA: Mecanismo para alternar o Tema Claro/Escuro ---
// Seleciona o botão da lua pela classe dele
const botaoTema = document.querySelector(".btn-tema-escuro");

// Adiciona o evento de clique no botão da lua
botaoTema.addEventListener("click", function() {
    // O comando "toggle" adiciona a classe se ela não existir, e remove se ela já existir
    document.body.classList.toggle("tema-escuro");
});