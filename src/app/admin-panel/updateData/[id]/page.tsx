"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function Update({ params }: any) {
  let { register, handleSubmit } = useForm();
  const userData = async (data: any) => {
    console.log("data", data);
    const sendData = await fetch(`/api/admin/update/${params.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await sendData.json();
    console.log("res", res.status);
    if(res.status=='ok'){
      window.location.href = "/admin-panel";
    }
  };

  return (
    <>
    <h1>Enter new password </h1>
       <form onSubmit={handleSubmit(userData)}>
        <label>
          <span>password</span>{" "}
        </label>
        <input placeholder="password" {...register("password")} />
        <label>
          <span>password</span>{" "}
        </label>
        <input placeholder="email" {...register("email")} />

        <button>Click Here </button>
      </form> 
    </>
  );
}
