import { useState } from "react";
import up from "../assets/up.png";
import down from "../assets/down.png";
import "../css/sort.css";
import { useUser } from "./userContext";


const SortButton = () => {
  const [isAscending, setIsAscending] = useState(false);
  const { setSarees } = useUser();

  const handleOnClick = async () => {
    const response = await fetch(`https://meghana-silk-sarees-3ufw.onrender.com/query/sort?sortBy=sareeName&isAscending=${isAscending}`, {
      credentials: "include",
    });
    const data = await response.json();
    setSarees(data);
    setIsAscending(isAscending ? false : true);
  }

  return (
    <button onClick={handleOnClick} className="sortButton">Sort
      <img src={isAscending ? down : up} alt={isAscending ? "down" : "up"} className="sortStatusImage" />
    </button>
  )
}

export default SortButton;
