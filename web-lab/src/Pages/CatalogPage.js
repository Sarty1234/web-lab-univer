

import axios from 'axios';
import React, { useState, useEffect } from "react";
import FilterSection from '../components/CatalogPage/FilterSection.js'
import CatalogSection from '../components/CatalogPage/CatalogSection.js'
import { Item } from "../components/CatalogPage/Item";

export default function CatalogPage() {
  const [searchFilters, setSearchFilters] = useState({
    OrderSelect: "11",
    TypeSelect: "21",
    WeightSelect: "31",
    searchText: ""
  });


  const [shipData, setShipData] = useState([]);
  useEffect(() => {
    refreshShipData();
  }, []);

  const refreshShipData = (search, order, type, weight_class) => {
    let request = "http://127.0.0.1:8000/ships?";

    if (search) {
      request += "&search=" + search;
    }
    if (order) {
      request += "&order=" + order;
    }
    if (type) {
      request += "&type=" + type;
    }
    if (weight_class) {
      request += "&weight_class=" + weight_class;
    }

    axios
      .get(request)
      .then((response) => { 
        const shipObjects = response.data.map((item) => new Item({
            id: item.id,
            headerTitle: item.header_title,
            passengers: item.passengers,
            weight: item.weight,
            weightClass: item.weight_class_id,
            type: item.ship_type_id,
            description: item.description,
            priceHour: item.price_hour,
            priceDay: item.price_day,
            imageSrc: item.image_src,
          }));
        setShipData(shipObjects); 
        console.log(shipObjects);
      })
      .catch((err) => console.error(err));
  }

  const handleSetFilters = (newFilters) => {
    console.log("Set search filters:", newFilters);

    setSearchFilters(newFilters);
    refreshShipData(newFilters.searchText);
  };


  return (
    <div>
      <FilterSection onSetSearchFilters={handleSetFilters}/>
      <CatalogSection searchFilters={searchFilters}/>
    </div>
  );
}