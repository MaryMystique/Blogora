import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[url(/bg8.jpg)] bg-no-repeat bg-center bg-cover bg-fixed">
      <section className="min-h-dvh bg-black/40">
        <div className="flex flex-col items-center justify-center text-white px-10 py-10 space-y-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">
            Welcome to <span className="text-red-500 italic">Blogora</span>
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-5xl">
            Explore Ideas. Share Stores. Spark Conversations.
          </h1>
          <div className=" flex flex-col space-y-5 text-xs md:text-xl">
            <ul>
              {" "}
              Blogora is a modern blogging platform that brings writers and
              readers together. From discovering fresh perspectives, deep
              insights, and everyday inspiration. Whether you're here to read,
              write, or connect, Blogora is where authentic voices spark
              conversations across topics like:
            </ul>
            <li className="font-semibold text-xs md:text-xl">
              Tech & Productivity
            </li>
            <li className="font-semibold text-xs md:text-xl">
              Culture & Society
            </li>
            <li className="font-semibold text-xs md:text-xl">
              Creativity & Personal Growth
            </li>
            <li className="font-semibold text-xs md:text-xl">
              {" "}
              Lifestyle & Wellness
            </li>
            <li className="font-semibold text-xs md:text-xl">
              {" "}
              Entertainment & News
            </li>

            <div className="text-xs md:text-base font-medium">
              Blogora gives you the space to express ideas, explore a new
              perspectives, and grow a community around the stories that
              matters. Dive into thoughtful articles, join discussions, or start
              writing your own. We believe{" "}
              <span className="font-bold text-xs md:text-xl text-gray-200">
                everyone has a story worth sharing
              </span>{" "}
              -what's yours?
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
