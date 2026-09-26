class Card {
  constructor(id, name, passengers, mass) {
      this.id = id;
      this.name = name;
      this.passengers = passengers;
      this.mass = mass;
  }
}

let allCards = [];
let searchNameFilter = "";
let lastCardId = 0;
let currentCardEditID = 0;

function GetContent() {
    let ships = [];
    ships[0] = new Card(0, "AShip 1", 20, 500);
    ships[1] = new Card(2, "CShip 2", 50, 200);
    ships[2] = new Card(5, "BShip 2", 3, 1000);
    lastCardId = 5;
    return ships.slice();
}

function UpdateSearchFilter() {
    searchNameFilter = document.getElementById("searchFilterInput").value;
    
    DisplayCards();
}

function SearchFilter(card) {
    return card.name.toLowerCase().includes(searchNameFilter.toLowerCase());
}


let template = document.getElementById("templateCard");
function DisplayCards() {
    let displayCards = allCards.filter(SearchFilter);
    let sortMethod = document.getElementById("sortMethodSelect").value;
    
    
    //          SORTING
    // by name
    if (sortMethod == 1) {
        displayCards.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    } 
    // by passengers
    else if (sortMethod == 2) {
        displayCards.sort((a,b) => b.passengers - a.passengers);
    }
    // by mass
    else if (sortMethod == 3) {
        displayCards.sort((a,b) => b.mass - a.mass);
    }
    
    //        RENDERING
    // window.alert(displayCards.length);
    const container = document.getElementById("cardHolder");
    
    if (!container || !template) return;
    
    container.innerHTML = "";
    displayCards.forEach((card) => {
        
        const cloneCard = template.cloneNode(true);

        cloneCard.removeAttribute("id");
        cloneCard.style.display = "block";

        cloneCard.querySelector(".card__name").textContent = card.name;
        cloneCard.querySelector(".card__passengers").textContent = `Passengers: ${card.passengers}`;
        cloneCard.querySelector(".card__mass").textContent = `Mass: ${card.mass}t`;

        const editButton = cloneCard.querySelector(".card__edit__button");
        const deleteButton = cloneCard.querySelector(".card__delete__button");

        if (editButton) editButton.onclick = () => {
            ShowNewShipPage(card.id);
        };
        if (deleteButton) deleteButton.onclick = () => {
            DeleteCardByID(card.id);
            DisplayCards();
        };

        container.appendChild(cloneCard);
    });
}

function SaveCardByID() {
    if (SaveFormVariablesCheckError()) return;
    let id = currentCardEditID;
    let filterResult = allCards.filter((a) => a.id == id);
    let targetCard;
    if (filterResult.length === 0) {
        lastCardId += 1;
        targetCard = new Card(lastCardId, document.getElementById("CreateShipName").value, document.getElementById("CreateShipPassengers").value, document.getElementById("CreateShipMass").value);
        allCards.push(targetCard);
    } else {
        targetCard = filterResult[0];
        targetCard.name = document.getElementById("CreateShipName").value;
        targetCard.passengers = Number(document.getElementById("CreateShipPassengers").value);
        targetCard.mass = Number(document.getElementById("CreateShipMass").value);
    }
    
    currentCardEditID = targetCard.id;
    document.getElementById("CreateShipName").value = targetCard.name; document.getElementById("CreateShipPassengers").value = targetCard.passengers;
    document.getElementById("CreateShipMass").value = targetCard.mass;
    
    ShowShipsPage();
}

function DeleteCardByID(id) {
    allCards = allCards.filter((a) => a.id != id);
}

function FillNewShipPage(id) {
    let filterResult = allCards.filter((a) => a.id == id);
    let targetCard;
    if (filterResult.length === 0) {
        targetCard = new Card(lastCardId + 1, "New Ship", 1, 1);
    } else {
        targetCard = filterResult[0];
    }
    
    currentCardEditID = targetCard.id;
    document.getElementById("CreateShipName").value = targetCard.name; document.getElementById("CreateShipPassengers").value = targetCard.passengers;
    document.getElementById("CreateShipMass").value = targetCard.mass;
}

function SaveFormVariablesCheckError() {
    const name = document.getElementById("CreateShipName").value.trim();
    const passengersRaw = document.getElementById("CreateShipPassengers").value.trim();
    const massRaw = document.getElementById("CreateShipMass").value.trim();

    if (name.length === 0) {
        alert("Введіть назву корабля");
        return true;
    }

    const passengers = Number(passengersRaw);
    if (passengersRaw === "" || isNaN(passengers) || passengers < 0) {
        alert("Кількість пасажирів має бути коректним невід'ємним числом");
        return true;
    }

    
    const mass = Number(massRaw);
    if (massRaw === "" || isNaN(mass) || mass <= 0) {
        alert("Маса має бути коректним невід'ємним числом");
        return true;
    }

    return false;
}

document.addEventListener("DOMContentLoaded", function () {
    let template = document.getElementById("templateCard");
    ShowShipsPage();
    allCards = GetContent();
    DisplayCards();
});