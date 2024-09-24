// Recupera itens do carrinho do localStorage
const itensCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(id) {
    const produto = document.querySelector(`.produto[data-id="${id}"]`);
    const nome = produto.querySelector('h3').textContent;
    const preco = parseFloat(produto.querySelector('p:last-of-type').textContent.replace('Preço: R$ ', '').replace(',', '.'));

    const item = {
        id,
        nome,
        preco,
    };

    itensCarrinho.push(item);
    localStorage.setItem('carrinho', JSON.stringify(itensCarrinho));
    mostrarPopup(`${nome} adicionado ao carrinho!`);
    exibirCarrinho();
}

// Função para mostrar o pop-up
function mostrarPopup(mensagem) {
    const popup = document.getElementById('popup');
    popup.textContent = mensagem;
    popup.classList.remove('hidden');
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 3000);
}

// Função para exibir o carrinho
function exibirCarrinho() {
    const carrinhoElement = document.getElementById('itens-carrinho');
    carrinhoElement.innerHTML = '';
    itensCarrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.nome;

        const button = document.createElement('button');
        button.textContent = 'Remover';
        button.onclick = () => {
            removerDoCarrinho(item.id);
        };

        li.appendChild(button);
        carrinhoElement.appendChild(li);
    });
}

// Função para remover produtos do carrinho
function removerDoCarrinho(id) {
    const index = itensCarrinho.findIndex(item => item.id === id);
    if (index > -1) {
        itensCarrinho.splice(index, 1);
        localStorage.setItem('carrinho', JSON.stringify(itensCarrinho));
        exibirCarrinho();
    }
}

// Adiciona um evento de clique ao botão de finalizar compra
document.getElementById('finalizar-compra').onclick = () => {
    if (itensCarrinho.length > 0) {
        window.location.href = 'finalizar.html'; // Redireciona para a página de finalização
    } else {
        alert('Seu carrinho está vazio!');
    }
};

// Alterna a visibilidade do carrinho
document.getElementById('toggle-carrinho').onclick = () => {
    const carrinho = document.getElementById('carrinho');
    carrinho.classList.toggle('hidden');
    const button = document.getElementById('toggle-carrinho');
    button.textContent = carrinho.classList.contains('hidden') ? '+' : '-';
};

// Inicializa ao carregar a página
window.onload = () => {
    exibirCarrinho();
};

// Estilo de scroll no cabeçalho
window.onscroll = () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};
