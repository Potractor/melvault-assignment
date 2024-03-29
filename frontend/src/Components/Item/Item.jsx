import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  console.log(props.id);
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          style={{ width: "250px", height: "400px" }}
          src={props.image}
          alt=""
        />
      </Link>

      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item_price-new">Rs.{props.new_price}/-</div>
        <div className="item_price-old">{props.old_price}</div>
        <div
          className="box"
          style={{
            backgroundColor: `${props.availability ? "lightgreen" : "red"}`,
          }}
        >
          {props.availability ? <p>available</p> : <p>not available</p>}
        </div>
      </div>
    </div>
  );
};

export default Item;
