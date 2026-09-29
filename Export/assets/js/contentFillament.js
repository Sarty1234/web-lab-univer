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
const url = "http://localhost:8080/";

async function GetContent() {
    const config = {
       method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    
    const response = await fetch(url);
    
    if (!response.ok) {
        const error = new Error(`Request failed with status ${response.status}`);
        error.status = response.status;
        error.data = response.json;
        throw error;
    }
    
    const json = await response.json();
    return json;
}

function UpdateSearchFilter() {
    searchNameFilter = document.getElementById("searchFilterInput").value;
    
    DisplayCards();
}

function SearchFilter(card) {
    return card.name.toLowerCase().includes(searchNameFilter.toLowerCase());
}


let template = document.getElementById("templateCard");
async function DisplayCards() {
    allCards = await GetContent();
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
    
    let totalWeight = 0;
    container.innerHTML = "";
    displayCards.forEach((card) => {
        totalWeight += Number(card.mass);
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
        };

        container.appendChild(cloneCard);
    });
    
    document.getElementById("total__weight__label").textContent = `Total weight: ${totalWeight}t`;
}

let IsNewCard = 0;
async function SaveCardByID() {
    if (SaveFormVariablesCheckError()) return;
    let targetCard;
    // console.log(filterResult);
    // filterResult.length == 0 || 
    if (IsNewCard === 1) {
        targetCard = new Card(0, document.getElementById("CreateShipName").value, document.getElementById("CreateShipPassengers").value, document.getElementById("CreateShipMass").value);
        
        const config = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(targetCard)
        };
    
        const response = await fetch(url, config);
    
        if (!response.ok) {
            const error = new Error(`Request failed with status ${response.status}`);
            error.status = response.status;
            error.data = response.json;
            throw error;
        }
    
        const json = response.json();
        
    } else {
        let filterResult = allCards.filter((a) => a.id == currentCardEditID);
        
        targetCard = filterResult[0];
        targetCard.name = document.getElementById("CreateShipName").value;
        targetCard.passengers = Number(document.getElementById("CreateShipPassengers").value);
        targetCard.mass = Number(document.getElementById("CreateShipMass").value);
        
        const config = {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(targetCard)
        };
    
        const response = await fetch(url, config);
    
        if (!response.ok) {
            const error = new Error(`Request failed with status ${response.status}`);
            error.status = response.status;
            error.data = response.json;
            throw error;
        }
    
        const json = await response.json();
    }
    
    // currentCardEditID = targetCard.id;
    // document.getElementById("CreateShipName").value = targetCard.name; document.getElementById("CreateShipPassengers").value = targetCard.passengers;
    // document.getElementById("CreateShipMass").value = targetCard.mass;
    
    ShowShipsPage();
}

async function DeleteCardByID(id) {
    let filt = allCards.filter((a) => a.id == id)
    if (filt.length === 0) {
        return;
    }
    
    const config = {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(filt[0])
    };

    const response = await fetch(url, config);

    if (!response.ok) {
        const error = new Error(`Request failed with status ${response.status}`);
        error.status = response.status;
        error.data = response.json;
        throw error;
    }

    const json = await response.json();
    DisplayCards();
}

function FillNewShipPage(id) {
    let filterResult = allCards.filter((a) => a.id == id);
    let targetCard;
    if (filterResult.length === 0) {
        targetCard = new Card(lastCardId + 1, "New Ship", 1, 1);
        IsNewCard = 1;
    } else {
        targetCard = filterResult[0];
        IsNewCard = 0;
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
    DisplayCards();
});