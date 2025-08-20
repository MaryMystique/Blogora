import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth()

  if (session) {
    redirect("/post-blog");
  }
  console.log(session);
  
  return (
    <main className="min-h-dvh bg-gray-200">
      <section className="rounded-lg shadow-lg text-white max-w-[30rem] mx-auto p-3 flex items-center justify-center flex-col gap-10">
        <div className="bg-stone-100 mt-15">
          <h1 className="font-bold text-gray-800 text-3xl text-center mt-20 md:text-4xl">
            Login to your Account
          </h1>
          <div className="w-full space-y-5 max-md:px-2">
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button className="border rounded-full flex items-center justify-center border-gray-400 w-full gap-5 py-4  text-xl md:text-2xl text-gray-700">
                Login with Google
                <FcGoogle />
              </button>
            </form>

            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
            <button type="submit" className="border rounded-full flex items-center justify-center border-gray-400 w-full gap-5 py-4 text-xl md:text-2xl text-gray-700">
              Login in with Github
              <FaGithub />
            </button>
            </form>
            <button className="border rounded-full flex items-center justify-center border-gray-400 w-full gap-5 py-4 text-xl md:text-2xl text-gray-700">
              Login in with Facebook
              <FaFacebook />
            </button>
            <button className="border rounded-full flex items-center justify-center border-gray-400 w-full gap-5 py-4 text-xl md:text-2xl text-gray-700">
              Login in with Instagram
              <FaInstagram />
            </button>
          </div>
          <p className="text-sm text-gray-500 text-center">
            By Signing in, you agree to our{" "}
            <a href="#" className="hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default page;
