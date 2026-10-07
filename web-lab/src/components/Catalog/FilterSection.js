import { Link } from "react-router-dom";
import ApplyButton from "./ApplyButton";
import FilterSelect from "./FilterSelect";

export default function FilterSection() {

    const filterOptions = [
        {
            defaultValue: "11",
            options: [{ value: "11", label: "Order by name" }, { value: "12", label: "Order by price" }]
        },
        {
            defaultValue: "21",
            options: [{ value: "21", label: "Any" }, { value: "22", label: "Passenger" }, { value: "23", label: "Transporting" }, { value: "24", label: "Fishing" }]
        },
        {
            defaultValue: "31",
            options: [{ value: "31", label: "Any" }, { value: "32", label: "Light" }, { value: "33", label: "Medium" }, , { value: "33", label: "Heavy" }]
        }
    ];



  return (
    <div id="FilterRowDiv">
      <div className="container my-4">
        <div className="row justify-content-between align-items-center gy-3">
          <div className="col d-flex flex-row flex-wrap align-items-center">
            {filterOptions.map((filter, index) => (
              <FilterSelect
                key={index}
                defaultValue={filter.defaultValue}
                options={filter.options}
              />
            ))}
          </div>

          <div className="col-auto">
            <ApplyButton />
          </div>
        </div>
      </div>

      <hr
        style={{
          borderTop: "2px solid rgb(0, 0, 0)",
          opacity: 1,
          margin: 0
        }}
      />
    </div>
  );
}