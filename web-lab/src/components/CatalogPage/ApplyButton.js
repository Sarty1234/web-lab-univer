


export default function ApplyButton({ text = "Apply", onClick, style, className = "" }) {

  let mixedOnClick = () => {
    console.log("Filtering elements...");
    onClick();
  }

  return (
    <button
      className={`btn btn-primary hover-shadow ${className}`}
      type="button"
      onClick={mixedOnClick}
      style={{
        borderRadius: "10px",
        background: "rgb(255, 255, 255)",
        color: "var(--bs-black)",
        width: "130px",
        borderWidth: "4px",
        borderColor: "rgb(199, 199, 199)",
        marginRight: "10px",
        fontWeight: "bold",
        ...style,
      }}
    >
      {text}
    </button>
  );
}