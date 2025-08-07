import Link from "next/link";

const categories = [
    {name: "Writing", slug: "writing"},
    {name: "Tech", slug: "tech"},
    {name: "Creativity", slug: "creativity"},
    {name: "News", slug: "news"},
    {name: "Lifestyle", slug: "lifestyle"},
    {name: "Wellness", slug: "wellness"},
    {name: "Culture", slug: "culture"},
    {name: "Trending", slug: "trending"},
    {name: "Entertainment", slug: "entertainment"},
    {name: "Celebrity Tea", slug: "celebrity tea"},
    {name: "Travel", slug: "travel"},
    {name: "Food blog", slug: "food blog"},
    {name: "Sports", slug: "sports"},
    {name: "Politics", slug: "politics"},
    {name: "Religion", slug: "religion"},
    {name: "Finance", slug: "finance"},
    {name: "Music", slug: "music"},
    {name: "DIY", slug: "diy"},
    {name: "Movies", slug: "movies"},
    {name: "Exercise", slug: "exercise"},
    {name: "Interior design", slug: "interior design"},
    {name: "Business", slug: "business"},
    {name: "Photography", slug: "photography"},
    {name: "Fashion blog", slug: "fashion blog"},
    
];

const CategoriesPage = () => {
    return (
        <main>
            <section className="min-h-dvh max-w-4xl mx-auto px-5 py-10">
                <h1 className="text-2xl font-bold py-5">Browse by Category</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {categories.map((cat) => <Link key={cat.slug} href={`/categories/${cat.slug}`}
                    className="block p-4 border rounded-lg shadow hover:shadow-md hover:bg-gray-100 transition">
                    <h2 className="text-xl font-semibold">{cat.name}</h2>
                    </Link>
                   )}

                </div>
            </section>
        </main>
    )
}
export default CategoriesPage;