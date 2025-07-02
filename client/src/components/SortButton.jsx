import { useState } from "react";
import up from "../assets/up.png";
import down from "../assets/down.png";
import "../css/sort.css"


const SortButton = () => {
  const [isAscending, setIsAscending] = useState(false);

  const handleOnClick = () => {
    setIsAscending(isAscending ? false : true);
  }

  return (
    <button onClick={handleOnClick} className="sortButton">Sort
      <img src={isAscending ? down : up} alt={isAscending ? "down" : "up"} className="sortStatusImage" />
    </button>
  )
}

export default SortButton;
