
import { createContext, useContext, useState } from 'react';
import { Item } from "./Item";

const itemsData = [
  new Item({
    id: 1,
    headerTitle: "1Катер",
    passengers: 10,
    weight: 52,
    weightClass: "Середній",
    type: "Пасажирський",
    title: "Amazing stuff",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
    priceHour: 40,
    priceDay: 400,
    imageSrc: "./img/катер.jpg",
  }),
  new Item({
    id: 2,
    headerTitle: "2Контейнеровоз",
    passengers: 20,
    weight: 1000,
    weightClass: "Тяжкий",
    type: "Транспортний",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
    priceHour: 8000,
    priceDay: 80000,
    imageSrc: "./img/контейнеровоз.webp",
  }),
  new Item({
    id: 3,
    headerTitle: "3Рибальський човен",
    passengers: 5,
    weight: 6,
    weightClass: "Легкий",
    type: "Рибальський",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
    priceHour: 10,
    priceDay: 100,
    imageSrc: "./img/рибальський човен.jpg",
  }),
];



const CatalogDataContext = createContext(itemsData);

export function CatalogDataProvider({ children }) {
  const [items, setItems] = useState(itemsData);
  const [displayElementID, setDisplayElementID] = useState(2);

  const reloadItems = () => {
    console.log("Reloading CatalogDataContext...");
    setItems([...itemsData]);
    setDisplayElementID(2);
  };

  return (
    <CatalogDataContext.Provider value={{ items, reloadItems, displayElementID, setDisplayElementID }}>
      {children}
    </CatalogDataContext.Provider>
  );
}
const useCatalogDataContext = () => useContext(CatalogDataContext);

export { useCatalogDataContext };