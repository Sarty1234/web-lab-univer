import { Link } from "react-router-dom";
import ApplyButton from "./ApplyButton";
import FilterSelect from "./FilterSelect";

export default function FilterSection() {

    const filterOptions = [
        {
            defaultValue: "11",
            options: [{ value: "11", label: "Filter 1" }]
        },
        {
            defaultValue: "21",
            options: [{ value: "21", label: "Filter 2" }]
        },
        {
            defaultValue: "31",
            options: [{ value: "31", label: "Filter 31" }, { value: "32", label: "Filter 32" }]
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