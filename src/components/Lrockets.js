import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SearchContext } from ".././App.js";

const Lrockets = () => {
  const { sData, setSData, search, fData } =
    useContext(SearchContext);

  let url = `https://api.spacexdata.com/v3/rockets`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setSData(res.data);
    });
  }, [search]);


 
  return (
    <>
      <ul className="cards">
        {search
          ? fData && fData.map((item,ids) => (
            <li className="card" key={ids}>
                <div className="container">
                  <img src={item.flickr_images[0]} alt="las vegas" />
                </div>
                <div className="details">
                  <h3>{item.rocket_name}</h3>
                  <h3>{item.country}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
          ))
          : sData &&
            sData.map((i, id) => (
              <li className="card" key={id}>
                <div className="container">
                  <img src={i.flickr_images[0]} alt="las vegas" />
                </div>
                <div className="details">
                  <h3>{i.rocket_name}</h3>
                  <h3>{i.country}</h3>
                  <p>{i.description}</p>
                </div>
              </li>
            ))}
      </ul>
    </>
  );
};

export default Lrockets;
