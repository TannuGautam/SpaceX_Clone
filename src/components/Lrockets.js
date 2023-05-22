import React, { useEffect, useState } from "react";
import axios from "axios";

const Lrockets = () => {
  const [data, setData] = useState([]);

  let url = `https://api.spacexdata.com/v3/rockets`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <ul className="cards">
        {data.map((i, id) => (
          <li className="card" key={id}>
            <div className="container">
              <img src={i.flickr_images[0]} alt="las vegas" />
            </div>
            <div className="details">
              <h3>{i.rocket_name}</h3>
              <h3>{i.country}</h3>
              <p>
                {i.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Lrockets;
