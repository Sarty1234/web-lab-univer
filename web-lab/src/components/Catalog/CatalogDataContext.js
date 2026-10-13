
import { createContext, useContext, useState } from 'react';
import { Item } from "./Item";
import { WeightProperty } from "./WeightProperty";
import { ClassProperty } from "./ClassProperty";

const itemsData = [
  new Item({
    id: 1,
    headerTitle: "1Катер",
    passengers: 10,
    weight: 52,
    weightClass: WeightProperty.Medium,
    type: ClassProperty.Passengers,
    description:
      "Сучасний швидкісний катер для комфортних екскурсій, прибережних прогулянок та пасажирських перевезень невеликих груп.",
    priceHour: 40,
    priceDay: 400,
    imageSrc: "./img/катер.jpg",
  }),
  new Item({
    id: 2,
    headerTitle: "2Контейнеровоз",
    passengers: 20,
    weight: 1000,
    weightClass: WeightProperty.Heavy,
    type: ClassProperty.Transport,
    description:
      "Потужне великотоннажне вантажне судно, призначене для масштабних морських перевезень стандартних контейнерів і важких вантажів.",
    priceHour: 8000,
    priceDay: 80000,
    imageSrc: "./img/контейнеровоз.webp",
  }),
  new Item({
    id: 3,
    headerTitle: "3Рибальський човен",
    passengers: 5,
    weight: 6,
    weightClass: WeightProperty.Light,
    type: ClassProperty.Fishing,
    description:
      "Надійне промислове судно з необхідним оснащенням для морської риболовлі, тралення та роботи у прибережних водах.",
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