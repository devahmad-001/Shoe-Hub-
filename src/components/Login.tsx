"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
export default function Login() {
  // for carete cookie 
  const setCookie = (cName: string, cValue: any, exDays: any) => {
    const d = new Date();
    d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/order";
  };
  let { register, handleSubmit } = useForm();
  const userData = async (data: any) => {
    try {
      const findUser = await fetch("/api/user/findUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await findUser.json();
      console.log(res);
      if (res.status == "ok") {
        setCookie('shoehubUser',res.user._id,7);
        window.location.href = "/order";
      }
    } catch (error) {
      console.log("error Login user", error);
      alert("User not found");
    }
  };
  return (
    <>
      <h1>Login in our account </h1>
      <form onSubmit={handleSubmit(userData)}>
        <label>
          <span>Email</span>{" "}
          <input placeholder="Enter mail" {...register("email")} />
        </label>
        <label>
          <span>Password</span>
          <input placeholder="Enter password" {...register("password")} />
        </label>
        <button>Click Here </button>
      <Link href={'/user/resetpassword'}>forgotPassword</Link>
      </form>
    </>
  );
}
