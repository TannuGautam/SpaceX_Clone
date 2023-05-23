import React, { createContext, useState } from "react";
import Home from "./components/Home";
import "./components/styles.css";
const SearchContext = createContext();

const App = () => {
  const [sData, setSData] = useState([]);
  const [search, setSearch] = useState("");
  const [fData, setFdata] = useState([]);

  return (
    <SearchContext.Provider value={{ sData, setSData,search, setSearch,fData, setFdata }}>
      <Home />
    </SearchContext.Provider>
  );
};

export default App;
export {SearchContext}
