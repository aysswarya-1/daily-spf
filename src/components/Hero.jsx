import { motion } from "framer-motion"

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen pt-16 bg-primary">
            <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 xl:px-0 py-10 sm:py-14 flex flex-col lg:flex-row items-center justify-center gap-y-12 lg:gap-x-2 xl:gap-x-28">
                {/* left content */}
                <div className="max-w-[600px] text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold  text-secondary leading-tight">
                        Protect your skin with confidence
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-sm md:text-base mt-4 md:mt-6">
                        Daily SPF delivers lightweight, powerful sun protection designed for young professionals who want radiant, healthy skin without compromise.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="space-x-4 mt-4 md:mt-8">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "#ffffff",
                                color: "#E5B533"
                            }}
                            transition={{
                                bounceDamping: 10,
                                bounceStiffness: 600
                            }}
                            className="text-sm sm:text-xl px-6 py-2 text-white rounded-full bg-secondary border-b-4 border-seconday-Dark mb-2">
                            Shop now</motion.button>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "#ffffff",
                                color: "#E8E5D3"
                            }}
                            transition={{
                                bounceDamping: 10,
                                bounceStiffness: 600
                            }}
                            className="text-sm sm:text-xl px-6 py-2 text-gray-500 rounded-full bg-tertiary border-b-4 border-tertiary-Dark">
                            Learn more</motion.button>
                    </motion.div>
                </div>

                {/* right content */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.3,
                        type: "spring",
                        stiffness: 120
                    }} >
                    <img
                        className="min-w-2xs w-[400px] sm:w-[400px] md:w-[600px] lg:w-[500px] rounded-2xl"
                        src="/images/products/orange.png" alt="sunscreen_image" />
                </motion.div>

            </div>
        </section>
    )
}

export default Hero
