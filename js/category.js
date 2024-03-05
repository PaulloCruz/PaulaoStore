//sort: https://fakestoreapi.com/products?sort=desc

// categories: 'https://fakestoreapi.com/products/categories')

// products: "https://fakestoreapi.com/products"

//Limite: https://fakestoreapi.com/products?limit=5

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
            <a href="../pages/produtosDetalhes.html?id=${produto.id}"><img src="${produto.image}" alt="${produto.title}"></a>
            <a href="../pages/produtosDetalhes.html?id=${produto.id}" ><h2 class="title">${produto.title}</h2></a>
                
                <p class="btn-price"><strong class="price">$${produto.price}</strong></p>
            `;

            // Adiciona a div do produto à seção de produtos na página
            produtosDiv.appendChild(produtoDiv);

            // Adiciona eventos de mouse para animação quando o usuário passa o mouse sobre o produto
            produtoDiv.addEventListener('mouseover', () => {
                produtoDiv.style.transform = 'scale(1.01)';
            });
            produtoDiv.addEventListener('mouseout', () => {
                produtoDiv.style.transform = 'scale(1)';
            });
        });
    })
    .catch(error => console.error('Erro:', error));
}

// ORDENAÇÃO POR TIPO

// Preenche o select com as categorias disponíveis
fetch('https://fakestoreapi.com/products/categories')
  .then(res => res.json())
  .then(data => {
    const select = document.getElementById('categoriasTipo');
    const option = document.createElement('option');
    option.value = 'semCategoria';
    option.text = 'Selecione uma categoria';
    select.appendChild(option);

    const semCategoriaOption = document.createElement('option');
    semCategoriaOption.value = 'semCategoria';
    semCategoriaOption.text = 'Todos';
    select.appendChild(semCategoriaOption);

    data.forEach(categoria => {
      const option = document.createElement('option');
      option.value = categoria;
      option.text = categoria;
      select.appendChild(option);
    });
  });


// Busca os produtos da categoria selecionada
// CATEGORIA LIMITAR PRODUTOS POR QUANTIDADE
// https://fakestoreapi.com/products/category/${categoria}
// https://fakestoreapi.com/products?limit=5
function getProdutos() {
  const categoria = document.getElementById('categoriasTipo').value; // pega o tipo da categoria
  const quantidade = document.getElementById('quantidade').value; // Obtém a quantidade inserida pelo usuário
  const divProdutos = document.getElementById('produtos');
  divProdutos.innerHTML = ''; // Limpa a div

  if (categoria === 'semCategoria') {
    exibirProdutos(`https://fakestoreapi.com/products?limit=${quantidade}`)
  } else {
    exibirProdutos(`https://fakestoreapi.com/products/category/${categoria}?limit=${quantidade}`)
  }
}


// Preenche o select com as categorias disponíveis
// Função que é chamada quando o usuário clica no botão


// CATEGORIA PREÇO, CRESCENTE E DECRESCENTE
// https://fakestoreapi.com/products?sort=desc/asc
// em breve