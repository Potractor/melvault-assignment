import React, { useState } from "react";
import axiosInstance from "../../apis/axiosInstance";

const Razorpay = () => {
  const [paymentId, setPaymentId] = useState("");

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await axiosInstance.post("/payments/create-order");

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;
    console.log(amount);
    const options = {
      key: "rzp_test_S0UcC6HvFIfoEI", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Paramesh Corp.",
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
        alert("successfull");
        // const data = {
        //   orderCreationId: order_id,
        //   razorpayPaymentId: response.razorpay_payment_id,
        //   razorpayOrderId: response.razorpay_order_id,
        //   razorpaySignature: response.razorpay_signature,
        // };

        // const result = await axiosInstance.post("/payments/success", data);

        // alert(result.data.msg);
      },
      prefill: {
        name: "Paramesh kumar",
        email: "parameshkumar22@gmail.com",
        contact: "7780123974",
      },
      notes: {
        address: "Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return <button onClick={displayRazorpay}>pay now</button>;
};

export default Razorpay;
