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
  const [confirmDelete, setConfirmDelete] = useState(null); // holds blog to confirm delete

  const fetchBlogs = async () => {
    try {
      const blogArray = [];
    const querySnapShot = await getDocs(collection(db, "blog"));
    querySnapShot.forEach((doc) => {
      const blogObject = {
         id: doc.id, 
         ...doc.data(), };
      // doc.data() is never undefined for query doc snapshots
      blogArray.push(blogObject);
      console.log(doc.id, "=>", doc.data());
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
          await deleteDoc(doc(db, "blog", id));
          setConfirmDelete(null);
          fetchBlogs();
        } catch (error) {
           console.error("An error while deleting your document", error);
           alert("Oops, an error occured. Please try again!");
        }
    };
  return (
    <main className="min-h-dvh bg-gray-50 py-8 px-4">
      {loading ? (
        <div className="flex items-center justify-center h-[70vh]">
          <CircularProgress size={50} thickness={4} color="success" />
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogs.length > 0 ? (
            blogs.map((rev, i) => (
              <div
                key={i}
                className="space-y-2 shadow-md p-4 rounded-md bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={rev.img}
                    alt="user"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <h3 className="font-medium text-gray-800">{rev.author}</h3>
                </div>
                {/* :white_check_mark: Show delete icon for logged-in users */}
                {session && (
                  <button
                    onClick={() => setConfirmDelete(rev.id)}
                    className="absolute top-3 right-3 text-red-600 hover:text-red-800"
                    title="Delete this post"
                  >
                    <RiDeleteBin6Line size={22} />
                  </button>
                )}
                <p className="text-lg font-semibold text-indigo-600">
                  {rev.category}
                </p>
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
                {/* Confirmation modal */}
                {confirmDelete === rev.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-md">
                    <div className="bg-white p-5 rounded shadow-md text-center">
                      <p className="text-gray-700 font-medium mb-4">
                        Are you sure you want to delete this post?
                      </p>
                      <div className="flex justify-center gap-4">
                        <button
                          onClick={() => handleDelete(rev.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => setConfirmDelete(null)}
                          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center mt-10 col-span-full">
              No blog post available.
            </p>
          )}
        </section>
      )}
    </main>
  );
};
export default Blog;