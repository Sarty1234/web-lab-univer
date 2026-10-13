
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCatalogDataContext } from "./Catalog/CatalogDataContext";

export default function ItemPage() {
  const { items, displayElementID } = useCatalogDataContext();
  const item = items.find((el) => String(el.id) === String(displayElementID));


  const [rentDuration, setRentDuration] = useState(1);
  const [rentTimeUnit, setRentTimeUnit] = useState("h");

  const count = Math.max(0, Number(rentDuration) || 0);
  const pricePerTimeUnit = rentTimeUnit === "d" ? item.priceDay : item.priceHour;
  const rentPrice = count * pricePerTimeUnit;


  return (
    <div className="py-5" style={{ paddingRight: '100px', paddingLeft: '100px' }}>
      <div className="row d-flex align-items-center mb-5">
        <div className="col-12 col-md-6" style={{ width: '360px' }}>
          <img
            className="img-fluid rounded"
            src={item.imageSrc}
            alt="Item preview"
            style={{ width: '340px', height: '260px', objectFit: 'cover' }}
          />
        </div>

        <div className="col-12 col-md-6 ps-md-4">
          <div className="d-flex gap-2 mb-3">
            <span
              style={{
                background: item.type.color,
                color: '#ffffff',
                fontWeight: 'bold',
                padding: '5px 15px',
                borderRadius: '13px',
              }}
            >
              { item.type.full }
            </span>
            <span
              style={{
                background: item.weightClass.color,
                color: '#ffffff',
                fontWeight: 'bold',
                padding: '5px 15px',
                borderRadius: '13px',
              }}
            >
              { item.weightClass.full }
            </span>
          </div>

          <h1 className="mb-3" style={{ color: 'rgb(78, 87, 96)' }}>
            { item.headerTitle }
          </h1>
          <p className="mb-4" style={{ color: 'rgb(0, 0, 0)' }}>
            { item.description }
          </p>

          <div className="row row-cols-1 row-cols-sm-2 g-3" style={{ width: '400px' }}>
            <div className="col">
              <label className="col-form-label fw-bold d-block">Орендувати на:</label>
              <input
                type="number"
                min="1"
                className="form-control hover-shadow"
                style={{ width: '150px', height: '34px' }}
                onChange={(e) => setRentDuration(e.target.value)}
              />
            </div>
            <div className="col">
              <label className="col-form-label fw-bold d-block">Одиниці часу:</label>
              <select
                className="form-select hover-shadow"
                style={{ width: '150px', height: '34px' }}
                onChange={(e) => setRentTimeUnit(e.target.value)}
              >
                <option value="h">Години</option>
                <option value="d">Дні</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row align-items-center pt-4" style={{ marginTop: '120px' }}>
        <div className="col-6">
          <h3 id="item-price-span" className="fw-bold mb-0">Ціна: {rentPrice}$</h3>
        </div>
        <div className="col-6 d-flex justify-content-end gap-3">
          <Link to="/catalog">
            <button
                type="button"
                className="btn hover-shadow"
                style={{
                borderRadius: '16px',
                fontSize: '18px',
                padding: '10px 20px',
                width: '140px',
                height: '50px',
                background: '#ffffff',
                color: '#000000',
                fontWeight: 'bold',
                border: '2px solid rgb(66, 66, 66)',
                }}
            >
                Назад
            </button>
          </Link>
          <button
            type="button"
            className="btn hover-shadow"
            style={{
              background: 'rgb(66, 66, 66)',
              color: '#ffffff',
              fontSize: '18px',
              padding: '10px 20px',
              borderRadius: '16px',
              width: '140px',
              height: '50px',
              fontWeight: 'bold',
              border: 'none',
            }}
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}