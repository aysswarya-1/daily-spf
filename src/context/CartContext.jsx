import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("cart")) || [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prev => {
            const exists = prev.find(p => p.id === product.id);

            if (exists) {
                return prev.map(p =>
                    p.id === product.id ? { ...p, qty: p.qty + 1 } : p
                );
            }

            return [...prev, { ...product, qty: 1 }];
        });
    }

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(p => p.id !== id));
    }

    const increaseQty = (id) => {
        setCart(prev =>
            prev.map(p =>
                p.id === id ? { ...p, qty: p.qty + 1 } : p
            )
        )
    }

    const decreaseQty = (id) => {
        setCart(prev =>
            prev.map(p =>
                p.id === id && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p
            )
        )
    }

    const clearCart = () => setCart([]);

    const totalPrice = cart.reduce((total, p) => total + p.price * p.qty, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQty,
                decreaseQty,
                clearCart,
                totalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)