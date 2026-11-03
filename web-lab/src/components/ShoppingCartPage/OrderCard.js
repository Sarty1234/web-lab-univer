
import { ClassProperty } from "../CatalogPage/ClassProperty";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../redux/actions";


export default function OrderCard({ itemWithDates, cartID }) {
  const dispatch = useDispatch();

  const handleItemRemove = () => {
    console.log(`Deleting item ${cartID}`);
    dispatch(removeCartItem(cartID));
  };

  return (
    <div className="row cart-item py-2">
      <div className="col-md-3">
        <img src={itemWithDates.item.imageSrc} alt="Product" className="img-fluid rounded" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      </div>
      <div className="col-md-5">
        <h5 className="card-title">{itemWithDates.item.headerTitle}</h5>
        <p className="text-muted">{ClassProperty.list[itemWithDates.item.type].full}</p>
      </div>
      <div className="col-md-2">
        <div className="input-group">
          <p style={{ maxWidth: '100px' }} type="text" className="text-center">
            { itemWithDates.amount.toString() + (itemWithDates.useHours ? "год" : "дн") + " * " + (itemWithDates.useHours ? itemWithDates.item.priceHour : itemWithDates.item.priceDay).toString() + "$" }
          </p>
        </div>
      </div>
      <div className="col-md-2 text-end" style={{ marginBottom: "0rem" }}>
        <p className="fw-bold">{((itemWithDates.useHours ? itemWithDates.item.priceHour : itemWithDates.item.priceDay) * itemWithDates.amount).toString() + "$"}</p>
        <button onClick={handleItemRemove} className="btn btn-sm btn-outline-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
}