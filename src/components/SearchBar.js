import React, { useContext } from "react";
import { ReactComponent as Searchicon } from "../assests/searchicon.svg";
import { SearchContext } from ".././App.js";

const SearchBar = () => {
  const { sData, setSData,search, setSearch, setFdata } = useContext(SearchContext);

  const handleChange = (e) => {
    const searchk = e.target.value;

    setSearch(searchk);
  };

  // search functionalities
  const filteredSearchShow = sData.filter((s) =>
    s.rocket_name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    if(search === 0)
    {
      return setSData(sData);
    }

  setFdata(filteredSearchShow);
  };

  return (
    <div className="s-container">
      <div className="searchbar">
        <Searchicon />
        <input
          type="text"
          placeholder="Search..."
          className="inputs"
          value={search}
          onChange={handleChange}
        ></input>
      </div>
      <button type="submit" className="searchbtn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
