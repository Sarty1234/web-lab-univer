document.addEventListener("DOMContentLoaded", function () {
  const openNewShipPageButton = document.getElementById("openNewShipPageButton");
  const openShipsPageButton = document.getElementById("openShipsPageButton");
  const shipsPage = document.getElementById("shipsPage");
  const newShipPage = document.getElementById("newShipPage");

  if (openNewShipPageButton && shipsPage && newShipPage) {
    openNewShipPageButton.addEventListener("click", function () {
      shipsPage.style.display = "none";
      newShipPage.style.display = "flex";
    });
  }
    
  if (openShipsPageButton && shipsPage && newShipPage) {
    openShipsPageButton.addEventListener("click", function () {
      newShipPage.style.display = "none";
      shipsPage.style.display = "flex";
    });
  }
});