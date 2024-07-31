"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function LoginSigup() {
  let { register, handleSubmit } = useForm();
  useEffect(() => {
    const handleFocus = (input: any) => {
      const parentElement = input?.parentElement?.parentElement;
      parentElement?.classList.add("box-animation");
    };

    const handleBlur = (input: any) => {
      const parentElement = input.parentElement?.parentElement;
      parentElement?.classList.remove("box-animation");
    };

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.addEventListener("focus", () => handleFocus(input));
      input.addEventListener("blur", () => handleBlur(input));
    });

    const buttons = document.querySelectorAll("#multiple-btn button");
    const form_container = document.getElementById("form_section");
    const handleButtonClick = () => {
      form_container?.classList.toggle("left-right");
    };

    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });

    // Cleanup function
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", () => handleFocus(input));
        input.removeEventListener("blur", () => handleBlur(input));
      });
      buttons.forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
      });
    };
  }, []);

  //   on login save cookie
  const setCookie = (cName: string, cValue: any, exDays: any) => {
    const d = new Date();
    d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/order";
  };
  const loginUser = async (data: any) => {
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
      <div className="login-SignUp-page">
        <section>
          <div className="main-form-container">
            <div id="form_section" className="form-container">
              {/* Login form */}
              <div className="login-form form-wraper">
                <form onSubmit={handleSubmit(loginUser)}>
                  <div className="form-title">
                    <h2>Login</h2>
                  </div>
                  <div className="input-group">
                    <div className="box">
                      <span>
                        <input
                          {...register("email")}
                          placeholder="Email"
                          className="myInput"
                          type="text"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="box">
                      <span>
                        <input
                          {...register("password")}
                          placeholder="Password"
                          className="myInput"
                          type="password"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="forget-password">
                    <Link href={"/user/send-email"}>forgotPassword</Link>
                  </div>
                  <div className="action-button">
                    <button>Login</button>
                  </div>
                </form>
              </div>
              {/* SignUp form */}
              <div className="signUp-form form-wraper">
                <form>
                  <div className="form-title">
                    <h2>Sign Up</h2>
                  </div>
                  <div className="input-group">
                    <div className="box">
                      <span>
                        <input
                          {...register("name")}
                          placeholder="Full Name"
                          className="myInput"
                          type="text"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="box">
                      <span>
                        <input
                          {...register("email")}
                          placeholder="Email"
                          className="myInput"
                          type="text"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="box">
                      <span>
                        <input
                          {...register("ph#")}
                          placeholder="Mobile No."
                          className="myInput"
                          type="number"
                        />
                      </span>
                    </div>
                  </div>
                  <div style={{ marginBottom: 0 }} className="input-group">
                    <div className="box">
                      <span>
                        <input
                          {...register("password")}
                          placeholder="Password"
                          className="myInput"
                          type="password"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="action-button">
                    <button>Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
            <div id="multiple-btn" className="bg-btn-container">
              <div className="action-button">
                <button>Login</button>
              </div>
              {/* Display SignUp form */}
              <div className="action-button">
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
