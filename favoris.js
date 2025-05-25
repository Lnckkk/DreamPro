const favoritesContainer = document.getElementById("favorites-container");
const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

if (favorites.length === 0) {
  favoritesContainer.innerHTML = `
    <p style="text-align:center; color: gray;">Aucun véhicule favori pour l’instant.</p>
  `;
} else {
  favorites.forEach((vehicleName) => {
    const cardHTML = localStorage.getItem(`card_html_${vehicleName}`);
    if (cardHTML) {
      favoritesContainer.innerHTML += cardHTML;
    }
  });
}
const cards = favoritesContainer.querySelectorAll(".deals__card");
cards.forEach((card) => {
  card.classList.add("deals__card"); // on assure qu'elle a la bonne classe
});