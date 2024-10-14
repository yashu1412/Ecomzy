
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../../../Data/ProductsData";
import Footer from "../../common/Footer";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../redux/Slices/CartSlice"; 
import { toast } from "react-hot-toast";
import "./Style.css";

const Electronics = () => {
  const [loading, setLoading] = useState(true);
  const electronicProducts = productsData.filter(
    (product) => product.category === "Electronics" // Change the category to Electronics
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); // Get cart from the Redux state

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // Simulate loading
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const handleProductClick = (name) => {
    navigate(`/products/${name}`); // Navigate using product name instead of id
  };

  const addToCart = (product) => {
    dispatch(add(product)); // Dispatch add action
    toast.success("Item added to Cart"); // Show success message
  };

  return (
    <div className="bg-richblue-900 text-richblack-50 h-full m-auto pt-10">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-10">Electronics</h1>{" "}
        {/* Updated heading */}
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-yellow-300"></div>
          </div>
        ) : (
          <div className="products-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {electronicProducts.map((product) => (
              <div
                key={product.id}
                className="product-card bg-blue-700 border border-blue-500 p-6 rounded-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out relative"
                onClick={() => handleProductClick(product.name)} // Use product name for navigation
              >
                <img
                  src={product.image || "https://via.placeholder.com/150"}
                  alt={product.name}
                  className="mb-4 h-48 w-full object-cover rounded-lg"
                />
                <h2 className="text-xl font-semibold text-slate-100 mb-2">
                  {product.name}
                </h2>
                <p className="text-yellow-300 text-lg mb-4">${product.price}</p>
                <p className="text-slate-300 text-sm mb-4">
                  {product.description.split(" ").slice(0, 10).join(" ") +
                    "..."}
                </p>

                {/* Button and cart state */}
                {cart.some((p) => p.id === product.id) ? (
                  <button
                    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                    text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-black transition duration-300 ease-in"
                    disabled
                  >
                    In Cart
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click from bubbling up to the card
                      addToCart(product);
                    }}
                    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                    text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-black transition duration-300 ease-in"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Electronics;
