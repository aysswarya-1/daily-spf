import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Minus, Plus } from "lucide-react"
import FadeIn from "../helpers/FadeIn"
const faqs = [
    {
        question: "How often should I apply?",
        answer: "Apply daily, 15 minutes before sun exposure. Reapply every two hours or after swimming and sweating."
    },
    {
        question: "Is it suitable for sensitive skin?",
        answer: "Our formula is dermatologist-tested and designed for all skin types, including sensitive and acne-prone skin."
    },
    {
        question: "What SPF protection does it offer?",
        answer: "DailySPF provides broad-spectrum SPF 50 protection against both UVA and UVB rays."
    },
    {
        question: "Is it water-resistant?",
        answer: "Yes, our sunscreen offers 80 minutes of water resistance, perfect for outdoor activities and swimming."
    },
    {
        question: "Are the ingredients natural?",
        answer: "We use a blend of natural and scientifically advanced ingredients to ensure maximum protection and skin health."
    },
]

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null)

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }
    return (
        <section className="w-full py-16 px-4 bg-primary">
            <FadeIn delay={0.4}>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-secondary">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 mb-10">
                        Find answers to the most common questions about our sunscreen and skin protection.
                    </p>
                </div>
            </FadeIn>

            <FadeIn delay={0.6}>
                <div className="max-w-3xl space-y-4 mx-auto">
                    {faqs.map((faq, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center px-6 py-4 text-left">
                                    <span
                                        className="font-semibold text-gray-800 text-lg">
                                        {faq.question}
                                    </span>

                                    {/* icon */}
                                    <motion.span
                                        initial={false}
                                        animate={{ rotate: isActive ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-3xl text-secondary font-bold"
                                    >
                                        {isActive ? <Minus /> : <Plus />}
                                    </motion.span>
                                </button>

                                <AnimatePresence
                                    initial={false}
                                >
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-4 text-gray-700">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>
            </FadeIn>

            <FadeIn delay={0.6}>
                <div className="max-w-xl mx-auto text-center mt-10">
                    <h3 className="sm:text-2xl text-seconday-Dark font-bold">
                        Need more help?</h3>
                    <p className="text-sm sm:text-base sm:mt-4">
                        Our skincare experts are ready to answer your specific questions.
                    </p>
                    <button className="text-sm sm:text-xl px-6 py-2 text-white rounded-full bg-secondary border-b-4 border-seconday-Dark mt-4">
                        Contact</button>
                </div>
            </FadeIn>
        </section>
    )
}

export default FAQ
