"use client";
import DropIn from "braintree-web-drop-in-react";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Requests() {
  const [values, setValues] = useState({
    clientToken: null,
    instance: null,
  });
  const [parameters, setParameters] = useState({
    amount: "123",
    payment_method_nonce: null,
  });
  useEffect(() => {
    const getClientToken = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/generate/token",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            // body: JSON.stringify({ client_id: "your_client_id", client_secret: "your_client_secret" }),
          }
        );
        const token = await response.text();
        setValues({ clientToken: token }); // update state with fetched client token
      } catch (error) {
        console.log(error);
      }
    };
    getClientToken(); // fetch client token and print it in console log
  }, []);
  console.log(values);
  const makePaymentRequest = async (parameters) => {
    console.log(parameters);
    try {
      const response = await fetch(
        "http://localhost:8080/api/process/payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(parameters),
        }
      );
      const data = await response.json();
      console.log("Payment Response:", data);
    } catch (error) {
      console.error("Error in payment request:", error);
    }
  };

  const onPurchase = async () => {
    await values.instance.requestPaymentMethod().then((data) => {
      const nonce = data.nonce;
      setParameters({ ...parameters, payment_method_nonce: nonce });
    });
  };
  // when parameters have nonce make call for function
  useEffect(() => {
    makePaymentRequest(parameters);
  }, [parameters]);
  return (
    <div>
      <div className="payment">
        {values.clientToken && (
          <div>
            <DropIn
              options={{ authorization: values.clientToken }}
              onInstance={(instance) => {
                setValues({ ...values, instance: instance });
              }}
            />
            <button onClick={onPurchase}>Purchase</button>
          </div>
        )}
        {!values.clientToken && <div>Loading...</div>}
      </div>
    </div>
  );
}
