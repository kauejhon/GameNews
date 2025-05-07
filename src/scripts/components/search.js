// Captura os elementos da barra de pesquisa
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Adiciona evento de clique ao botão de pesquisa
searchButton.addEventListener('click', function () {
  const query = searchInput.value.trim().toLowerCase();

  if (query) {
    // Mapeia os termos de pesquisa para páginas específicas
    const pages = {
      'notícias': 'src/pages/noticias.html',
      'destaque': 'src/pages/destaque.html',
      'contato': 'src/pages/contato.html',
      'sobre': 'src/pages/sobre.html',
    };

    // Verifica se o termo corresponde a uma página
    if (pages[query]) {
      window.location.href = pages[query];
    } else {
      alert('Nenhum resultado encontrado para: ' + query);
    }
  } else {
    alert('Por favor, insira um termo para pesquisar.');
  }
});

// Permite pressionar "Enter" para realizar a pesquisa
searchInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    searchButton.click();
  }
});