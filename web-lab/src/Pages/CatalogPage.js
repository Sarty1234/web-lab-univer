
import React, { useState } from "react";
import FilterSection from '../components/CatalogPage/FilterSection.js'
import CatalogSection from '../components/CatalogPage/CatalogSection.js'

export default function CatalogPage() {
  const [searchFilters, setSearchFilters] = useState({
    OrderSelect: "11",
    TypeSelect: "21",
    WeightSelect: "31",
    searchText: ""
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