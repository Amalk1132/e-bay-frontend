import React from "react";
import "./Dell.css";
import { useContext } from "react";
import { myContext } from "../../App";
import { Link } from "react-router-dom";
const Dell = () => {
  const { data } = useContext(myContext);
  return (
    <div className="main-dell">
      {data
        .filter((item) => item.Brand === "dell")
        .map((item, index) => {
          return (
            <Link to={`/displayprod/${item._id}`}>
              <div key={index} className="dell-block">
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

export default Dell;
