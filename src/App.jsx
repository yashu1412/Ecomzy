// App.jsx
import { Routes, Route } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar";

// Import Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductsPage from "./pages/Product";
import ProductDetailsPage from "./pages/ProductDetails";
import SearchResults from "./components/Core/Search/SearchReasult"; // Newly added

import Electronics from "./components/Core/Categories/Electronis";
import Fashion from "./components/Core/Categories/Fashion";
import HomeGarden from "./components/Core/Categories/HomeAndGarden";
import Sports from "./components/Core/Categories/Sports";
import Toys from "./components/Core/Categories/Toys";

import Checkout from "./pages/CheckOut";
import OrderConfirmation from "./pages/ConfirmOrder";

const App = () => {

  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <div className="bg-richblue-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductsPage />} />

          {/* Fixed Route for Product Details */}
          <Route path="/products/:name" element={<ProductDetailsPage />} />

          {/* Search Results Route */}
          <Route path="/search" element={<SearchResults />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmOrder" element={<OrderConfirmation />} />

          {/* Category Routes */}
          <Route path="/category/electronics" element={<Electronics />} />
          <Route path="/category/fashion" element={<Fashion />} />
          <Route path="/category/home-garden" element={<HomeGarden />} />
          <Route path="/category/sports" element={<Sports />} />
          <Route path="/category/toys" element={<Toys />} />

          {/* Optional: 404 Not Found Route */}
          {/* 
          <Route path="*" element={<NotFound />} />
          */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
