import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <section className="min-h-screen bg-primary flex items-center justify-center px-6 py-12">
            {/* container card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                }}
                className="bg-white w-full max-w-md shadow-xl rounded-2xl p-8"
            >
                <h1 className="text-3xl font-bold text-secondary mb-6 text-center">
                    Create Account
                </h1>

                {/* form */}
                <form className="space-y-6">

                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 rounded-lg border shadow-sm 
              focus:ring-2 focus:ring-secondary outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="w-full px-4 py-2 rounded-lg border shadow-sm 
              focus:ring-2 focus:ring-secondary outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Create a strong password"
                            className="w-full px-4 py-2 rounded-lg border shadow-sm 
              focus:ring-2 focus:ring-secondary outline-none"
                        />
                    </div>

                    {/* CTA */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-full bg-secondary text-white py-3 rounded-full font-semibold
            shadow-md hover:shadow-lg transition border-b-4 border-seconday-Dark"
                    >
                        Sign Up
                    </motion.button>
                </form>

                {/* bottom link */}
                <p className="text-center mt-6 text-gray-600 text-sm">
                    Already have an account?{" "}
                    <Link
                        to="/"
                        className="text-secondary font-medium hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </motion.div>
        </section>
    );
}
