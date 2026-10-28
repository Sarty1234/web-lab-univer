
import { useCatalogDataContext } from "./CatalogDataContext";
import ShipCard from "./ShipCard"


export default function CatalogSection({searchFilters}) {
  const { items } = useCatalogDataContext();
  let visibleItems = [...items]



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