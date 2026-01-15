import React, { useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Navbar.css";
import cartImage from "../Assets/cartImage.png";
import logo from "../Assets/logo.png";
import { ShopContext } from "../../Context/ShopContext";
import Footer from "../Footer/Footer";
import Settings from "../Settings/Settings";
import Favourites from "../Assets/Favourites";
const Navbar = ({ authenticated }) => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems, cart } = useContext(ShopContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
          className="nav-logo"
        >
          <img src={logo} width="40px" alt="" />
          <p>MELVAULT</p>
        </div>
        {authenticated && (
          <>
            <ul className="nav-menu">
              <li
                onClick={() => {
                  setMenu("shop");
                }}
              >
                <Link style={{ textDecoration: "none" }} to="/">
                  Shop
                </Link>{" "}
                {menu === "shop" ? <hr /> : <></>}
              </li>
              <li
                onClick={() => {
                  setMenu("men");
                }}
              >
                <Link style={{ textDecoration: "none" }} to="/mens">
                  Men
                </Link>{" "}
                {menu === "men" ? <hr /> : <></>}
              </li>
              <li
                onClick={() => {
                  setMenu("women");
                }}
              >
                <Link style={{ textDecoration: "none" }} to="/women">
                  Women
                </Link>
                {menu === "women" ? <hr /> : <></>}
              </li>
              <li
                onClick={() => {
                  setMenu("kids");
                }}
              >
                <Link style={{ textDecoration: "none" }} to="/kids">
                  Kids
                </Link>
                {menu === "kids" ? <hr /> : <></>}
              </li>
            </ul>
            <div className="d-flex align-items-center gap-2">
              <Link to="/favourites">
                <Favourites added={true} size="48" />
              </Link>

              <div className="nav-login-cart">
                <Link to="/cart">
                  <img src={cartImage} width="40px" alt="" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
              </div>
              <Settings />
            </div>
          </>
        )}
      </div>

      <Outlet />
      {authenticated && <Footer />}
    </>
  );
};

export default Navbar;
