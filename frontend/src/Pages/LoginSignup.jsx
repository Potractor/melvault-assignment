import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";
import { login } from "../apis/auth";
import Navbar from "../Components/Navbar/Navbar";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
const LoginSignup = () => {
  const navigate = useNavigate();
  const { storeUserDetails, setAuthenticated } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuthenticated(true);
      navigate("/", { replace: true });
    }
  }, []);
  const submitHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    login({ usernameOrEmail: username, password })
      .then((resp) => {
        storeUserDetails(resp);
        navigate("/", { replace: true });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  };
  if (loading)
    return (
      <div className="overlay">
        <Loader />
      </div>
    );
  return (
    <>
      <Form
        style={{
          width: "600px",
          maxWidth: "50vw",
        }}
        className=" my-5 p-5 align-items-center  d-flex flex-column"
        onSubmit={submitHandler}
      >
        <h2 className="m-2 text-center">Login </h2>
        <Form.Group className="m-2">
          <Form.Label>Username</Form.Label>
          <Form.Control
            style={{
              width: "500px",
              maxWidth: "40vw",
              height: "50px",
            }}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            value={username}
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            style={{
              width: "500px",
              maxWidth: "40vw",
              height: "50px",
            }}
            type={viewPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            value={password}
          />
          <span>
            <Form.Check
              checked={viewPassword}
              onChange={(e) => setViewPassword(e.target.checked)}
              className="d-inline-block m-1 p-2"
            />
            show password
          </span>
        </Form.Group>
        <div className="text-center m-2 ">
          <button
            style={{
              width: "500px",
              maxWidth: "40vw",
              height: "50px",
            }}
            className=" mt-2 btn btn-primary"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="m-2">
          <p>
            Forgot Password?
            <NavLink to="/forgot-password">Forgot password</NavLink>
          </p>
        </div>
        <div>
          <p>
            New User? <NavLink to="/register">Register</NavLink>
          </p>
        </div>
      </Form>
    </>
  );
};

export default LoginSignup;
