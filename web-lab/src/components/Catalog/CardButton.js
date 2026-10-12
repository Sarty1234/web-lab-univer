export default function CardButton({ text, onClick, style, className = "" }) {
  return (
    <button
      className={`btn btn-primary hover-shadow ${className}`}
      type="button"
      onClick={onClick}
      style={{
        background: "rgb(66, 66, 66)",
        width: "200px",
        height: "50px",
        fontSize: "18px",
        borderRadius: "16px",
        marginBottom: "24px",
        marginTop: "8px",
        border: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {text}
    </button>
  );
}