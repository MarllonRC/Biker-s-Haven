// Recupera itens do carrinho do localStorage
const itensCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para exibir os itens no carrinho
function exibirItensCarrinho() {
    const carrinhoElement = document.getElementById('itens-carrinho');
    const totalElement = document.getElementById('total');
    carrinhoElement.innerHTML = '';
    let total = 0;

    itensCarrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoElement.appendChild(li);
        total += item.preco;
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função para mostrar o pop-up
function mostrarPopup(mensagem) {
    const popup = document.getElementById('popup');
    popup.textContent = mensagem;
    popup.classList.remove('hidden');

    // Remove o pop-up após 3 segundos
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 3000);
}

// Adiciona evento ao formulário de compra
document.getElementById('form-compra').onsubmit = (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    mostrarPopup('Compra confirmada! Em breve suas motos novas estarão na sua casa! Obrigado pela sua compra.');
    localStorage.removeItem('carrinho'); // Limpa o carrinho após a compra
    setTimeout(() => {
        window.location.href = 'index.html'; // Redireciona para a página inicial
    }, 3000);
};

// Inicializa ao carregar a página
window.onload = () => {
    exibirItensCarrinho();
};
