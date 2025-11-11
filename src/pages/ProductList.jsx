import { motion } from "framer-motion";
import products from "../helpers/productsData";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("")
    const [sortType, setSortType] = useState("none")

    // filter & sort
    const filtered = products
        .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
        .sort((a, b) => {
            if (sortType === "low") return a.price - b.price;
            if (sortType === "high") return b.price - a.price;
            return 0
        });

    return (
        <section className="pt-24 pb-16 bg-primary min-h-screen relative">
            <div className="max-w-7xl mx-auto px-6">

                <h1 className="text-4xl font-bold text-secondary text-center mb-10">
                    Our Products
                </h1>

                {/* search + filter */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

                    {/* search box */}
                    <input
                        type="text"
                        placeholder="Search Products..."
                        className="w-full sm:w-1/2 px-4 py-2 rounded-lg shadow-sm border outline-none focus:ring-3 focus:ring-secondary"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    {/* sort dropdown */}
                    <select
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value)}
                        className="px-4 py-2 rounded-lg border shadow-sm cursor-pointer"
                    >
                        <option value="none">Sort by</option>
                        <option value="low">Price: Low to High</option>
                        <option value="high">Price: High to Low</option>
                    </select>
                </div>

                {/* products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filtered.map((product, key) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: [0.25, 0.1, 0.25, 1], // custom cubic bezier
                                delay: key * 0.2
                            }}
                            onClick={() => navigate(`/products/${product.id}`)}
                            className="bg-white cursor-pointer rounded-xl shadow-lg hover:shadow-2xl p-6 transition"
                        >
                            <img src={product.img}
                                alt={product.title}
                                className="w-full h-56 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold text-secondary">
                                {product.title}
                            </h3>
                            <p className="text-sm text-slate-600 mt-2 mb-4">
                                {product.description}
                            </p>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.05 }}
                                className="px-4 py-2 bg-secondary text-white rounded-full border-b-4 border-seconday-Dark"
                            >
                                View Details
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* modal */}
            <Outlet />
        </section>
    )
}

export default ProductList
