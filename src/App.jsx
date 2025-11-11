import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import ProductModal from "./pages/ProductModal"
import CartPage from "./pages/CartPage"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Signup from "./pages/Signup"
import MainLayout from "./pages/MainLayout"
import ScrollToTop from "./components/ScrollToTop"


const App = () => {

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />}>
            <Route path=":id" element={<ProductModal />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Route>

        <Route path="/signup" element={<Signup />} />

      </Routes>
    </HashRouter>
  )
}

export default App
