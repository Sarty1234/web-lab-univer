
import { useCatalogDataContext } from "./CatalogDataContext";
import { Link } from "react-router-dom";


export default function CardButton({ text, onClick, style, className = "", cardID=0 }) {
  const { setDisplayElementID } = useCatalogDataContext();

  let mixedOnClick = () => {
    setDisplayElementID(cardID);
    console.log("Presses view card", cardID);
    if (onClick) {
      onClick();
    }
  }


  return (
    <Link to='/about-ship'>
      <button
        className={`btn btn-primary hover-shadow ${className}`}
        type="button"
        onClick={mixedOnClick}
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
    </Link>
  );
}