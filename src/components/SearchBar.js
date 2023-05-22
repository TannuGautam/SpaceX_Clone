import React from "react";
import { ReactComponent as Searchicon } from "../assests/searchicon.svg";


const SearchBar = () => {

  return (
      <div className="s-container">
        <div className="searchbar">
          <Searchicon />
          <input
            type="text"
            placeholder="Search..."
            className="inputs"
            
          ></input>
        </div>
        <button
          type="submit"
          className="searchbtn"
        >
          Search
        </button>
      </div>
  );
};

export default SearchBar;
