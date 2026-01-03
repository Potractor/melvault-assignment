import React, { useEffect, useState, useContext } from "react";
import Setting from "../Assets/Setting";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Settings.css";
import { useRef } from "react";
const Settings = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const settingRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (!settingRef.current.contains(e?.target)) setShowMenu(false);
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const logoutHandler = (e) => {
    logout();
    navigate("/");
  };

  return (
    <div ref={settingRef}>
      <div
        onClick={() => {
          setShowMenu((showMenu) => !showMenu);
        }}
        style={{ position: "relative" }}
      >
        <Setting />
      </div>
      {showMenu && (
        <div
          className="ok"
          style={{
            position: "absolute",
            zIndex: "10",
            right: "24px",
            cursor: "pointer",
          }}
        >
          <div onClick={logoutHandler}>Logout</div>
          <div onClick={() => navigate("/add-items")}>Add Items</div>
        </div>
      )}
    </div>
  );
};

export default Settings;
