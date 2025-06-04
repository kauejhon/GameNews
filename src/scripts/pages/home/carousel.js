const imagens = ['src/assets/img/img-01.jpg', 'src/assets/img/img-02.jpg', 'src/assets/img/img-03.jpg'];
const links = ['src/pages/noticia1.html', 'src/pages/noticia2.html', 'src/pages/noticia3.html']; 
let indice = 0;

function mostrarImagem() {
  const img = document.getElementById('imagem');
  const a = document.getElementById("imagem-link");
  img.src = imagens[indice];
  a.href = links[indice];
}

function proxima() {
  indice = (indice + 1) % imagens.length;
  mostrarImagem();
}

function anterior() {
  indice = (indice - 1 + imagens.length) % imagens.length;
  mostrarImagem();
}

