import { ChevronRight, Droplets, Shield, Waves } from 'lucide-react'
import FadeIn from '../helpers/FadeIn'

const FeaturesList = () => {
    return (
        <section className="w-full bg-primary">
            <div className="max-w-7xl mx-auto px-4 py-10 sm:py-14 flex flex-col items-center gap-y-12 sm:gap-y-20">
                <FadeIn delay={0.2}>
                    <div className="max-w-2xl flex flex-col items-center justify-center text-center">
                        <p className="text-lg mb-3 sm:mb-4 font-mono">Daily SPF</p>
                        <h2 className="text-secondary text-[31px] sm:text-5xl font-bold mb-2 sm:mb-6">
                            Powerful protection for your daily routine</h2>
                        <p className="text-sm sm:text-xl mt-4">
                            Our sunscreen provides comprehensive defense against harmful UV rays while keeping your skin hydrated and smooth.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="flex flex-col md:flex-row gap-y-12 sm:gap-x-12 text-center">
                        <div className="flex flex-col items-center justify-center gap-y-3 sm:gap-y-6">
                            <Shield className='w-10 h-10' />
                            <h3 className="text-[22px] sm:text-4xl text-seconday-Dark font-semibold">Broad spectrum protection</h3>
                            <p className="text-sm sm:text-base sm:mt-4">
                                Shields your skin from both UVA and UVB rays effectively.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-y-3 sm:gap-y-6">
                            <Droplets className='w-10 h-10' />
                            <h3 className="text-[22px] sm:text-4xl text-seconday-Dark font-semibold">Lightweight formula</h3>
                            <p className="text-sm sm:text-base sm:mt-4">
                                Absorbs quickly without leaving a greasy residue.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-y-3 sm:gap-y-6">
                            <Waves className='w-10 h-10' />
                            <h3 className="text-[22px] sm:text-4xl text-seconday-Dark font-semibold">Hydrating ingredients</h3>
                            <p className="text-sm sm:text-base sm:mt-4">
                                Nourishes and supports your skin's natural moisture barrier.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                {/* btns */}
                <FadeIn delay={0.6}>
                    <div className="flex gap-x-5">
                        <button className="text-sm sm:text-base px-6 py-2 bg-tertiary border-b-4 border-tertiary-Dark rounded-full">Explore</button>
                        <button className="text-sm sm:text-base flex items-center hover:text-secondary">Watch video
                            <ChevronRight className='w-6 h-6' />
                        </button>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}

export default FeaturesList
