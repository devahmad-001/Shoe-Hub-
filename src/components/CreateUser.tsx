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
  };
  return (
    <>
      <form onSubmit={handleSubmit(userData)}>
        <label>
          <span>Name</span>
        </label>
        <input placeholder="Enter name" {...register("name")} />

        <label>
          <span>Email</span>{" "}
        </label>
        <input placeholder="Enter mail" {...register("email")} />
        <button>Click Here </button>
      </form>
    </>
  );
}
