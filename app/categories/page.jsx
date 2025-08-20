"use client";
import Link from "next/link";

const categories = [
  { name: "Writing", slug: "writing" },
  { name: "Tech", slug: "tech" },
  { name: "Creativity", slug: "creativity" },
  { name: "News", slug: "news" },
  { name: "Lifestyle", slug: "lifestyle" },
  { name: "Wellness", slug: "wellness" },
  { name: "Culture", slug: "culture" },
  { name: "Trending", slug: "trending" },
  { name: "Entertainment", slug: "entertainment" },
  { name: "Celebrity Tea", slug: "celebrity-tea" },
  { name: "Travel", slug: "travel" },
  { name: "Food Blog", slug: "food-blog" },
  { name: "Sports", slug: "sports" },
  { name: "Politics", slug: "politics" },
  { name: "Religion", slug: "religion" },
  { name: "Finance", slug: "finance" },
  { name: "Music", slug: "music" },
  { name: "DIY", slug: "diy" },
  { name: "Movies", slug: "movies" },
  { name: "Exercise", slug: "exercise" },
  { name: "Interior Design", slug: "interior-design" },
  { name: "Business", slug: "business" },
  { name: "Photography", slug: "photography" },
  { name: "Fashion Blog", slug: "fashion-blog" },
];
// Created an array with the Array constructor and set all the values in it to null
const contentBlocks = Array(20).fill(null);
export default function CategoriesPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* Left Sidebar */}
      <aside className="md:w-64 bg-gray-100 border-r border-gray-300 h-screen md:sticky top-0 overflow-y-auto p-4">
        <h2 className="font-bold text-lg mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={`/${cat.slug}`}
                className="block px-3 py-2 rounded hover:bg-gray-200 transition"
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      {/* Right element */}
      <section className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Category Content</h1>
        <p className="mb-3">
          This is the main content area. The left sidebar is fixed and scrolls
          independently.
        </p>
        <div className="space-y-4">
            {/* mapped through the array*/}
          {contentBlocks.map((x, i) => (
            <p key={i} className="bg-gray-50 p-4 rounded">
              Content block {i + 1}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
};

