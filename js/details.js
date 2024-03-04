function exibirProdutos(url){
    fetch(url)
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
}

document.addEventListener("DOMContentLoaded", async function() {
    const productId = productIdUrl();//é o id do produto pego pela ulr
    if (productId) {
        loadProductDetails(productId);//pega os objetos da ulr da api, a fake store
    } else {
        console.error('ID do produto não encontrado na URL.');
    }
});

async function loadProductDetails(productId) {//funcao que busca as informacoes dos obejtos da url dada
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);//ulr que eu to usando, fake story api
        const product = await response.json();
        showProductDetails(product);//oque vai ser jogado no html
    } catch (error) {
        console.error('Erro ao carregar os detalhes do produto:', error);
    }
}
a
function showProductDetails(product) {//funcao que pega o id da div e joga informações dentro dela
    const divDetail = document.createElement(`div`);
    divDetail.classList.add(`detail-box`);
    const productDetailsDiv = document.getElementById('product-details');
    productDetailsDiv.innerHTML = `
    <div class="detail-box">
        <img class="detail-img" src="${product.image}" alt="Imagem do produto"/>
        <article class="detail-info">
            <div class="detail-div">
                <div class="price-category">
                    <div>
                        <h3>Categoria:</h3>
                        <a class="detail-category" href="./categorias.html">${product.category}</a>
                    </div>
                    <div>
                        <h3>Preço:</h3>
                        <p>$${product.price}</p>
                    </div>
                </div>
                    <div>
                        <h3>Produto:</h3>
                        <p class="title-text">${product.title}</p>
                    </div>
                    <div>
                        <h3>Descrição:</h3>
                        <p class="description-text">${product.description}</p>
                    </div>
                <button class="carrinho-btn">Adicionar carrinho<img class="cart-img" src="../img/cart.png" alt=""></button>
            </div>
        </article>
    </div>
    `;
}

function productIdUrl() { //função que pega o id pela ulr
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id')
    return urlParams.get('id');
}
