"use client";
import React, { useEffect, useState } from 'react'
import { getDoc, doc, updateDoc, increment, deleteDoc } from "firebase/firestore";
import { db } from '@/lib/firebaseconfig';
import { getAuth } from "firebase/auth";
import { ArrowLeft, Eye, Heart, Trash2 } from 'lucide-react';
import { onAuthStateChanged} from "firebase/auth";
import Link from "next/link";

export default function BlogDetails({ params }) {
  const { id } = React.use(params);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  
  // Track current user
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // Fetch blog
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, "blog", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = { id: docSnap.id, ...docSnap.data() };
          setBlog(data);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  // Increment views if first visit
  useEffect(() => {
    if (!blog) return;

    const key = `viewed_${id}`;
    if (localStorage.getItem(key)) return;

    localStorage.setItem(key, "true");

    updateDoc(doc(db, "blog", id), {
      views: increment(1),
    }).catch((err) => console.error("Error updating views:", err));
  }, [blog, id]);

  // Handle Like
  const handleLike = async () => {
    if (!user) return alert("Login to like posts");

    const blogRef = doc(db, "blog", id);
    const likedBy = blog.likedBy || [];
    const hasLiked = likedBy.includes(user.uid);
    
    try {
     await updateDoc(blogRef, {
      likes: hasLiked ? increment(-1) : increment(1),
      likedBy: hasLiked
      ? likedBy.filter((uid) => uid !== user.uid)
      : [...likedBy, user.uid],
     });
     setBlog((prev) => ({
      ...prev,
      likes: hasLiked ? prev.likes -1 : prev.likes + 1,
      likedBy: hasLiked
      ? prev.likedBy.filter((uid) => uid !== user.uid)
      : [...likedBy, user.uid],
     })); 
    } catch (err) {
     console.error("Error liking post:", err); 
    }
  };
  // Handle Delete
const handleDelete = async () => {
  if (!user || user.uid !== blog.userId)
    return alert("You are not allowed to delete this post.");

  if (!confirm("Are you sure you want to delete to delete this post?")) return;
   try {
    await deleteDoc(doc(db, "blog", id));
    window.location.href = "/blog";
   } catch (err) {
    console.error("Error deleting blog:", err);
   } 
  };
  // Loading Spinner
  if (loading) {
    return (
      <div className='h-[80vh] flex items-center justify-center'>
        <div className='animate-spin w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full'></div>
      </div>
    );
}
 if (!blog)
  return (
    <div className='text-center text-gray-600 mt-20'>Blog not found.</div>
  );

  return (
    <main className='min-h-dvh bg-gray-50 py-10 px-4'>
      <div className='max-w-4xl mx-auto'>
        {/* Back button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 transition mb-6">
          <ArrowLeft className='w-5 h-5' /> Back to Blogs
        </Link>
        {/* Main Card */}
        <div className='bg-white shadow-xl rounded-2xl p-8 border border-gray-100'>
          {/* Category */}
        <div className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-700 mb-4">
          {blog.category}
          </div>
         {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            {blog.title || 'Untitled Blog Post'}
          </h1>
            {/* Author Row */}
          <div className="flex items-center gap-4 mb-8">
            <img src={blog.img || "/df.png"} alt={blog.author}
            className='w-14 h-14 rounded-full object-cover shadow' />
          <div>
          <p className="font-semibold text-gray-800">{blog.author}</p>
          <p className="text-sm text-gray-500">{blog.timestamp}</p>
          </div>
          </div>
          {/* Cover Image */}
          {blog.coverImage && (
            <img src={blog.coverImage}
            alt='Cover Image'
            className='w-full rounded-xl mb-8 shadow' />
          )}
          {/* Stats Row */}
          <div className='flex items-center justify-between mb-8'>
            <div className='flex items-center gap-6 text-gray-700'>
              
              {/* Likes */}
              <button onClick={handleLike}
              className={`flex items-center gap-1 ${
                blog.likedBy?.includes(user?.uid)
                ? "text-red-600"
                : "text-gray-700"
              }`} >
                <Heart size={22} />
                {blog.likes || 0}
              </button>
              
              {/* Views */}
              <div className='flex items-center gap-1'>
                <Eye size={22} />
                {blog.views || 0}
              </div>
            </div>

            {/* Delete button (only owner) */}
            {user?.uid === blog.userId && (
              <button onClick={handleDelete}
              className='text-red-600 hover:text-red-800 flex items-center gap-1'>
                <Trash2 size={22} /> Delete
              </button>
            )}
          </div>

          {/* Divider */}
          <div className='h-px w-full bg-gray-200 mb-8'></div>

          {/* Body */}
          <article className='prose prose-lg max-w-none text-gray-800 leading-relaxed whitespace-pre-line'>
            {blog.blog}
          </article>
          </div>
          </div>
    </main>
  );
}

