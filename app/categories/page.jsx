"use client";
import { db } from "@/lib/firebaseconfig";
import { collection, onSnapshot } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { MdOutlineKeyboardTab } from "react-icons/md";
// import { FiSearch } from "react-icons/fi";
import { Search, TrendingUp, Sparkles,ArrowRight } from "lucide-react";
import { FaLaptopCode, FaPaintBrush, FaNewspaper, FaStar, FaUserAlt, FaFire, FaFilm, faCoffee, FaPenNib, FaLandmark, FaDove, FaMoneyBill, FaChartBar, FaCoffee} from "react-icons/fa";

export default function Categories () {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  //fetch blogs from firebase
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

  const categories = [
    { name: "All", icon: <FaStar/> },
    { name: "Tech", icon: <FaLaptopCode/> },
    { name: "Creativity", icon: <FaPaintBrush/> },
    { name: "News", icon: <FaNewspaper/> },
    { name: "Lifestyle", icon: <FaUserAlt/> },
    { name: "Wellness", icon: <FaStar/> },
    { name: "Trending", icon: <FaFire/> },
    { name: "Entertainment", icon: <FaFilm/> },
    { name: "Celebrity Tea", icon: <FaCoffee/> },
    { name: "Writing", icon: <FaPenNib/>},
    { name: "Politics", icon: <FaLandmark/> },
    { name: "Religion", icon: <FaDove/> },
    { name: "Finance", icon: <FaMoneyBill/> },
    { name: "Business", icon: <FaChartBar/> },
  ];

// const categories = [
//   "All",
//   "Tech", 
//   "Creativity", 
//   "News", 
//   "Lifestyle",
//   "Wellness", 
//   "Trending",
//   "Entertainment",
//   "Celebrity Tea", 
//   "Writing", 
//   "Politics", 
//   "Religion",
//   "Finance", 
//   "Business", 
// ];
// fetch blogs from firestore
// useEffect(() => {
//   const unsubscribe = onSnapshot(collection(db, "blog"), (snapshot) => {
//     const blogList = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setBlogs(blogList);
//     setLoading(false);
//   });
//   return () => unsubscribe();
// }, []);
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
// const handleCategoryClick = (category) => {
//   setActiveCategory(category);
//   setSearch("");
// };
const getCategoryCount = (cat) => {
  if (cat === "All") return blogs.length;
  return blogs.filter(b => b.category?.toLowerCase() === cat.toLowerCase()).length;
};

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/30">
      {/* Sidebar */}
       {/* Hero Section - Matching Blogora brand gradient */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-12 px-6 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide uppercase opacity-90">Explore Categories</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Stories That Matter
          </h1>
          <p className="text-lg text-indigo-100 max-w-2xl">
            Browse through {blogs.length} carefully curated articles across multiple categories
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0">
            <div className="sticky top-24">
              {/* Search */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-blue-100/50">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
              </div>
              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100/50">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                  Categories
                </h2>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategory(cat.name)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                        activeCategory === cat.name
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md scale-105"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
                      <span className="flex items-center gap-3 font-medium">
                        <span className="text-lg text-blue-600">{cat.icon}</span>
                        {cat.name}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activeCategory === cat.name
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-700"
                      }`}>
                        {getCategoryCount(cat.name)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          {/* Main Content */}
          <main className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                {activeCategory === "Trending" && <TrendingUp className="w-6 h-6 text-blue-600" />}
                <h2 className="text-3xl font-bold text-gray-800">
                  {activeCategory === "All" ? "All Articles" : activeCategory}
                </h2>
              </div>
              <p className="text-gray-600">
                {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'} found
              </p>
            </div>
            {/* Blog Grid */}
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
              </div>
            ) : filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredBlogs.map((blog) => (
                  <article
                    key={blog.id}
                    className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
                  >
                    {/* Author Header */}
                    <div className="flex items-center gap-3 p-5 bg-gradient-to-r from-gray-50 to-blue-50/50 border-b border-gray-100">
                      <img
                        src={blog.img || "/arts.jpg"}
                        alt={blog.author}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 truncate">{blog.author}</h3>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mt-1">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed mb-4 line-clamp-4">
                        {blog.blog}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500">
                          {blog.timestamp?.toDate
                            ? blog.timestamp.toDate().toLocaleDateString()
                            : blog.timestamp}
                        </span>
                        <Link
                          href={`/blog/${blog.id}`}
                          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-purple-600 transition-colors group-hover:gap-3 duration-300"
                        >
                          Read More
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-4">
                  <Search className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or category filter</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </main>
  );
}

