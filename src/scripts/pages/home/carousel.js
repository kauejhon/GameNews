const imagens = ['src/assets/img/img-01.jpg', 'src/assets/img/img-02.jpg', 'src/assets/img/img-03.jpg']; 
let indice = 0;

function mostrarImagem() {
  const img = document.getElementById('imagem');
  img.src = imagens[indice];
}

function proxima() {
  indice = (indice + 1) % imagens.length;
  mostrarImagem();
}

function anterior() {
  indice = (indice - 1 + imagens.length) % imagens.length;
  mostrarImagem();
}
