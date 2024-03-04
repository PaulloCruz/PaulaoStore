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
            <a href="../pages/produtosDetalhes.html"><img src="${produto.image}" alt="${produto.title}"></a>
            <a href="../pages/produtosDetalhes.html?id=${produto.id}" ><h2 class="title">${produto.title}</h2></a>
                
                <p class="btn-price"><strong class="price">$${produto.price}</strong></p>
            `;
            
            // Adiciona a div do produto à seção de produtos na página
            produtosDiv.appendChild(produtoDiv);

            // Adiciona eventos de mouse para animação quando o usuário passa o mouse sobre o produto
            produtoDiv.addEventListener('mouseover', () => {
                produtoDiv.style.transform = 'scale(1.001)';
            });
            produtoDiv.addEventListener('mouseout', () => {
                produtoDiv.style.transform = 'scale(1)';
            });
        });
    })
    .catch(error => console.error('Erro:', error));// se tiver erro ele informa o erro

    <a class="info-name" href="../pages/productId.html?id=${product.id}">${product.title}</a>
