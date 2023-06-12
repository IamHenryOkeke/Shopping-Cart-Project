import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
