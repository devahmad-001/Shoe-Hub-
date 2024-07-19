"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  let { register, handleSubmit } = useForm();

  const userData = async (data: any) => {
    const sendData = await fetch("/api/user/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await sendData.json();
    console.log("res", res);
    if (res.status === 201) {
      alert("User Created Successfully");
      window.location.href = "/admin-panel";
    } else if (res.status === 400){
      alert(`${res.message}`);
    }
  };
  return (
    <>
    <h1>SigUp in our account </h1>

      <form onSubmit={handleSubmit(userData)}>
        <label>
          <span>Name</span>
          <input placeholder="Enter name" {...register("name")} />
        </label>

        <label>
          <span>Email</span>{" "}
          <input placeholder="Enter mail" {...register("email")} />
        </label>
        <label>
          <span>Password</span>
          <input placeholder="Enter password" {...register("password")} />
        </label>

        <button>Click Here </button>
      </form>
    </>
  );
}
