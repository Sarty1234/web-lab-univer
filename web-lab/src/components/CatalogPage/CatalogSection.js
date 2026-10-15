import { Link } from "react-router-dom";
import CardButton from "./CardButton";
import { useCatalogDataContext } from "./CatalogDataContext";


export default function CatalogSection({searchFilters}) {
  const { items } = useCatalogDataContext();
  let visibleItems = [...items]

  if (searchFilters) {
    if (searchFilters.searchText && searchFilters.searchText.trim() !== "") {
      const clearSearchString = searchFilters.searchText.toLowerCase().trim();
      visibleItems = visibleItems.filter((item) => {
        return (item.headerTitle.toLowerCase().includes(clearSearchString) || item.description.toLowerCase().includes(clearSearchString));
      });

    }



    if (searchFilters.TypeSelect && searchFilters.TypeSelect !== "21") {
      visibleItems = visibleItems.filter((item) => item.type.teg === searchFilters.TypeSelect);
    }
    
    if (searchFilters.WeightSelect && searchFilters.WeightSelect !== "31") {
      visibleItems = visibleItems.filter((item) => item.weightClass.teg === searchFilters.WeightSelect);
    }

    if (searchFilters.OrderSelect === "11") {
      visibleItems.sort((a, b) => a.headerTitle.localeCompare(b.headerTitle));
    }
    else if (searchFilters.OrderSelect === "12") {
      visibleItems.sort((a, b) => a.priceHour - b.priceHour);
    }
  }

  return (
    <div id="CatalogCardsDiv">
      <div className="row" style={{ marginLeft: 0, marginRight: 0, paddingBottom: "100px", paddingTop: "20px" }}>
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="col-12 col-md-6 col-lg-3 d-flex justify-content-center jump-up"
            style={{ marginBottom: "20px", marginTop: "20px" }}
          >
            <div
              className="card d-flex h-100 flex-column align-items-center"
              style={{
                borderRadius: "20px",
                borderWidth: "1.5px",
                borderColor: "rgb(0, 0, 0)",
                overflow: "hidden",
                width: "280px",
              }}
            >
              <div
                className="card-body d-flex h-100 flex-column align-items-center"
                style={{ padding: 0, width: "100%" }}
              >
                <h5
                  className="card-title text-center"
                  style={{
                    overflow: "hidden",
                    background: "rgb(238, 238, 238)",
                    width: "100%",
                    padding: "15px",
                    margin: 0,
                  }}
                >
                  {item.headerTitle}
                </h5>

                <img
                  className="img-fluid mb-3"
                  width="500"
                  height="374"
                  src={item.imageSrc}
                  alt={item.headerTitle}
                  style={{
                    height: "140px",
                    width: "180px",
                    marginTop: "16px",
                    borderRadius: "5px",
                    objectFit: "cover",
                  }}
                />

                <h3
                  className="text-center text-dark mb-2 card-subtitle"
                  style={{
                    fontWeight: "bold",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                  }}
                >
                  {item.passengers} місць, {item.weight}т
                </h3>

                <p
                  className="card-text text-center"
                  style={{
                    padding: "15px",
                    fontSize: "16px",
                    marginBottom: "auto",
                  }}
                >
                  {item.description}
                </p>

                <div
                  className="row"
                  style={{
                    paddingRight: "25px",
                    paddingLeft: "25px",
                    marginBottom: "15px",
                    width: "100%",
                    marginRight: 0,
                    marginLeft: 0,
                  }}
                >
                  <div className="col" style={{ padding: 0 }}>
                    <strong style={{ fontSize: "20px", textAlign: "left" }}>
                      Ціна:
                    </strong>
                  </div>
                  <div className="col text-end" style={{ padding: 0 }}>
                    <span style={{ fontSize: "20px" }}>${item.priceHour}</span>
                  </div>
                </div>

                <Link to="/catalog" style={{ textDecoration: "none" }}>
                  <CardButton text="Замовити" cardID={ item.id } />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}