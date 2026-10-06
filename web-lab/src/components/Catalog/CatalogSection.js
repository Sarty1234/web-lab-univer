import { Link } from "react-router-dom";
import CardButton from "./CardButton";
import { Item } from "./Item";


export const itemsData = [
  new Item({
    id: 1,
    headerTitle: "Катер",
    title: "Amazing stuff",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
    price: 2415,
    imageSrc: "./img/катер.jpg",
  }),
  new Item({
    id: 2,
    headerTitle: "Контейнеровоз",
    title: "Amazing stuff",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
    price: 45678,
    imageSrc: "./img/контейнеровоз.webp",
  }),
  new Item({
    id: 3,
    headerTitle: "Рибальський човен",
    title: "Amazing stuff",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
    price: 215,
    imageSrc: "./img/рибальський човен.jpg",
  }),
];



export default function CatalogSection() {
  return (
    <div id="CatalogCardsDiv">
      <div className="row" style={{ marginLeft: 0, marginRight: 0, paddingBottom: "100px", paddingTop: "20px" }}>
        {itemsData.map((item) => (
          <div
            key={item.id}
            className="col-12 col-md-6 col-lg-3 d-flex justify-content-center"
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
                  alt={item.title}
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
                  {item.title}
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
                      Price:
                    </strong>
                  </div>
                  <div className="col text-end" style={{ padding: 0 }}>
                    <span style={{ fontSize: "20px" }}>${item.price}</span>
                  </div>
                </div>

                <Link to="/catalog" style={{ textDecoration: "none" }}>
                  <CardButton text="Замовити" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}