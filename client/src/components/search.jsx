import { useEffect, useState } from "react"


const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [sarees, setSarees] = useState([]);

  const fetchSearch = async (searchText) => {
    const response = await fetch(`https://meghana-silk-sarees-3ufw.onrender.com/query/search/${searchText}`, {
      credentials: "include",
    });
    const data = await response.json();
    setSarees(data)
  };
  console.log(sarees)
  const handleOnEnter = async (e) => {
    if (e.key === "Enter") {
      const result = await fetchSearch(userInput);

    }
  }
  const handleOnClick = () => {
    console.log(userInput)
  }

  return (
    <div className="searchContainer">
      <input type="text" className="searchInput" onKeyDown={handleOnEnter} onInput={(e) => setUserInput(e.target.value)} />
      <button onClick={handleOnClick}>Search</button>
    </div>
  )
}

export default Search