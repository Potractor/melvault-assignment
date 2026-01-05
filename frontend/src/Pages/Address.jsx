import React, { useState, useEffect, useContext } from "react";
import "./CSS/Address.css";
import { Link } from "react-router-dom";
import Popup from "../Components/Popup/Popup";
import { ShopContext } from "../Context/ShopContext";
const Address = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { getDefault } = useContext(ShopContext);
  const [address, setAddress] = useState([]);
  const submitHandler = (shippingdetails) => {
    setAddress([...address, `address${address.length + 1}`]);
  };
  useEffect(() => {
    setAddress(["address1"]);
  }, []);
  const addresses = address.map((e, index) => {
    return (
      <div key={index} className="address-item">
        <input
          type="radio"
          id={`address${index + 1}`}
          name="address"
          value={e}
          checked={index === address.length - 1}
        />
        <label htmlFor={`address${index + 1}`}>{e}</label>
        <br />
      </div>
    );
  });

  return (
    <div className="shipping">
      <h2>Choose Shipping Address</h2>

      {addresses}
      <button className="button2" onClick={() => setButtonPopup(true)}>
        Add new address
      </button>
      <Popup
        trigger={buttonPopup}
        onSubmit={submitHandler}
        setTrigger={setButtonPopup}
      >
        <h3>My popup</h3>
      </Popup>
      <br></br>
      <br />
      <h2>Choose Payment Method</h2>

      <label className="label1">
        <input
          type="radio"
          checked={true}
          name="payment"
          value="Cash On Delivery"
        />
        Cash On Delivery
      </label>
      <div className="placeorder">
        <Link to="/">
          <button
            onClick={() => {
              alert("order placed sucessfully");
              getDefault();
            }}
            className="button3"
          >
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Address;
