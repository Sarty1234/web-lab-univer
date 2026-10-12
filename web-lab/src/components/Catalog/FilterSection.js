
import React, { useState } from "react";
import ApplyButton from "./ApplyButton";
import FilterSelect from "./FilterSelect";

export default function FilterSection({onSetSearchFilters}) {

    const filterOptions = [
        {
            selectID: "OrderSelect",
            defaultValue: "11",
            options: [{ value: "11", label: "По назві" }, { value: "12", label: "По ціні" }]
        },
        {
            selectID: "TypeSelect",
            defaultValue: "21",
            options: [{ value: "21", label: "Всі" }, { value: "p", label: "Пасажирські" }, { value: "t", label: "Трансортні" }, { value: "f", label: "Рибальські" }]
        },
        {
            selectID: "WeightSelect",
            defaultValue: "31",
            options: [{ value: "31", label: "Всі" }, { value: "s", label: "Легкі" }, { value: "m", label: "Середні" }, { value: "l", label: "Тяжкі" }]
        }
    ];

    const [filters, setFilters] = useState({
      OrderSelect: "11",
      TypeSelect: "21",
      WeightSelect: "31",
    });

    const handleSelectChange = (selectId, value) => {
      setFilters((prev) => ({
        ...prev,
        [selectId]: value,
      }));
    };

    const handleSearchButtonClick = () => {
      console.log("Applied filters:", filters);
      if (onSetSearchFilters) {
        onSetSearchFilters(filters);
      }
    };

  return (
    <div id="FilterRowDiv">
      <div className="container my-4">
        <div className="row justify-content-between align-items-center gy-3">
          <div className="col d-flex flex-row flex-wrap align-items-center">
            {filterOptions.map((filter, index) => (
              <FilterSelect
                key={index}
                value={filters[filter.selectID]}
                options={filter.options}
                onChange={(e) =>
                  handleSelectChange(filter.selectID, e.target.value)
                }
              />
            ))}
          </div>

          <div className="col-auto">
            <ApplyButton text={ "Пошук" } onClick={handleSearchButtonClick} />
          </div>
        </div>
      </div>

      
      <hr style={{ color: 'rgb(0,0,0)', borderWidth: '2px' }} />
    </div>
  );
}