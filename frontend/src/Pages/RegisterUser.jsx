import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";
import { register } from "../apis/auth";
import Navbar from "../Components/Navbar/Navbar";
import { AuthContext } from "../Context/AuthContext";
const RegisterUser = () => {
  const { storeUserDetails } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    register({ name, username, email, password })
      .then((resp) => storeUserDetails(resp))
      .catch((err) => console.error(err));
    console.log("submitted");
  };
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
        <h2 className="m-2 text-center">Register </h2>
        <Form.Group className="m-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            style={{
              width: "500px",
              maxWidth: "40vw",
              height: "50px",
            }}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter username"
            value={name}
          />
        </Form.Group>
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
          <Form.Label>Email</Form.Label>
          <Form.Control
            style={{
              width: "500px",
              maxWidth: "40vw",
              height: "50px",
            }}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter username"
            value={email}
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
            Register
          </button>
        </div>
      </Form>
    </>
  );
};

export default RegisterUser;
