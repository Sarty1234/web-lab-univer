

import axios from 'axios';
import React, { useState, useEffect, useCallback } from "react";
import FilterSection from '../components/CatalogPage/FilterSection.js'
import CatalogSection from '../components/CatalogPage/CatalogSection.js'
import { Item } from "../components/CatalogPage/Item";
import { useCatalogDataContext } from '../components/CatalogPage/CatalogDataContext.js';
import LoadingSpinner from '../components/CatalogPage/LoadingSpinner.js';
import NoContent from '../components/CatalogPage/NoContent.js';

export default function CatalogPage() {
  const [searchFilters, setSearchFilters] = useState({
    OrderSelect: "11",
    TypeSelect: "21",
    WeightSelect: "31",
    searchText: ""
  });


  const [contentLoadingState, setContentLoadingState] = useState("ok");
  const { setItems } = useCatalogDataContext();
  useEffect(() => {
    refreshShipData();
  }, []);

  const logPoint = useCallback((text) => {
    console.log(text);
  }, []);

  const refreshShipData = async (search, order, type, weight_class) => {
    setContentLoadingState("loading");
    const apiUrl = process.env.REACT_APP_API_URL
    let request = apiUrl + "/ships?";
    logPoint(request);
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
        setContentLoadingState("ok");
      })
      .catch((err) => {
        console.error(err);
        setContentLoadingState("error");
      })
      .finally(() => {
        // setContentLoadingState("ok");
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

      

      { contentLoadingState === "ok" && <CatalogSection searchFilters={searchFilters}/> }
      { contentLoadingState === "loading" && <LoadingSpinner/> }
      { contentLoadingState === "error" && <NoContent/> }
    </div>
  );
}