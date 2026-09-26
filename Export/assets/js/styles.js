



function ShowShipsPage() {
    DisplayCards();
    document.getElementById("newShipPage").style.display = "none";
    document.getElementById("shipsPage").style.display = "flex";
};


function ShowNewShipPage(id) {
    FillNewShipPage(id);
    document.getElementById("shipsPage").style.display = "none";
    document.getElementById("newShipPage").style.display = "flex";
};
