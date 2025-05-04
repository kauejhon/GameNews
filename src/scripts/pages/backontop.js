// Mostrar/esconder botão ao rolar
window.onscroll = function () {
  const btn = document.getElementById("btnTopo");
  if (document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
// Voltar ao topo
document.getElementById("btnTopo").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
