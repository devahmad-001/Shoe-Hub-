"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
export default function Login() {
  // for create cookie
  const setCookie = (cName: string, cValue: any, exDays: any) => {
    const d = new Date();
    d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/order";
  };
  let { register, handleSubmit } = useForm();
  const userData = async (data: any) => {
    try {
      const findUser = await fetch("/api/user/findUserLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await findUser.json();
      console.log(res);
      if (res.status === 200) {
        setCookie("shoehubUser", res.user._id, 7);
        alert("User found");
        window.location.href = "/order";
      } else if (res.status === 404) {
        alert("User not found");
      }
    } catch (error) {
      console.log("error findUserLogin:", error);
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
        <Link href={"/user/send-email"}>forgotPassword</Link>
      </form>
    </>
  );
}
