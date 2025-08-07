import React from "react";
import { SiGmail } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const page = () => {
  return (
    <main className="min-h-dvh">
      <section className="rounded-lg shadow-lg max-w-[30rem] mx-auto my-20 p-3 flex items-center justify-center flex-col gap-10">
        <h1 className="font-bold text-gray-800 text-3xl text-center md:text-4xl">
          Login to your Account
        </h1>
        <div className="w-full space-y-5 max-md:px-2">
          <button className="border rounded-full flex items-center justify-center border-gray-400 w-full gap-5 py-4  text-xl md:text-2xl text-gray-700">
            Login with Google
            <FcGoogle />
          </button>
          <button className="border rounded-full flex items-center justify-center border-gray-400 w-full gap-5 py-4 text-xl md:text-2xl text-gray-700">
            Login in with Facebook
            <FaFacebook />
          </button>
        </div>
        <p className="text-sm text-gray-500 text-center">
          By Signing in, you agree to our <a href="#" className="hover:underline">Terms of Service</a> and{" "}
          <a href="#" className="hover:underline">Privacy Policy</a>
        </p>
            </section>
        </main>
    )
}





















export default page;