import type { NextPage } from "next";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

import { FormEventHandler, useState } from "react";

import { FcGoogle } from "react-icons/fc";

const Login: NextPage = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const router = useRouter();
  const { data: session } = useSession();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    console.log(res);
  };

  return session ? (
    <>
      <div className="flex flex-col">
        hello {session.user?.email}{" "}
        <button
          type="submit"
          className="bg-white hover:bg-gray-100 text-black py-2 px-8 rounded-full mb-6 w-80"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    </>
  ) : (
    <>
      <div className="flex h-screen justify-center">
        <div className=" flex flex-col justify-center  px-28 text-dark-text ">
          <div>
            <h2 className="text-2xl font-bold">Hello Again!</h2>
            <p className="mt-2 mb-8">Welcome Back</p>

            <form onSubmit={handleSubmit} className="flex flex-col">
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

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-8 rounded-full mb-6 w-80"
                value="Login"
              >
                Sign in
              </button>
              <button
                className="flex flex-row  justify-center items-center	  rounded-full border border-slate-100 py-3 mb-4 w-80 outline-neutral-200 hover:bg-gray-900"
                onClick={() => signIn("google")}
              >
                Sign in with Google
                <i className="text-2xl ml-2">
                  <FcGoogle />
                </i>
              </button>
            </form>
          </div>

          <div className="flex justify-around font-extralight text-xs	">
            <button>Forgot Password</button>
            <span>|</span>

            <button type="submit" onClick={() => router.push("/auth/signup")}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
