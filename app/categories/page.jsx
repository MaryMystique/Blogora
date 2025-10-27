"use client";
import { db } from "@/lib/firebaseconfig";
import { collection, onSnapshot } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardTab } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

export default function Categories () {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

const categories = [
  "All",
  "Tech", 
  "Creativity", 
  "News", 
  "Lifestyle",
  "Wellness", 
  "Trending",
  "Entertainment",
  "Celebrity Tea", 
  "Writing", 
  "Politics", 
  "Religion",
  "Finance", 
  "Business", 
];
// fetch blogs from firestore
useEffect(() => {
  const unsubscribe = onSnapshot(collection(db, "blog"), (snapshot) => {
    const blogList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setBlogs(blogList);
    setLoading(false);
  });
  return () => unsubscribe();
}, []);
//   const fetchBlogs = async () => {
//     try {
//       const querySnapShot = await getDocs(collection(db, "blogs"));
//       const blogList = querySnapShot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setBlogs(blogList);
//     } catch (error) {
//       console.error("Error fetching blog:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   fetchBlogs();
// }, []);

const filteredBlogs = blogs.filter((blog) => {
  const matchesCategory = activeCategory === "All" || blog.category?.toLowerCase() === activeCategory.toLowerCase();
  const searchTerm = search.toLowerCase();
  const matchesSearch =
   blog.blog?.toLowerCase().includes(searchTerm) ||
   blog.author?.toLowerCase().includes(searchTerm) ||
   blog.category?.toLowerCase().includes(searchTerm);

  return matchesCategory && matchesSearch;
});
const handleCategoryClick = (category) => {
  setActiveCategory(category);
  setSearch("");
};

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-100 p-4 overflow-y-auto max-h-[calc(100vh-100px)] sticky top-[80px] custom-scrollbar">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button onClick={() => setActiveCategory(cat)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${activeCategory === cat
                ? "bg-indigo-100 text-indigo-700 font-medium"
                : "text-gray-700 hover:bg-gray-100"
              }`} >
              {cat}
              </button>
              </li>
               ))}
               </ul>
           </aside>
      {/* main content */}
      <section className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* header + search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {activeCategory === "All"
          ? "All Blog Posts"
        : `${activeCategory} Articles`}
        </h1>
        {/* search box */}
        <div className="relative w-full md:w-64">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input 
        type="text" placeholder="search posts..." value={search} onChange={(e) => setSearch(e.target.value)}
        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
        </div>
        </div>
        {/* blog grid or message */}
    {loading ? (
  <p className="text-center text-gray-500 mt-10">Loading posts...</p>
   ) : filteredBlogs.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredBlogs.map((rev) => (
      <div
        key={rev.id}
        className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
      >
        <div className="flex items-center gap-3 p-4 border-b border-gray-100">
          <img
            src={rev.img || "/arts.jpg"}
            alt={rev.author}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{rev.author}</h3>
            <p className="text-sm text-gray-500">{rev.category}</p>
          </div>
        </div>
        <div className="p-5">
          <p className="line-clamp-4 leading-relaxed mb-4 text-gray-700">
            {rev.blog}
          </p>
          <p className="text-gray-400 mb-3 text-sm">
            {rev.timestamp?.toDate
              ? rev.timestamp.toDate().toLocaleDateString()
              : rev.timestamp}
          </p>
          <Link
            href={`/blog/${rev.id}`}
            className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition group"
          >
            Read More
            <span className="ml-1 text-lg group-hover:translate-x-1 transition-transform">
              <MdOutlineKeyboardTab />
            </span>
          </Link>
        </div>
      </div>
    ))}
  </div>
) : (
  <p className="text-gray-500 text-center mt-20">
    No blog post found for this category.
  </p>
)}
      </section>
    </main>
  );
}

