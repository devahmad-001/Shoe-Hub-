"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function Update({ params }: any) {
    console.log("params", params.id); // params is id of user which we are trying to reset password for
  let { register, handleSubmit } = useForm();
  const userData = async (data: any) => {
    console.log("data", data);
    const sendData = await fetch(`/api/user/reset-password/${params.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await sendData.json();
    console.log("res", res.status);
    // if(res.status=='ok'){
    //   window.location.href = "/admin-panel";
    // }
  };

  return (
    <>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit(userData)}>
        <label>
          <span>Enter New Password</span>{" "}
        </label>
        <input placeholder="password" {...register("password1")} />
        {/* <label>
          <span>Confirm password</span>{""}
        </label>
        <input placeholder="password" {...register("password1")} /> */}
        <button>Click Here </button>
      </form>
    </>
  );
}
