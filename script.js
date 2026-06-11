// Seleciona todos os botões de reação de todos os posts gerados no HTML
const botoes = document.querySelectorAll(".btn-reacao");

// Adiciona o evento de clique individualmente para cada botão mapeado
botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        console.log("Reação registrada no console!");
        
        // Localiza o elemento de texto (span) interno do botão que foi clicado
        let contador = this.querySelector("span");
        
        // Pega o valor textual atual do span, converte em número inteiro e soma +1
        contador.textContent = parseInt(contador.textContent) + 1;
    });
});