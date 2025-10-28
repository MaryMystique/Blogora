"use client";
import { db } from "@/lib/firebaseconfig";
import { CircularProgress } from "@mui/material";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardTab } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const Blog= ({session}) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
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
    } catch (error) {
      console.error("Error loading blogs:", error);
    } finally {
      setLoading(false);
    } 
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
    <main className="min-h-dvh bg-gray-50 py-8 px-4">
      {loading ? (
        <div className="flex items-center justify-center h[70vh]">
        <CircularProgress size={50} thickness={4} color="success" />
        </div>
      ) : (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {blogs.length > 0 ? (
         blogs.map((rev, i) => (
          <div key={i} className="space-y-2 shadow-md p-4 rounded-md bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300">
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
            <p className="text-lg font-semibold text-indigo-600">{rev.category}</p>
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
        ))
      ) : (
        <p className="text-gray-500 text-center mt-10 col-span-full">No blog post available.</p>
      )}
      </section>
      )}
    </main>
  );
};
export default Blog;