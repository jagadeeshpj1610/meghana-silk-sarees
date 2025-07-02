import { useEffect, useState } from "react";
import SareeDetails from "./SareeDetails";
import "../css/search.css"
import { useLocation } from "react-router-dom";

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [sarees, setSarees] = useState([]);
  const [toastMessage, setToastMessage] = useState([]);
  const location = useLocation();

  const { isAdmin, isLoggedIn } = location.state;

  useEffect(() => {
    fetchSearch("")
  }, [])

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

  useEffect(() => {
          if (toastMessage) {
              const timer = setTimeout(() => setToastMessage(""), 3000);
              return () => clearTimeout(timer);
          }
      }, [toastMessage]);

  return (
    <>
      {toastMessage && <div style={{ textAlign: 'center', color: 'green', paddingTop: '10px', fontSize: '1rem', margin: '2px' }} className="toast">{toastMessage}</div>}
      <div className="searchContainer">
        <div className="searchBox">
          <input placeholder="Search Here" type="text" className="searchInput" onKeyDown={handleOnEnter} onInput={(e) => setUserInput(e.target.value)} />
          <button onClick={handleOnClick} className="searchButton">Search</button>
        </div>
        <div className="searchResults">
          {
            Array.isArray(sarees) && sarees.length ?
              sarees.map((saree, index) => {
                return (
                  <div key={saree._id} className="sareeCard">
                    <img className="image" src={saree.sareePhoto.url} alt={`saree-${index + 1}`} />
                    <SareeDetails setToastMessage={setToastMessage} sareesInfo={saree} setSarees={setSarees} isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
                  </div>
                )
              }) :
              <h1>Sarees not found</h1>
          }
        </div>
      </div>
    </>
  )
}

export default Search