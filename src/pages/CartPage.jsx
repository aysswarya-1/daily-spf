import { Trash } from "lucide-react";
import { useCart } from "../context/CartContext"
import { motion } from "framer-motion";
const CartPage = () => {

    const {
        cart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        totalPrice
    } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    if (cart.length === 0)
        return (
            <div className="pt-24 flex flex-col items-center justify-center min-h-screen bg-primary text-gray-500">
                <div className="text-7xl mb-6">🛒</div>
                <p className="text-xl sm:text-2xl font-medium">Your cart is empty</p>
                <p className="text-sm text-gray-400 mt-2">Start shopping to fill it</p>
            </div>
        );


    return (
        <section className="pt-24 pb-16 bg-primary min-h-screen">
            <div className="max-w-5xl mx-auto sm:px-6 px-4">
                <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-8">
                    Your Cart ({totalItems})
                </h1>

                <div className="space-y-4 sm:space-y-6">
                    {cart.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white p-4 rounded-xl shadow-md"
                        >
                            <img src={item.img} alt={item.title}
                                className="w-full h-40 sm:w-28 sm:h-28 object-cover rounded-xl" />

                            <div className="flex-1 flex flex-col justify-between">
                                <h2 className="text-xl font-bold text-secondary">
                                    {item.title}
                                </h2>
                                <p className="text-slate-600 mt-1 sm:mt-2">
                                    ₹{item.price} x {item.qty}
                                </p>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="w-fit text-red-500/50 mt-3"
                                >
                                    <Trash className="hover:scale-110" />
                                </button>
                            </div>

                            {/* qty */}
                            <div className="flex items-center gap-3 justify-start sm:justify-center mt-3 sm:mt-0">
                                <button
                                    onClick={() => decreaseQty(item.id)}
                                    className="px-3 py-1 bg-gray-200 rounded-full">
                                    -
                                </button>
                                <span>{item.qty}</span>
                                <button
                                    onClick={() => increaseQty(item.id)}
                                    className="px-3 py-1 bg-gray-200 rounded-full">
                                    +
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 text-right">
                    <p className="text-2xl font-bold text-secondary">
                        Total: ₹{totalPrice}
                    </p>

                    <div className="mt-4 flex gap-4 justify-end">
                        <button
                            onClick={clearCart}
                            className="px-4 sm:px-6 sm:py-2 bg-gray-300 rounded-full"
                        >
                            Clear Cart
                        </button>

                        <button className="px-4 sm:px-6 py-2 bg-secondary text-white rounded-full border-b-4 border-seconday-Dark">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartPage
