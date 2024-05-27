// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(id, nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let produto = carrinho.find(p => p.id === id);
    if (produto) {
        produto.quantidade += 1;
    } else {
        carrinho.push({ id, nome, preco, quantidade: 1 });
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
}

// Função para carregar os produtos do carrinho
function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.innerHTML = '';
    carrinho.forEach(produto => {
        carrinhoDiv.innerHTML += `
            <div>
                <span>${produto.nome}</span>
                <span>R$ ${produto.preco.toFixed(2)}</span>
                <span>Quantidade: 
                    <button onclick="alterarQuantidade('${produto.id}', -1)">-</button>
                    ${produto.quantidade}
                    <button onclick="alterarQuantidade('${produto.id}', 1)">+</button>
                </span>
                <button onclick="removerProduto('${produto.id}')">Remover</button>
            </div>
        `;
    });
    calcularTotal();
}

// Função para alterar a quantidade de um produto no carrinho
function alterarQuantidade(id, delta) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let produto = carrinho.find(p => p.id === id);
    if (produto) {
        produto.quantidade += delta;
        if (produto.quantidade <= 0) {
            removerProduto(id);
        } else {
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            carregarCarrinho();
        }
    }
}

// Função para remover um produto do carrinho
function removerProduto(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(p => p.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho();
}

// Função para calcular o total do carrinho
function calcularTotal() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let total = carrinho.reduce((acc, produto) => acc + produto.preco * produto.quantidade, 0);
    document.getElementById('total').innerText = `Total: R$ ${total.toFixed(2)}`;
}

// Função para finalizar a compra
function finalizarCompra() {
    alert('Compra finalizada!');
    localStorage.removeItem('carrinho');
    carregarCarrinho();
}

// Carregar o carrinho ao carregar a página do carrinho
document.addEventListener('DOMContentLoaded', carregarCarrinho);
