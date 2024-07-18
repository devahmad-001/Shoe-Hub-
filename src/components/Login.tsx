"use client";
import { useForm } from "react-hook-form";
export default function Login() {
  const setCookie = (cName: string, cValue: any, exDays: any) => {
    const d = new Date();
    d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
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
        window.location.href = "/getData";
      }
    } catch (error) {
      console.log("error Login user", error);
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
      </form>
    </>
  );
}
