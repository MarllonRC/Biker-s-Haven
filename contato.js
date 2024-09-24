// Função para exibir o pop-up
function mostrarPopup(mensagem) {
    const popup = document.getElementById('popup');
    popup.textContent = mensagem;
    popup.classList.remove('hidden');

    setTimeout(() => {
        popup.classList.add('hidden');
    }, 3000);
}

// Listener para o envio do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão

    // Aqui você pode incluir a lógica para enviar a mensagem (por exemplo, uma chamada AJAX)

    // Exibe o pop-up
    mostrarPopup('Mensagem enviada com sucesso!');

    // Limpa o formulário
    this.reset();
});
