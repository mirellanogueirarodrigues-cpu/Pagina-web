// Seleciona todos os botões de reação da página
const botoes = document.querySelectorAll(".botao-reacao");

// Adiciona o evento de clique a cada um deles
botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        // 'this' se refere exatamente ao botão que foi clicado neste momento
        console.log("Um botão de reação foi clicado!");
        
        // Procura a tag <span> que está dentro do botão clicado
        let contador = this.querySelector("span");
        
        // Pega o número atual do texto, transforma em número inteiro e soma +1
        contador.textContent = parseInt(contador.textContent) + 1;
    });
});