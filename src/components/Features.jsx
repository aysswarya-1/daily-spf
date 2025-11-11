import { ChevronRight } from 'lucide-react'
import FadeIn from '../helpers/FadeIn'
import { motion } from 'framer-motion'

const Features = () => {
    return (
        <section className="bg-primary px-5 py-6 sm:py-12 md:py-14">
            <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
                {/* left */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.3,
                        type: "spring",
                        stiffness: 120
                    }}
                    className="relative flex-1 flex items-center justify-center ">
                    <img src="/images/eco/1.png" alt="ocean"
                        className='min-w-2xs w-[400px] sm:w-[400px] md:w-[600px] lg:w-[450px] rounded-2xl ' />
                </motion.div>
                {/* right */}
                <FadeIn delay={0.2}>
                    <div className="flex-1 flex justify-start flex-col">
                        <div className="max-w-3xl text-left">
                            <p className="text-lg sm:text-base font-mono mb-4">Sustainable</p>
                            <h2 className="text-secondary text-3xl md:text-5xl">
                                Sustainable protection for you and the planet</h2>
                            <p className="text-sm sm:text-lg mt-6 mb-8">
                                Our eco-friendly packaging reduces plastic waste while delivering premium sun protection. We believe in responsible skincare that respects both your skin and the environment.
                            </p>
                        </div>
                        {/* btn */}
                        <div className="flex gap-x-5">
                            <button className="text-sm sm:text-base px-6 py-2 bg-secondary border-b-4 border-seconday-Dark rounded-full">Explore</button>
                            <button className="text-sm sm:text-base flex items-center hover:text-secondary">Watch video
                                <ChevronRight className='w-6 h-6' />
                            </button>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}

export default Features
