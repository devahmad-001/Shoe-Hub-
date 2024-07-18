"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function Reset({ params }: any) {
  let { register, handleSubmit } = useForm();
  const userData = async (data: any) => {
    const resetPassword = await fetch("/api/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      // credentials: "include", // include cookies in the request
    });
    const res = await resetPassword.json();
    console.log(res);
  };

  return (
    <>
      <h1>Reset Password </h1>
      <form onSubmit={handleSubmit(userData)}>
        <label>
          <span>Enter email address</span>{" "}
        </label>
        <input placeholder="email" {...register("email")} />
        <button>Click Here </button>
      </form>
    </>
  );
}
