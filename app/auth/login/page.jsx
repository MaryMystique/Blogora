import React from "react";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/auth";
import { EmailLogin } from "@/components/EmailLogin";

const page = async () => {
  const session = await auth()

  if (session) {
    redirect("/post-blog");
  }
  console.log(session);

  return (
    <main className="min-h-dvh bg-stone-900">
      <section className="rounded-lg shadow-lg text-white max-w-[30rem] mx-auto p-3 flex items-center justify-center flex-col gap-10">
        <div className="mt-5 space-y-4">
          <h1 className="font-extrabold text-gray-100 text-2xl text-center mt-10 md:text-3xl">
            Welcome Back to <span className="text-indigo-600">Blogora</span>
          </h1>
          <p className="text-gray-100 mb-8 mt-5">Log in to continue sharing and discovering amazing stories</p>

          <div className="mb-5"><EmailLogin/></div>

          <form
            action={async () => {
              "use server"
              await signIn("google");
            }}
          >
            <button className="border flex items-center justify-center border-gray-300 w-full gap-3 py-3  text-xl md:text-2xl text-gray-100 hover:bg-indigo-600 transition">
              Continue with Google
              <FcGoogle  className="text-2xl"/>
            </button>
          </form>

          <form
            action={async () => {
              "use server"
              await signIn("github");
            }}
          >
            <button type="submit" className="border flex items-center justify-center border-gray-300 w-full gap-3 py-3 text-xl md:text-2xl text-gray-100 hover:bg-indigo-600 transition">
              Continue with Github
              <FaGithub className="text-2xl"/>
            </button>
          </form>
          <button className="border flex items-center justify-center border-gray-200 w-full gap-3 py-3 text-xl md:text-2xl text-gray-100 cursor-not allowed">
            Continue with Instagram (coming soon)
            <FaInstagram className="text-2xl text-pink-600" />
          </button>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            By Signing in, it indicate that you have read and agree to our{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default page;
