export default function FilterSelect({ defaultValue, onChange, options = [] }) {
  const defaultSelectStyle = {
    height: "2.4rem",
    borderRadius: "10px",
    borderWidth: "2px",
    width: "160px",
    padding: "5px",
    marginRight: "15px",
    marginLeft: "15px",
  };

  return (
    <select id={options.selectID} defaultValue={defaultValue} onChange={onChange} className="hover-shadow" style={defaultSelectStyle}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}