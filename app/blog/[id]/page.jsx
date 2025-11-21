"use client";
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { ArrowLeft, Eye, Heart, Trash2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { getDoc, doc, updateDoc, increment, deleteDoc, arrayRemove, arrayUnion } from "firebase/firestore";
import { db } from '@/lib/firebaseconfig';


export default function BlogDetails({ params }) {
  const id = params?.id;
  const { data: session } = useSession();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  
  // Fetch blog
  useEffect(() => {
    if (!id) return;

    let mounted = true;
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const ref = doc(db, "blog", id);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = { id: snap.id, ...snap.data() };
          if (mounted) setBlog(data);
        } else {
          if (mounted) setBlog(null);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
       if (mounted) setLoading(false);
      }
    };
    fetchBlog();
    return () => {
      mounted = false;
    };
  }, [id]);

  // Increment views once per browser session
  useEffect(() => {
    if (!blog || !id) return;

    const key = `blog_viewed_${id}`;
    if (localStorage.getItem(key)) return;

    localStorage.setItem(key, "1");

    const incViews = async () => {
      try {
        const ref = doc(db, "blog", id);
        await updateDoc(ref, { views: increment(1) });
        // optimistically update UI
        setBlog((b) => ({ ...b, views: (b?.views || 0) + 1 }));
      } catch (error) {
        console.error("Error updating views:", error);
      }
    };
    incViews();
  }, [blog, id]);

  // Handle Like / Unlike
  const handleLike = async () => {
    if (!session?.user?.id) { 
       alert("Please login to like posts.");
       return;
    }
    if (!id || !blog) return;

    setActionLoading(true);
    try {
      const ref = doc(db, "blog", id);
      const userId = session.user.id;
      const hasLiked = blog.likedBy?.includes(userId);

      if (hasLiked) {
        // Unlike
        await updateDoc(ref, {
          likes: increment(-1),
          likedBy: arrayRemove(userId),
        });
        setBlog((b) => ({
          ...b,
          likes: (b.likes || 1) - 1,
          likedBy: (b.likedBy || []).filter((u) => u !== userId),
        }));
      } else {
        // Like
        await updateDoc(ref, {
          likes: increment(1),
          likedBy: arrayUnion(userId),
        });
        setBlog((b) => ({
          ...b,
          likes: (b.likes || 0) + 1,
          likedBy: [...(b.likedBy || []), userId],
        }));
      }
    } catch (err) {
      console.error("Error liking post:", err);
      alert("Could not update like. Try again.");
    } finally {
      setActionLoading(false);
    }
  };
   
  // Handle Delete
const handleDelete = async () => {
  if (!session?.user?.id || !blog) {
    alert("You are not allowed to delete this post.");
    return;
  }
  if (session.user.id !== blog.userId) {
    alert("You are not allowed to delete this post.");
     return;
  }

  if (!confirm("Are you sure you want to delete to delete this post?")) return;

  try {
    await deleteDoc(doc(db, "blog", id));
    // redirect to blogList
    window.location.href = "/blog";
  } catch (err) {
    console.error("Error deleting post:", err);
    alert("Could not delete post. Try again.");
   } 
  };
  // Loading Spinner
  if (loading) {
    return (
      <div className='h-[80vh] flex items-center justify-center'>
        <div className='animate-spin w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full'></div>
      </div>
    );
}
 if (!blog) {
  return (
    <div className='min-h-dvh flex items-center justify-center'>
      <div className='text-center'>
    <p className='text-lg font-semibold text-gray-700'>Blog not found.</p>
    <Link href="/blog" className='text-indigo-600 mt-3 inline-block'>
    Back to Blogs 
    </Link>
    </div>
    </div>
  );
}
    // Formatted timestamp (handles string or Firebase Timestamp)
    const formatTimestamp = (ts) => {
      if (!ts) return "";
      try {
        if (typeof ts === "string") return ts;
        if (ts.toDate) return ts.toDate().toLocalString();
        return new Date(ts).toDateString();
      } catch (error) {
        return String(ts);
      }
    };

    const userHasLiked = !!(session?.user?.id && blog.likedBy?.includes(session.user.id));
    const isOwner = session?.user?.id === blog.userId;

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
          <div className="flex items-center gap-4 mb-6">
            <img 
            src={blog.img || "/df.png"} 
            alt={blog.author}
            className='w-14 h-14 rounded-full object-cover shadow' />
          <div>
          <p className="font-semibold text-gray-800">{blog.author}</p>
          <p className="text-sm text-gray-500">{formatTimestamp(blog.timestamp)}</p>
          </div>
          </div>
          {/* Cover Image */}
          {blog.coverImage && (
            <img src={blog.coverImage}
            alt='Cover Image'
            className='w-full rounded-xl mb-6 shadow' />
          )}
          {/* Stats Row */}
          <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center gap-6 text-gray-700'>
              
              {/* Likes */}
              <button onClick={handleLike}
              disabled={actionLoading}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-md transition ${
                userHasLiked ? "text-red-600 bg-red-50" : "text-gray-700 bg-gray-100"
              }`} >
                <span className='text-lg'>
                <Heart size={22} />
                </span>
                <span className='font-medium'>
                {blog.likes || 0}
                </span>
              </button>
              
              {/* Views */}
              <div className='inline-flex items-center gap-2 text-gray-600 px-2 py-1 rounded-md bg-gray-100'>
                <span className='text-lg'>
                <Eye size={22} />
                </span>
                <span>{blog.views || 0}</span>
              </div>
            </div>

            {/* Delete button (only owner) */}
            {isOwner && (
              <button onClick={handleDelete}
              className='text-sm text-red-600 hover:text-red-800 py-2 px-3 rounded-md border border-red-100'>
                <Trash2 size={22} /> Delete
              </button>
            )}
          </div>

          {/* Divider */}
          <div className='h-px w-full bg-gray-200 mb-6'></div>

          {/* Body */}
          <article className='prose prose-lg max-w-none text-gray-800 leading-relaxed whitespace-pre-line'>
            {blog.blog}
          </article>
          </div>
          </div>
    </main>
  );
}

