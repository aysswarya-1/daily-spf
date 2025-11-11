import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import products from "../helpers/productsData";
import { useCart } from "../context/CartContext";

const ProductModal = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { addToCart } = useCart();
    const buyNow = (product) => {
        console.log("Buy now", product)
        navigate("/cart")
    };

    const product = products.find((p) => p.id === Number(id));
    if (!product) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => navigate("/products")}
        >
            <motion.div
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-xl p-8 w-[90%] max-w-md shadow-xl relative"
            >
                {/* close btn */}
                <button
                    onClick={() => navigate("/products")}
                    className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-black">
                    x
                </button>

                <img src={product.img} alt={product.title}
                    className="w-full h-64 object-cover rounded-lg mb-6" />

                <p className="text-3xl text-seconday-Dark font-bold mb-2">₹{product.price}</p>
                <h2 className="text-2xl font-bold text-secondary mb-2">
                    {product.title}
                </h2>
                <p className="text-sm text-slate-700 mb-2">{product.description}</p>

                {/* action btns */}
                <div className="flex gap-3">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => buyNow(product)}
                        className="px-4 py-2 bg-tertiary text-gray-500 rounded-full border-b-4 border-tertiary-Dark"
                    >
                        Buy Now
                    </motion.button>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => addToCart(product)}
                        className="px-4 py-2 bg-secondary text-white rounded-full border-b-4 border-seconday-Dark"
                    >
                        Add to Cart
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ProductModal
