let imagem = document.getElementsByClassName('imgZoom');
for (let i = 0; i < imagem.length; i++) {
    // Quando o mouse entra na imagem
    imagem[i].addEventListener("mouseenter", () => {
        imagem[i].classList.add("zoom-in");
    });
    // Quando o mouse sai da imagem
    imagem[i].addEventListener("mouseleave", () => {
        imagem[i].classList.remove("zoom-in");
    });
}

console.log(imagem);
