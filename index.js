const products = [
    {
        name: 'Smartphone Motorola Moto G54',
        description: 'Smartphone Motorola Moto G54 5G Grafite 128GB, 4GB RAM',
        price: 'R$ 999,00',
        image: 'produtos/Motog54.avif',
        link: 'p1/p1.html'
    },
    {
        name: 'iPhone 13 Apple 128GB',
        description: 'iPhone 13 Apple 128GB Cor Estelar',
        price: 'R$ 3.599,00',
        image: 'produtos/iphone13.png',
        link: 'p2/p2.html'
    },
    {
        name: 'Apple iPhone 14 Pro',
        description: 'Apple iPhone 14 Pro 1TB Dourado',
        price: 'R$ 7.531,50',
        image: 'produtos/iphone14.png',
        link: 'p3/p3.html'
    },
    {
        name: 'Smartphone Motorola Moto G84 5G Azul',
        description: 'Vegan Leather 256GB, 8GB RAM',
        price: 'R$ 1.389,00',
        image: 'produtos/motog84.png',
        link: 'p4/p4.html'
    },
    {
        name: 'Smartphone Xiaomi Redmi 13C Azul',
        description: '256GB, 8GB de RAM, Android 13 e Processador Octa-Core',
        price: 'R$ 1.499,00',
        image: 'produtos/redminote13.png',
        link: 'p5/p5.html'
    },
    {
        name: 'Samsung Galaxy S21',
        description: 'Samsung Galaxy S21 128GB, 8GB RAM',
        price: 'R$ 2.999,00',
        image: 'produtos/s21.png',
        link: 'p6/p6.html'
    },
    {
        name: 'Apple iPad ',
        description: '10ª Geração 64GB 10,9" iPadOS 12 MP',
        price: 'R$ 2.448,80',
        image: 'produtos/ipad.png',
        link: 'p7/p7.html'
    },
    {
        name: 'Tablet Samsung Galaxy Tab S6 Lite',
        description: '64GB, 4GB RAM, Tela Imersiva de 10.4',
        price: 'R$ 1.865,00',
        image: 'produtos/tablet.png',
        link: 'p8/p8.html'
    }
];

function renderProducts(filteredProducts = products) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Limpa o contêiner antes de adicionar novos produtos

    if (filteredProducts.length === 0) {
        container.innerHTML = '<p>Nenhum produto encontrado</p>';
        return;
    }

    const rows = Math.ceil(filteredProducts.length / 4);

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.className = 'product-row';

        for (let j = i * 4; j < (i * 4) + 4 && j < filteredProducts.length; j++) {
            const product = filteredProducts[j];
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <a href="${product.link}">
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p class="description">${product.description}</p>
                    <p class="price">${product.price}</p>
                </a>
            `;
            row.appendChild(productDiv);
        }

        container.appendChild(row);
    }
}

function searchProducts() {
    const searchTerm = document.querySelector('.search input').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
}

function clearSearch() {
    document.querySelector('.search input').value = '';
    renderProducts();
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    document.querySelector('.search button').addEventListener('click', searchProducts);
    document.querySelector('.search input').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchProducts();
        }
    });

    window.addEventListener('popstate', function(event) {
        clearSearch();
    });
});






