import { AnimatePresence, motion } from "framer-motion";
import products from "../helpers/productsData";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ProductList = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("")
    const [open, setOpen] = useState(false);
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

                <h1 className="text-4xl font-bold text-secondary mb-10">
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
                    <div className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="px-4 py-2 md:mr-20 bg-primary rounded-lg border border-secondary-Dark shadow-sm 
                          text-gray-700 font-medium flex items-center gap-2 cursor-pointer hover:text-secondary transition">
                            {sortType === "none" && "Sort by"}
                            {sortType === "low" && "Low to High"}
                            {sortType === "high" && "High to Low"}
                            <ChevronDown size={18}
                                className={`ml-1 w-4 h-4 transform transition-transform ${open ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute md:left-0 -translate-x-1/2 left-[100px] sm:translate-x-0 mt-2 
                                     w-48 bg-primary rounded-lg shadow-md border border-seconday-Dark z-20 max-w-[90vw]">

                                    <button
                                        onClick={() => { setSortType("none"); setOpen(false); }}
                                        className="block w-full text-left px-4 py-2 text-gray-700 hover:text-secondary transition">
                                        None
                                    </button>
                                    <button
                                        onClick={() => { setSortType("low"); setOpen(false); }}
                                        className="block w-full text-left px-4 py-2 text-gray-700 hover:text-secondary transition">
                                        Price: Low to High
                                    </button>
                                    <button
                                        onClick={() => { setSortType("low"); setOpen(false); }}
                                        className="block w-full text-left px-4 py-2 text-gray-700 hover:text-secondary transition">
                                        Price: Low to High
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filtered.map((product, key) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 16,
                                delay: key * 0.08,
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
