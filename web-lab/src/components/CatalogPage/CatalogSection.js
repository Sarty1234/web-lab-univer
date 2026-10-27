
import { useCatalogDataContext } from "./CatalogDataContext";
import ShipCard from "./ShipCard"


export default function CatalogSection({searchFilters}) {
  const { items } = useCatalogDataContext();
  let visibleItems = [...items]

  // if (searchFilters) {
  //   if (searchFilters.searchText && searchFilters.searchText.trim() !== "") {
  //     const clearSearchString = searchFilters.searchText.toLowerCase().trim();
  //     visibleItems = visibleItems.filter((item) => {
  //       return (item.headerTitle.toLowerCase().includes(clearSearchString) || item.description.toLowerCase().includes(clearSearchString));
  //     });

  //   }



  //   if (searchFilters.TypeSelect && searchFilters.TypeSelect !== "21") {
  //     visibleItems = visibleItems.filter((item) => item.type.teg === searchFilters.TypeSelect);
  //   }
    
  //   if (searchFilters.WeightSelect && searchFilters.WeightSelect !== "31") {
  //     visibleItems = visibleItems.filter((item) => item.weightClass.teg === searchFilters.WeightSelect);
  //   }

  //   if (searchFilters.OrderSelect === "11") {
  //     visibleItems.sort((a, b) => a.headerTitle.localeCompare(b.headerTitle));
  //   }
  //   else if (searchFilters.OrderSelect === "12") {
  //     visibleItems.sort((a, b) => a.priceHour - b.priceHour);
  //   }
  // }



  return (
    <div id="CatalogCardsDiv">
      <div className="row" style={{ marginLeft: 0, marginRight: 0, paddingBottom: "100px", paddingTop: "20px" }}>
        {visibleItems.map((item) => (
          <ShipCard key={ "s_" + item.id.toString() + "_" + item.headerTitle.toString()} item={ item }/>
        ))}
      </div>
    </div>
  );
}