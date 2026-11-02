
import { ItemWithDates } from "../components/ShoppingCartPage/ItemWithDates";
import OrderCard from "../components/ShoppingCartPage/OrderCard";
import { useCatalogDataContext } from "../components/CatalogPage/CatalogDataContext";
import { Link } from "react-router-dom";


export default function ShoppingCart() {
  const { items } = useCatalogDataContext();
  let notVisibleItems = [...items];
  const visibleItems = notVisibleItems.map(aObj => new ItemWithDates(aObj, true, 2));


  return (
    <div className="container py-5">
      <h1 className="mb-5">Кошик</h1>
      <div className="row">
        <div className="col-lg-8">
          {/* Cart Items */}
          <div className="card mb-4">
            <div className="card-body">
              {visibleItems.map((itemWithDates) => (
                <OrderCard key= { "c_" + itemWithDates.item.id.toString() + "_" + itemWithDates.item.headerTitle.toString() } itemWithDates={ itemWithDates }/>
              ))}
            </div>
          </div>
          
          <div className="text-start mb-4">
            <Link to="/catalog" className="btn hover-shadow" style={{
                borderRadius: '16px',
                fontSize: '18px',
                padding: '10px 20px',
                background: '#ffffff',
                color: '#000000',
                fontWeight: 'bold',
                border: '2px solid rgb(66, 66, 66)',
                }}>
              <i className="bi bi-arrow-left me-2"></i>
              Назад до каталогу
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          {/* Cart Summary */}
          <div className="card cart-summary">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-4" style={{ fontSize: "1.5rem" }}>
                <strong>Всього</strong>
                <strong>$229.97</strong>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn hover-shadow" style={{
                  background: 'rgb(66, 66, 66)',
                  color: '#ffffff',
                  fontSize: '18px',
                  padding: '10px 20px',
                  borderRadius: '16px',
                  fontWeight: 'bold',
                  border: 'none',
                }}>
                  Оформити замовлення
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}