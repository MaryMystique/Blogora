import React from "react";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
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
    <main className="min-h-dvh bg-stone-900">
      <section className="rounded-lg shadow-lg text-white max-w-[30rem] mx-auto p-3 flex items-center justify-center flex-col gap-10">
        <div className="mt-5">
          <h1 className="font-extrabold text-white text-2xl text-center mt-10 md:text-3xl">
           Welcome! Log in to Blogora 
          </h1>
          <div className="w-full space-y-5 mt-17 max-md:px-2">
            <button className="border flex items-center justify-center border-gray-200 w-full gap-5 py-4 text-xl md:text-2xl text-white hover:bg-stone-700">
              Continue with Email
              <MdEmail />
              </button>
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button className="border flex items-center justify-center border-gray-200 w-full gap-5 py-4  text-xl md:text-2xl text-white hover:bg-stone-700">
                Continue with Google
                <FcGoogle />
              </button>
            </form>

            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
            <button type="submit" className="border flex items-center justify-center border-gray-200 w-full gap-5 py-4 text-xl md:text-2xl text-white hover:bg-stone-700">
              Continue with Github
              <FaGithub />
            </button>
            </form>
            <button className="border flex items-center justify-center border-gray-200 w-full gap-5 py-4 text-xl md:text-2xl text-white hover:bg-stone-700">
              Continue with Instagram
              <FaInstagram />
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-5 text-center">
            By Signing in, it indicate that you have read and agree to our{" "}
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
