import { ChevronRight } from "lucide-react"
import FadeIn from "../helpers/FadeIn"
import card_1 from "../assets/images/card_1.png"
import card_2 from "../assets/images/card_2.png"
import card_3 from "../assets/images/card_3.png"
const Benefits = () => {
    return (
        <section className="bg-primary">
            <div className="max-w-7xl mx-auto px-5 py-6 sm:px-16 sm:py-12 md:py-14 flex flex-col gap-y-12 md:gap-y-20">
                <FadeIn delay={0.2}>
                    <div className="max-w-3xl">
                        <p className="text-lg sm:text-base font-mono mb-2">Shield</p>
                        <h2 className="text-secondary text-3xl md:text-5xl">
                            Elevate your skin defense strategy</h2>
                        <p className="text-sm sm:text-xl mt-4">
                            Designed for professionals who demand more from their skincare, GlowGuard transforms sun protection into a powerful daily ritual.
                        </p>
                    </div>
                </FadeIn>

                {/* cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                    {/* card_1 */}
                    <FadeIn delay={0.2}>
                        <div className="max-w-[394px]">
                            <img
                                className="rounded-3xl mb-6 sm:mb-8"
                                src={card_1} alt="card_1" />
                            <p className="text-sm sm:text-base font-mono text-seconday-Dark">
                                Step 1 – Prep & Cleanse</p>
                            <h3 className="text-[22px] sm:text-4xl text-seconday-Dark font-semibold">
                                Refresh your canvas</h3>
                            <p className="text-sm sm:text-base sm:mt-4">
                                Begin with a gentle cleanser to remove impurities and prepare your skin for SPF absorption.</p>
                        </div>
                    </FadeIn>
                    {/* card_2 */}
                    <FadeIn delay={0.4}>
                        <div className="max-w-[394px] lg:pt-24">
                            <img
                                className="rounded-3xl mb-8"
                                src={card_2} alt="card_2" />
                            <p className="text-sm sm:text-base font-mono text-seconday-Dark">
                                Step 2 – Protect & Shield</p>
                            <h3 className="text-[22px] sm:text-4xl text-seconday-Dark font-semibold">
                                Everyday Skin Shield</h3>
                            <p className="text-sm sm:text-base sm:mt-4">
                                Apply a broad-spectrum sunscreen that protects against UV rays while nourishing the skin barrier.</p>
                        </div>
                    </FadeIn>
                    {/* card_3 */}
                    <FadeIn delay={0.6}>
                        <div className="max-w-[394px] lg:pt-48">
                            <img
                                className="rounded-3xl mb-8"
                                src={card_3} alt="card_3" />
                            <p className="text-sm sm:text-base font-mono text-seconday-Dark">
                                Step 3 – Reapply & Restore</p>
                            <h3 className="text-[22px] sm:text-4xl text-seconday-Dark font-semibold">
                                Stay radiant all day</h3>
                            <p className="text-sm sm:text-base sm:mt-4">
                                Reapply every 2–3 hours or after sun exposure for continuous protection and hydration.</p>
                        </div>
                    </FadeIn>
                </div>

                {/* btns */}
                <FadeIn>
                    <div className="flex gap-x-5">
                        <button className="text-sm sm:text-base px-6 py-2 bg-tertiary border-b-4 border-tertiary-Dark rounded-full">Shop SPF</button>
                        <button className="text-sm sm:text-base flex items-center hover:text-secondary">Discover
                            <ChevronRight className='w-6 h-6' />
                        </button>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}

export default Benefits
