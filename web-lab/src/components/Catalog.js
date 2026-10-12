
import React, { useState } from "react";
import FilterSection from './Catalog/FilterSection.js'
import CatalogSection from './Catalog/CatalogSection.js'

export default function Catalog() {
  const [searchFilters, setSearchFilters] = useState({
    OrderSelect: "11",
    TypeSelect: "21",
    WeightSelect: "31",
  });

  const handleSetFilters = (newFilters) => {
    console.log("Set search filters:", newFilters);
    setSearchFilters(newFilters);
  };


  return (
    <div>
      <FilterSection onSetSearchFilters={handleSetFilters}/>
      <CatalogSection searchFilters={searchFilters}/>
    </div>
  );
}