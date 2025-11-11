import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-primary">
            <section className="max-w-7xl mx-auto py-12 sm:pt-20 px-5">
                {/* top */}
                <div className="flex flex-col lg:flex-row gap-x-20">
                    <div className="flex-1 max-w-lg">
                        {/* logo */}
                        <a href="#" className="text-lg md:text-2xl font-bold font-geist mb-6 block">
                            <span className="text-slate-600">Daily</span>
                            <span className=" text-secondary">SPF</span>
                        </a>

                        <p className="text-sm text-gray-500 mb-6">
                            Stay protected and informed about the latest in skin defense</p>
                        <form>
                            <input type="email" name="email" placeholder="Your email"
                                className="w-full sm:w-sm border p-2 mb-6 sm:mr-3" />
                            <button className="w-full sm:w-[100px] text-sm sm:text-base px-2 py-2 mb-2 text-white rounded-full bg-tertiary border-b-4 border-tertiary-Dark cursor-pointer">
                                Sign up</button>
                        </form>
                        <p className="text-xs text-gray-500">
                            By subscribing, you agree to our privacy policy and email terms.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex-1 flex flex-col md:flex-row justify-end gap-y-10 gap-x-28 mt-10 lg:mt-0">
                        <div className="flex flex-col gap-y-3">
                            <p className="font-semibold">Quick links</p>
                            <a className="hover:text-secondary">Explore</a>
                            <a className="hover:text-secondary">Support</a>
                            <a className="hover:text-secondary">Connect</a>
                            <a className="hover:text-secondary">Resources</a>
                            <a className="hover:text-secondary">Community</a>
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <p className="font-semibold">Support</p>
                            <a className="hover:text-secondary">About Us</a>
                            <a className="hover:text-secondary">Products</a>
                            <a className="hover:text-secondary">Blog</a>
                            <a className="hover:text-secondary">FAQ</a>
                            <a className="hover:text-secondary">Contact</a>
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <p className="font-semibold ">Connect with us</p>
                            <a className="flex items-center gap-x-1 hover:text-secondary">
                                <Facebook className="text-gray-700" />Facebook</a>
                            <a className="flex items-center gap-x-1 hover:text-secondary">
                                <Instagram className="text-gray-700" />Instagram</a>
                            <a className="flex items-center gap-x-1 hover:text-secondary">
                                <Twitter className="text-gray-700" />X
                            </a>
                            <a className="flex items-center gap-x-1 hover:text-secondary">
                                <Linkedin className="text-gray-700" />LinkedIn
                            </a>
                            <a className="flex items-center gap-x-1 hover:text-secondary">
                                <Youtube className="text-gray-700" />YouTube
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-300 my-6"></div>
                {/* bottom */}
                <div className="flex justify-between">
                    <p className="text-xs">
                        © {new Date().getFullYear()} DailySPF. Protecting skin, empowering lives.
                    </p>
                    <div className="flex gap-x-2">
                        <a href="#" className="text-xs hover:text-secondary transition underline">Privacy policy</a>
                        <a href="#" className="text-xs hover:text-secondary transition underline">Terms of service</a>
                        <a href="#" className="text-xs hover:text-secondary transition underline">Cookie settings</a>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
