import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";
import { login } from "../apis/auth";
import Navbar from "../Components/Navbar/Navbar";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../apis/axiosInstance";
const AddItem = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState(null);
  const submitHandler = async () => {
    setLoading(true);
    const formData = new FormData();

    const payload = { name, category, newPrice, oldPrice, quantity };
    formData.append("imageFile", image);
    formData.append(
      "product",
      new Blob([JSON.stringify(payload)], {
        type: "application/json",
      })
    );

    try {
      await axiosInstance.post("product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
        <h2 className="m-2 text-center">Add Items </h2>
        <Form.Group id="name" className="m-2">
          <Form.Label>name</Form.Label>
          <Form.Control
            style={{
              width: "500px",
              maxWidth: "40vw",
              height: "50px",
            }}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            value={name}
          />
        </Form.Group>
        <Form.Group id="category" className="m-2">
          <Form.Label>Category</Form.Label>
          <Form.Select
            style={{
              width: "500px",
              maxWidth: "40vw",
              height: "50px",
            }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="ALL">ALL</option>
            <option value="MEN">MEN</option>
            <option value="WOMEN">WOMEN</option>
            <option value="KIDS">KIDS</option>
          </Form.Select>
        </Form.Group>
        <Form.Group id="new_price" className="m-2">
          <Form.Label>New Price</Form.Label>
          <Form.Control
            style={{
              width: "500px",
              maxWidth: "40vw",
              height: "50px",
            }}
            type="number"
            onChange={(e) => setNewPrice(e.target.value)}
            placeholder="Enter name"
            value={newPrice}
          />
        </Form.Group>
        <Form.Group id="old_price" className="m-2">
          <Form.Label>Old Price</Form.Label>
          <Form.Control
            style={{
              width: "500px",
              maxWidth: "40vw",
              height: "50px",
            }}
            type="number"
            onChange={(e) => setOldPrice(e.target.value)}
            placeholder="Enter Old Price"
            value={oldPrice}
          />
        </Form.Group>
        <Form.Group id="image" style={{ alignSelf: "start" }} className="m-2">
          <Form.Label>Upload file</Form.Label>
          <Form.Control
            // style={{
            //   width: "500px",
            //   maxWidth: "40vw",
            //   height: "50px",
            // }}
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Form.Group>
        <Form.Group id="quantity" className="m-2">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            style={{
              width: "500px",
              maxWidth: "40vw",
              height: "50px",
            }}
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter Quantity"
            value={quantity}
          />
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
            Add Item
          </button>
        </div>
      </Form>
    </>
  );
};

export default AddItem;
