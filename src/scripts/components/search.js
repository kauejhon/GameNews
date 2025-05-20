document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-input");
  const searchButton = document.querySelector(".search-button");

  function redirectToSearchPage() {
    if (searchInput.value.trim() !== "") {
      window.location.href = "src/pages/busca.html";
    }
  }

  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      redirectToSearchPage();
    }
  });

  searchButton.addEventListener("click", function () {
    redirectToSearchPage();
  });
});