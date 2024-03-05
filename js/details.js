// Pega o id do produto da URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Busca as informações do produto
fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(res => res.json())
  .then(produto => {
    // Preenche a página com as informações do produto
    const productDetails = document.getElementById('product-details');
    productDetails.innerHTML = `
    <div class="product-infos">
    <img src="${produto.image}" alt="${produto.title}">
    <div class="details">
      <h2 class="title">${produto.title}</h2>
      <p class="description">${produto.description}</p>    
    
  </div>
  <div class="campos">
  <p class="btn-price"><strong class="price">R$ ${produto.price}</p>

  
  </div>
  </div>

                
    `;

    // Adiciona um evento de clique ao botão de compra
    const buyButton = document.getElementById('buy-button');
    buyButton.addEventListener('click', () => {
      // Aqui você pode adicionar a lógica de compra
      alert(`Comprado: ${produto.title}`);
    });
  });