// Faz uma requisição para a API "https://fakestoreapi.com/products"
fetch('https://fakestoreapi.com/products')
    .then(res => res.json()) // Converte a resposta para formato JSON
    .then(data => {
        // Obtém a referência para o elemento HTML com o ID "produtos"
        const produtosDiv = document.getElementById('produtos');

        // Itera sobre cada produto retornado pela API
        data.forEach(produto => {
            // Cria um novo elemento <div> para representar o produto
            const produtoDiv = document.createElement('div');
            produtoDiv.className = 'produto'; // Define a classe CSS para a div

            // Preenche o conteúdo da div com informações do produto, incluindo a imagem, título e preço
            produtoDiv.innerHTML = `
                <img src="${produto.image}" alt="${produto.title}">
                <h2 class="title">${produto.title}</h2>
                <p class="btn-price"><strong class="price">$${produto.price}</strong></p>
            `;

            // Adiciona a div do produto à seção de produtos na página
            produtosDiv.appendChild(produtoDiv);

            // Adiciona eventos de mouse para animação quando o usuário passa o mouse sobre o produto
            produtoDiv.addEventListener('mouseover', () => {
                produtoDiv.style.transform = 'scale(1.1)';
            });
            produtoDiv.addEventListener('mouseout', () => {
                produtoDiv.style.transform = 'scale(1)';
            });
        });
    })
    .catch(error => console.error('Erro:', error));

//     fetch('https://fakestoreapi.com/products'): Realiza uma requisição HTTP para a URL da API que retorna informações sobre produtos.

// .then(res => res.json()): Converte a resposta da API (que é inicialmente em formato de texto) para um objeto JSON.

// .then(data => { ... }): Manipula os dados obtidos da API dentro desta função.

// const produtosDiv = document.getElementById('produtos');: Obtém a referência para o elemento HTML com o ID “produtos”.

// data.forEach(produto => { ... }): Itera sobre cada objeto de produto retornado pela API.

// const produtoDiv = document.createElement('div');: Cria um novo elemento <div> para representar cada produto.

// produtoDiv.innerHTML = ...: Preenche o conteúdo da div com informações do produto, incluindo a imagem, título e preço.

// produtosDiv.appendChild(produtoDiv);: Adiciona a div do produto à seção de produtos na página.

// produtoDiv.addEventListener('mouseover', ...) e produtoDiv.addEventListener('mouseout', ...): Adiciona eventos de mouse para animações quando o usuário passa o mouse sobre o produto.

// .catch(error => console.error('Erro:', error));: Lida com erros, caso ocorram durante a requisição à API.