import React from "react";
import { useContext } from "react";
import { myContext } from "../../App";
import "./Lenovo.css";
import { Link } from "react-router-dom";

const Lenovo = () => {
  const { data } = useContext(myContext);
  return (
    <div className="main-lenovo">
      {data
        .filter((item) => item.Brand === "lenovo")
        .map((item, index) => {
          return (
            <Link to={`/displayprod/${item._id}`}><div key={index} className="lenovo-block">
              <img src={item.Image} alt="electronics" />
              <h1>{item.Title}</h1>

              <h1>{item.Price}</h1>
            </div></Link>
          );
        })}
    </div>
  );
};

export default Lenovo;
