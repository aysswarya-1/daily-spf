import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import React, { useState } from 'react'
import FadeIn from '../helpers/FadeIn'

const testimonials = [
    {
        name: "Emma Rodriguez",
        role: "Marketing director, tech startup",
        image: "/images/users/person_1.png",
        quote: "DailySPF changed my daily skincare routine completely."
    },
    {
        name: "Michael Chen",
        role: "Software engineer, San Francisco",
        image: "/images/users/person_5.png",
        quote: "Finally, a sunscreen that doesn't feel heavy or greasy."
    },
    {
        name: "Sarah Thompson",
        role: "Creative director, design agency",
        image: "/images/users/person_3.png",
        quote: "Protecting my skin has never been this easy and stylish."
    },
    {
        name: "Juliea David",
        role: "Marketing Lead",
        image: "/images/users/person_2.png",
        quote: "This one blends perfectly and doesn’t leave a white cast. Highly recommend for daily use."
    },
    {
        name: "Raven Thomas",
        role: "Entrepreneur",
        image: "/images/users/person_4.png",
        quote: "It’s honestly the best sunscreen I’ve ever used worth every penny."
    },
    {
        name: "Sofia Williams",
        role: "Product Designer",
        image: "/images/card_3.png",
        quote: "It feels light, smells great, and gives my skin a healthy glow every day.",
    },
]
const Testimonials = () => {
    const [index, setIndex] = useState(0)

    const cardsPerView = window.innerWidth < 764 ? 1 : 3;
    const totalslides = Math.ceil(testimonials.length / cardsPerView);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % totalslides);
    }

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + totalslides) % totalslides);
    }

    return (
        <section className="bg-neutral-200 w-full px-5 py-6 sm:px-16 sm:py-16 md:py-28">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <FadeIn delay={0.2}>
                    <div className="max-w-3xl text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8">
                            What people say</h2>
                        <p className="text-sm sm:text-base text-gray-600 mb-10">
                            Real experiences from professionals who trust our sunscreen.
                        </p>
                    </div>
                </FadeIn>

                {/* testimonial cards */}
                <div className="relative flex items-center">
                    {/* left arrow */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-secondary/70 text-white rounded-full p-2 hover:scale-105 transition">
                        <ChevronLeft size={24} />
                    </button>

                    {/* card */}
                    <div className="overflow-hidden w-full">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className='flex justify-center gap-6'
                            >
                                {testimonials
                                    .slice(index * cardsPerView, index * cardsPerView + cardsPerView)
                                    .map((testimonial, testimonialIndex) => (
                                        <div
                                            key={testimonialIndex}
                                            className="bg-white p-8 shadow-md max-w-sm max-h-60 flex flex-col items-start gap-y-5">
                                            {/* stars */}
                                            <div className="text-yellow-400 flex gap-x-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i} size={18} fill='currentColor' />
                                                ))}
                                            </div>

                                            <p className="text-sm sm:text-base text-gray-700 italic max-w-[400px]">
                                                "{testimonial.quote}"
                                            </p>
                                            <div className="flex gap-x-4">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className='size-10 md:size-12 rounded-full object-cover'
                                                />
                                                <div className="">
                                                    <h4 className="text-base sm:text-lg font-bold text-gray-900">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-xs sm:text-sm text-gray-500">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* right arrow */}
                    <button
                        onClick={nextSlide}
                        className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 bg-secondary/70 text-white rounded-full p-2 hover:scale-105 transition">
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-8 gap-2">
                    {Array.from({ length: totalslides }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`size-3 rounded-full transition-all
                            ${i === index ? "bg-secondary w-6" : "bg-gray-400"
                                }`}
                        >
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
