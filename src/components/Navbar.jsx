import { ChevronDown, Menu, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {

  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropDownOpen, setIsdropDownOpen] = useState(false)

  return (
    <nav className="w-full fixed top-0 left-0 bg-primary backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* logo */}
          <Link to={"/"} className="text-lg md:text-2xl font-bold font-geist cursor-pointer">
            <span className="text-slate-600">Daily</span>
            <span className=" text-secondary">SPF</span>
          </Link>

          {/* desktopMenu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="hover:text-secondary transition hover:scale-105">
              Products </Link>
            <Link to="/about" className="hover:text-secondary transition hover:scale-105">
              About</Link>
            <Link to="/blog" className="hover:text-secondary transition hover:scale-105">
              Blog</Link>

            {/* dropdown menu */}
            <div className="relative"
              onMouseEnter={() => setIsdropDownOpen(true)}
              onMouseLeave={() => setIsdropDownOpen(false)}
            >
              <button
                className="flex items-center hover:text-secondary transition cursor-pointer">More
                <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform ${isDropDownOpen ? "rotate-180" : ""
                  }`} />
              </button>

              {/* dropmenu items */}
              <AnimatePresence>
                {isDropDownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 mt-5 w-40 bg-primary  rounded-lg shadow-md border border-seconday-Dark">
                    <a href="#" className="block px-4 py-2  hover:text-secondary transition">
                      Reviews
                    </a>
                    <a href="#" className="block px-4 py-2 hover:text-secondary transition">
                      Community
                    </a>
                    <a href="#" className="block px-4 py-2 hover:text-secondary transition">
                      Resources
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* cart btn */}
            <Link
              to="/cart"
              className="relative hidden md:block mt-2">
              <ShoppingCart />

              {/* badge */}
              {totalItems > 0 && (
                <span
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full size-5 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* shop btn */}
            <Link
              to={"/products"}
              className='hidden md:block bg-secondary border-b-4 border-seconday-Dark rounded-3xl py-1.5 px-6 cursor-pointer'>
              Shop</Link>

            {/*hamburger mobileMenu */}
            <Menu className='md:hidden text-slate-600 focus:outline-none'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </div>
        </div>
      </div>

      {/* mobileMenu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary/80 backdrop-blur-md shadow-sm">
          <div className="px-4 py-3 flex flex-col space-y-2">
            <Link to="/products" className="hover:text-secondary transition">Products</Link>
            <Link to="/about" className="hover:text-secondary transition">About</Link>
            <Link to="/blog" className="hover:text-secondary transition">Blog</Link>

            {/* dropdown mobile menu */}
            <div>
              <button
                onClick={() => setIsdropDownOpen(!isDropDownOpen)}
                className="flex items-center hover:text-secondary justify-between w-full">More
                <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform ${isDropDownOpen ? "rotate-180" : ""
                  }`} />
              </button>

              {/* dropmenu mobile items */}
              {isDropDownOpen && (
                <div className="mt-3 pl-4 flex flex-col space-y-2 bg-primary/20 ">
                  <a href="#" className="hover:text-secondary transition">
                    Reviews
                  </a>
                  <a href="#" className="hover:text-secondary transition">
                    Community
                  </a>
                  <a href="#" className="hover:text-secondary transition">
                    Resources
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
