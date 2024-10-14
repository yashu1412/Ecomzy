// Cart.jsx
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext"; 
import CartItem from "../components/CartItem"; 
import Footer from "../components/common/Footer";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const { setCartSummary } = useCart(); // Get setCartSummary from context
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const amount = cart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    const items = cart.reduce((acc, curr) => acc + curr.quantity, 0); // Total number of products

    setTotalAmount(amount);
    setTotalItems(items);

    // Update context with the new summary
    setCartSummary({ totalAmount: amount, totalItems: items, items: cart }); // Include items
  }, [cart, setCartSummary]);

  return (
    <div>
    <div className="w-full flex flex-col justify-between items-center px-4 md:px-8 lg:px-12 xl:px-16 text-gray-50 bg-richblue-900 min-h-screen">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:items-start mt-10 lg:mt-16 space-y-8 lg:space-y-0">
          <div className="w-full lg:w-2/3 space-y-6">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="w-full lg:w-1/3 max-w-[350px] p-6 bg-gray-800 rounded-lg shadow-lg text-gray-50 space-y-6">
            <div className="border-b border-gray-600 pb-4 mb-4">
              <h2 className="text-3xl font-bold text-yellow-400">Your Cart</h2>
              <h3 className="text-4xl font-extrabold text-yellow-300 mt-2">
                Summary
              </h3>
              <p className="mt-4 text-lg text-yellow-300 font-semibold">
                Total Items: <span>{totalItems}</span>
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xl lg:text-2xl font-semibold text-yellow-200">
                Total Amount:{" "}
                <span className="font-bold">${totalAmount.toFixed(2)}</span>
              </p>
              <Link to="/checkout" state={{ totalItems, totalAmount }}>
                <button className="w-full bg-yellow-500 text-gray-900 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 lg:text-lg shadow-md hover:shadow-lg">
                  CheckOut Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-16">
          <h1 className="text-3xl font-extrabold text-yellow-400 mb-6 lg:text-4xl">
            Your Cart is Empty
          </h1>
          <Link to="/">
            <button className="bg-yellow-500 text-gray-900 py-3 px-6 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 lg:text-lg shadow-md hover:shadow-lg">
              Shop Now
            </button>
          </Link>
        </div>
      )}
      </div>
     <div>
       {/* footer */}
       <Footer/>
     </div>
    </div>
  );
};

export default Cart;
