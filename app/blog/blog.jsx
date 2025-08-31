"use client";
import { db } from "@/lib/firebaseconfig";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardTab } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const Blog= ({session}) => {

  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const blogArray = [];
    const querySnapShot = await getDocs(collection(db, "blog"));
    querySnapShot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, "=>", doc.data());
      const blogObject = {
        id: doc.id,
        ...doc.data(),
      };
      console.log(blogObject);
      blogArray.push(blogObject);
    });
    console.log(blogArray);
    setBlogs(blogArray);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
    const handleDelete = async (id) => {
        try {
          await deleteDoc(doc(db, "blog", id)),
          fetchBlogs();
        } catch (error) {
           console.error("An error while deleting your document", error);
           alert("Oops, an error occured. Please try again!");
        }
    }
  return (
    <main className="min-h-dvh">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
        {blogs.map((rev, i) => (
          <div key={i} className="space-y-2 shadow-md p-4 rounded-md bg-white">
            <div className="flex items-center gap-2">
              <img
                src={rev.img}
                alt="user"
                className="w-8 h-8 rounded-full object-cover"
              />
              <h3 className="font-medium text-gray-800">{rev.author}</h3>
            </div>
            {session.user.id == rev.userId ? (
                <button onClick={() => handleDelete(rev.id)} className="">
                    <RiDeleteBin6Line />
                </button>
             ): null}
            <p className="text-lg">{rev.category}</p>
            <p className="line-clamp-4 text-gray-700">{rev.blog}</p>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <p>
                {rev.timestamp?.toDate
                  ? rev.timestamp.toDate().toLocaleDateString()
                  : rev.timestamp}
              </p>
              <Link
                href={`/blog/${rev.id}`}
                className="flex items-center text-sm text-green-700 hover:underline"
              >
                Read More
                <MdOutlineKeyboardTab className="text-lg ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
export default Blog;