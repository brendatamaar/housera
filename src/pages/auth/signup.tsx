import type { NextPage } from "next";
import Router from "next/router";

import { FormEventHandler, useState } from "react";

import { toast } from "react-toastify";

const Login: NextPage = () => {
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    comparePasswords: "",
  });

  const message = async () => {
    if (
      userInfo.first_name === null ||
      userInfo.first_name === undefined ||
      userInfo.first_name === ""
    ) {
      toast("First name is missing", {
        theme: "colored",
        type: "error",
        autoClose: 15000,
      });
      return;
    }

    if (
      userInfo.last_name === null ||
      userInfo.last_name === undefined ||
      userInfo.last_name === ""
    ) {
      toast("Last name is missing", {
        theme: "colored",
        type: "error",
        autoClose: 15000,
      });
      return;
    }

    if (
      userInfo.username === null ||
      userInfo.username === undefined ||
      userInfo.username === ""
    ) {
      toast("Username is missing", {
        theme: "colored",
        type: "error",
        autoClose: 15000,
      });
      return;
    }

    if (
      userInfo.email === null ||
      userInfo.email === undefined ||
      userInfo.email === ""
    ) {
      toast("Email is missing", {
        theme: "colored",
        type: "error",
        autoClose: 15000,
      });
      return;
    }

    if (
      userInfo.password === null ||
      userInfo.password === undefined ||
      userInfo.password === ""
    ) {
      toast("Password is missing", {
        theme: "colored",
        type: "error",
        autoClose: 15000,
      });
      return;
    }

    if (userInfo.password !== userInfo.comparePasswords) {
      toast("Passwords do not match!", {
        theme: "colored",
        type: "error",
        autoClose: 15000,
      });
      return;
    }

    toast("User registered successfully", {
      theme: "colored",
      type: "success",
      autoClose: 15000,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password,
        comparePasswords: userInfo.comparePasswords,
      }),
    });
    return await Router.push("/auth/signin");
  };

  return (
    <>
      <div className="flex h-screen justify-center">
        <div className=" flex flex-col justify-center  px-28 text-dark-text ">
          <h2 className="text-2xl font-bold">Hello!</h2>
          <p className="mt-2 mb-8">Welcome</p>

          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              placeholder="First Name"
              className="rounded-full border border-slate-100 py-3 px-6 pl-14 mb-4 w-80	relative ... outline-neutral-200"
              value={userInfo.first_name}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, first_name: target.value })
              }
            />
            <input
              type="text"
              placeholder="Last Name"
              className="rounded-full border border-slate-100 py-3 px-6 pl-14 mb-4 w-80	relative ... outline-neutral-200"
              value={userInfo.last_name}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, last_name: target.value })
              }
            />

            <input
              type="text"
              placeholder="Username"
              className="rounded-full border border-slate-100 py-3 px-6 pl-14 mb-4 w-80	relative ... outline-neutral-200"
              value={userInfo.username}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, username: target.value })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              className="rounded-full border border-slate-100 py-3 px-6 pl-14 mb-4 w-80	relative ... outline-neutral-200"
              value={userInfo.email}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, email: target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              className=" rounded-full border border-slate-100 py-3 px-6 pl-14 mb-4 w-80 outline-neutral-200"
              value={userInfo.password}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, password: target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              className=" rounded-full border border-slate-100 py-3 px-6 pl-14 mb-4 w-80 outline-neutral-200"
              value={userInfo.comparePasswords}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, comparePasswords: target.value })
              }
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-8 rounded-full mb-6 w-80"
              value="Register"
              onClick={message}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
