import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { blogPosts } from "../helpers/BlogData"

const categories = ["All", "Sunscreen", "Skincare", "Lifestyle", "Brand"];

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [page, setPage] = useState(1)
    const postsPerPage = 5

    //  Filter posts by category
    const filteredPosts =
        activeCategory === "All"
            ? blogPosts
            : blogPosts.filter((p) => p.category === activeCategory);

    // Calculate total pages dynamically
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    // Slice posts for the current page
    const startIndex = (page - 1) * postsPerPage;
    const pagePosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

    // Reset pagination to page 1 when category changes
    useEffect(() => {
        setPage(1);
    }, [activeCategory])

    return (
        <div className="mt-24 max-w-6xl mx-auto px-4">
            {/* title */}
            <h1 className="text-3xl font-bold mb-6">DailySPF Blog</h1>

            {/* categories */}
            <div className="flex flex-wrap gap-4 mb-10">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-1.5 rounded-full text-sm border
                        ${activeCategory === category
                                ? "bg-secondary text-white border-secondary"
                                : "text-slate-600 border-slate-300 hover:bg-slate-100"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* blog list */}
            <div className="space-y-10">
                {pagePosts.map((post) => (
                    <div
                        key={post.id}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
                        <img src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-40 object-cover rounded-xl"
                        />

                        <div className="md:col-span-2">
                            <h2 className="font-semibold text-xl hover:text-secondary cursor-pointer">
                                {post.title}
                            </h2>
                            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                                {post.excerpt}
                            </p>

                            <p className="text-sm text-slate-500 mt-3">
                                by {post.author} . {post.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={(p) => setPage(p)}
            />
        </div>
    )
};

export default Blog;
