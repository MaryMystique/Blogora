"use client"
import Image from "next/image";
import { db } from "@/lib/firebaseconfig";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardTab } from "react-icons/md";
import { Skeleton } from "@mui/material";


export default function Home() {
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
          ...doc.data() };
        console.log(blogObject);
        blogArray.push(blogObject);
      });
      setBlogs(blogArray);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
     };
    useEffect(() => {
      fetchBlogs();
    }, []);
  return (
     <main className="min-h-dvh bg-gray-50">
      {/* hero section */}
      <section className="py-15 px-5 text-center relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
         <h1 className="mb-4 tracking-tight md:text-4xl text-3xl lg:text-6xl font-extrabold">
            Welcome to <span className="italic text-red-300">Blogora</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-100">A space where ideas, opinions, and stories come alive. Read, Share, and get inspired.</p>
          </section>

            {/* blog grid section */}
            
            <section className="mt-15 px-5 md:px-10 py-10 ">
              { loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  {/* Author info */}
                  <div className="flex items-center gap-3 mb-4">
                    <Skeleton variant="circular" width={40} height={40} animation="wave"/>
                    <div className="flex-1">
                      <Skeleton variant="text" width="60%" height={16} />
                      <Skeleton variant="text" width="40%" height={14} />
                    </div>
                    </div>
                    <Skeleton variant="rectangular" height={130} animation="wave" className="rounded-md mb-4"/>
                    <Skeleton variant="text" width="90%" height={18} />
                    <Skeleton variant="text" width="70%" height={18} />
                    <Skeleton variant="text" width="50%" height={18} />
                    </div>
              ))}
              </div>
              ) : blogs.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogs.map((rev, i) => (
                    <div key={i} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
                      <div className="flex items-center gap-3 p-4 border-b border-gray-100">
                    <img
                      src={rev.img}
                      alt="user"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                    <h3 className="font-semibold text-gray-800">{rev.author}</h3>
                  <p className="text-xm text-gray-500">{rev.category}</p>
                  </div>
                  </div>
                  <div className="p-5">
                  <p className="line-clamp-4 leading-relaxed mb-4 text-gray-700 ">{rev.blog}</p>
                  
                  {/* time stamp */}
                    <p className="text-gray-400 mb-3">
                      {rev.timestamp?.toDate
                        ? rev.timestamp.toDate().toLocaleDateString()
                        : rev.timestamp}
                    </p>
                    {/* read more */}
                    <Link
                      href={`/blog/${rev.id}`}
                      className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition">
                      Read More
                      <span className="ml-1 text-lg group-hover:translate-x-1 transition-transform">
                      <MdOutlineKeyboardTab/>
                      </span>
                    </Link>
                    </div>
                </div>
              ))} 
              </div>
            ) : (
              <p className="text-gray-500 text-center mt-20"> No blog post available.</p>
              )}
              </section>
          </main>
       
  );
}
