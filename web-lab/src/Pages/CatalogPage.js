

import axios from 'axios';
import React, { useState, useEffect } from "react";
import FilterSection from '../components/CatalogPage/FilterSection.js'
import CatalogSection from '../components/CatalogPage/CatalogSection.js'
import { Item } from "../components/CatalogPage/Item";
import { useCatalogDataContext } from '../components/CatalogPage/CatalogDataContext.js';
import LoadingSpinner from '../components/CatalogPage/LoadingSpinner.js';

export default function CatalogPage() {
  const [searchFilters, setSearchFilters] = useState({
    OrderSelect: "11",
    TypeSelect: "21",
    WeightSelect: "31",
    searchText: ""
  });


  const [loading, setLoading] = useState(false);
  const { setItems } = useCatalogDataContext();
  useEffect(() => {
    refreshShipData();
  }, []);

  const refreshShipData = async (search, order, type, weight_class) => {
    setLoading(true);
    let request = "http://127.0.0.1:8000/ships?";
    const wait = await new Promise((resolve) => setTimeout(resolve, 1000));

    if (search) {
      request += "&search=" + search;
    }
    if (order && order.toString() !== "11") {
      request += "&order=" + order.toString();
    }
    if (type && type.toString() !== "0") {
      request += "&type=" + type.toString();
    }
    if (weight_class && weight_class.toString() !== "0") {
      request += "&weight_class=" + weight_class.toString();
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
        setItems(shipObjects); 
        console.log(shipObjects);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }

  const handleSetFilters = (newFilters) => {
    console.log("Set search filters:", newFilters);

    setSearchFilters(newFilters);
    refreshShipData(newFilters.searchText, newFilters.OrderSelect, newFilters.TypeSelect, newFilters.WeightSelect);
  };


  return (
    <div style={{ minHeight: '1000px' }}>
      <FilterSection onSetSearchFilters={handleSetFilters}/>
      {
        loading ? 
        (<LoadingSpinner/>) 
        : 
        (<CatalogSection searchFilters={searchFilters}/>)
      }
    </div>
  );
}