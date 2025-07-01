import { useEffect, useState } from "react";
import SareeDetails from "./SareeDetails";
import "../css/search.css"

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [sarees, setSarees] = useState([]);

  const fetchSearch = async (searchText) => {
    const response = await fetch(`https://meghana-silk-sarees-3ufw.onrender.com/query/search/${searchText}`, {
      credentials: "include",
    });
    const result = await response.json();
    setSarees(result)
  };
  console.log(sarees)
  const handleOnEnter = async (e) => {
    if (e.key === "Enter") {
      await fetchSearch(userInput);
    }
  }
  const handleOnClick = async () => {
    await fetchSearch(userInput)
  }
  console.log(sarees.length, userInput)


  return (
    <div className="searchContainer">
      <div className="searchBox">
        <input placeholder="Search Here" type="text" className="searchInput" onKeyDown={handleOnEnter} onInput={(e) => setUserInput(e.target.value)} />
        <button onClick={handleOnClick} className="searchButton">Search</button>
      </div>
      <div className="searchResults">
        {
          sarees.length === 0 ? <h1>Loading....</h1>
            :
            sarees.map((saree, index) => {
              return (
                <div key={saree._id} className="sareeCard">
                  <img className="image" src={saree.sareePhoto.url} alt={`saree-${index + 1}`} />
                  <SareeDetails sareesInfo={saree} />
                </div>
              )
            })
        }
      </div>
    </div>
  )
}

export default Search