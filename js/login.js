// Importa os dados do arquivo data.json (que contém informações de usuários)
const data = [
  {
      "id": 1,
      "usuario": "carlos",
      "senha": "123456"
  },
  {
      "id": 2,
      "usuario": "igor",
      "senha": "654321"
  },
  {
      "id": 3,
      "usuario": "leticia",
      "senha": "123654"
  },
  {
      "id": 4,
      "usuario": "paulinho",
      "senha": "paulaolindo"
  },
  {
      "id": 5,
      "usuario": "aMaisLinda",
      "senha": "dudismeucachorro"
  },
  {
    "id": 6,
      "usuario": "joaoVictoria",
      "senha": "qualquerUma"
  },
]

// Obtém a referência para o botão de login
const btn = document.querySelector("#login");

// Exibe os dados no console (para fins de depuração)
console.log(data);

// Adiciona um evento de clique ao botão de login
btn.addEventListener('click', (event) => {
  event.preventDefault(); // Impede o comportamento padrão do botão (recarregar a página)

  // Obtém os valores digitados nos campos de usuário e senha
  const user = document.getElementById('user').value;
  const password = document.getElementById('password').value;
  console.log(user, password);

  // Procura pelos dados de login correspondentes no array "data"
  const login = data.find((obj) => obj.usuario === user && obj.senha === password);

  // Verifica se o login foi bem-sucedido
  if (login) {
      // Redireciona para a página inicial (../index.html)
      window.location = '../index.html';
  } else {
      // Exibe um alerta informando que as informações estão incorretas
      alert('Informações incorretas, tente novamente');
  }
});

