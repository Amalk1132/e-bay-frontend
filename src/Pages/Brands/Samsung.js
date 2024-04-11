import React from "react";
import "./Samsung.css";
import { useContext } from "react";
import { myContext } from "../../App";
import { Link } from "react-router-dom";
const Samsung = () => {
  const { data } = useContext(myContext);
  return (
    <div className="main-samsung">
      {data
        .filter((item) => item.Brand === "samsung")
        .map((item, index) => {
          return (
            <Link to={`/displayprod/${item._id}`}>
              {" "}
              <div key={index} className="samsung-block">
                <img src={item.Image} alt="electronics" />
                <h1>{item.Title}</h1>

                <h1>{item.Price}</h1>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Samsung;
