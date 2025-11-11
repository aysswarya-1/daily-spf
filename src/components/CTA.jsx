const CTA = () => {
    return (
        <section className="bg-white/40">
            <div className="max-w-7xl mx-auto px-5 py-6 sm:py-16 md:py-14">
                <div className="flex flex-col md:flex-row bg-tertiary rounded-4xl">
                    {/* left */}
                    <div className="flex-1 p-6 md:p-10 flex flex-col justify-center gap-y-2">
                        <h2 className="text-slate-800 text-3xl md:text-5xl font-semibold">
                            Protect your skin today</h2>
                        <p className="max-w-3xl text-sm sm:text-lg mt-6 mb-8">
                            Join thousands of professionals who have transformed their skincare routine with GlowGuard's advanced sun protection.
                        </p>
                        {/* btn */}
                        <div className="flex gap-x-5">
                            <button className="text-sm sm:text-base px-6 py-2 text-white bg-secondary border-b-4 border-seconday-Dark rounded-full">Shop now</button>
                            <button className="text-sm sm:text-base px-6 py-2 rounded-full bg-tertiary border-b-4 border-tertiary-Dark">Learn more
                            </button>
                        </div>
                    </div>


                    {/* image */}
                    <div className="flex-1">
                        <div
                            className="bg-[url('/images/CTA.png')] bg-cover bg-center w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-br-4xl rounded-bl-4xl sm:rounded-bl-none sm:rounded-tr-4xl">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
