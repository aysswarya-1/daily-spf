import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import ProductModal from "./pages/ProductModal"
import CartPage from "./pages/CartPage"
import About from "./pages/About"
import Blog from "./pages/Blog"


const App = () => {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />}>
          <Route path=":id" element={<ProductModal />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
