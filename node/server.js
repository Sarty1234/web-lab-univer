class Card {
  constructor(id, name, passengers, mass) {
      this.id = id;
      this.name = name;
      this.passengers = passengers;
      this.mass = mass;
  }
}

const http = require('http');
let allCards = [];
let lastCardId = 0;


allCards[0] = new Card(0, "AShip 1", 20, 500);
allCards[1] = new Card(1, "CShip 2", 50, 200);
allCards[2] = new Card(2, "BShip 2", 3, 1000);

function SearchFilter(card) {
    return card.name.toLowerCase().includes(searchNameFilter.toLowerCase());
}

var searchNameFilter = "";
function GetAllCards(searchString, sortMethod) {
    searchNameFilter = searchString;
    let displayCards = allCards.filter(SearchFilter);

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

    let totalWeight = displayCards.reduce((acc, card) => acc + Number(card.mass), 0);


    console.log(`Sended response with ${displayCards.length} elements`);
    return { 'data': displayCards.slice(), 'totalWeight': totalWeight };
}


function SaveNewCard(card) {
    do {
        lastCardId += 1;
    } while (allCards.filter((a) => a.id == lastCardId).length != 0);
    
    let targetCard;
    targetCard = new Card(lastCardId, card.name, card.passengers, card.mass);
    allCards.push(targetCard);
    console.log(`Saved new card:\n  id:${targetCard.id},\n  name:${targetCard.name},\n  passengers:${targetCard.passengers},\n  mass:${targetCard.mass}\n`);

    return 0;
}


function EditCard(card) {
    let filterResult = allCards.filter((a) => a.id == card.id);
    let targetCard;
    if (filterResult.length === 0) {
        return 1;
    } else {
        targetCard = filterResult[0];
        targetCard.name = card.name;
        targetCard.passengers = card.passengers;
        targetCard.mass = card.mass;
    }
    console.log(`Edited card:\n  id:${targetCard.id},\n  name:${targetCard.name},\n  passengers:${targetCard.passengers},\n  mass:${targetCard.mass}\n`);

    return 0;
}

function DeleteCardByID(card) {
    allCards = allCards.filter((a) => a.id != card.id);
    console.log(`Deleted card:\n  id:${card.id},\n  name:${card.name},\n  passengers:${card.passengers},\n  mass:${card.mass}\n`);
    return 0;
}



function ResponseGenerator(url, method, body, headers) {
    if (method == 'GET')
    {
        return { status: 200, payload: GetAllCards(headers['searchstring'], headers['order']) };
    }

    if (!body || body.trim() === '') {
        return { status: 400, payload: "ERROR: No data in body" };
    }

    let parsedBody;
    try {
        parsedBody = JSON.parse(body);
    } catch {
        return { status: 400, payload: "ERROR: Invalid body" };
    }


    if (method == 'POST') 
    {
        let res = SaveNewCard(parsedBody);
        if (res == 0) {
            return { status: 200, payload: "SUCCESS: Data saved" };
        } else {
            return { status: 400, payload: "ERROR: During data save" };
        }
    }
    
    if (method == 'PUT') 
    {
        let res = EditCard(parsedBody);
        
        if (res == 0) {
            return { status: 200, payload: "SUCCESS: Data edited" };
        } else {
            return { status: 400, payload: "ERROR: During data edit" };
        }
    }
    
    if (method == 'DELETE') 
    {
        let res = DeleteCardByID(parsedBody);
        if (res == 0) {
            return { status: 200, payload: "SUCCESS: Data deleted" };
        } else {
            return { status: 400, payload: "ERROR: During data delete" };
        }
    }

    return "ERROR";
}


const server = http.createServer((req, res) => {
    const { url, method } = req;
    let body = '';


    if (req.method === 'OPTIONS') {
        res.writeHead(204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, searchString, order'
        });
        res.end();
        return;
    }


    req.on('data', chunk => {
      body += chunk.toString();
    });


    req.on('end', () => {
        try {
            console.log(`${method} method used for ${url}`);
            console.log(`Body: \n${body}`);

            const { status, payload } = ResponseGenerator(url, method, body, req.headers);

            res.writeHead(status, { 'Content-Type': 'application/json', 'access-control-allow-origin': '*' });
            res.end(JSON.stringify(payload));

        } catch (error) {
            if (!res.headersSent) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
            }
            console.log(`ERROR: ${error}`);
        }
    });
});


const PORT = 8080;

server.listen(PORT, 'localhost', () => {
   console.log(`Server running at http://localhost:${PORT}/`);
});




