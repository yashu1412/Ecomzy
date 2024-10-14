

import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove, updateQuantity } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity || 1);

  // Helper variables to handle dynamic properties
  const productName = item.name || item.title || "Unnamed Product";
  const productDescription = item.description || "No description available.";
  const productImage = item.image || "https://via.placeholder.com/150";
  const productPrice = item.price || 0;

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success(`${productName} removed from cart.`);
  };

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  return (
    <div className="cart-item p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between bg-blue-700 hover:shadow-xl transition-shadow duration-300 space-x-6 ">
      {/* Product Image */}
      <div className="cart-image w-full md:w-1/4 flex-shrink-0 mb-4 md:mb-0">
        <img
          className="w-full h-auto object-cover rounded-md border border-gray-200"
          src={productImage}
          alt={productName}
          loading="lazy"
        />
      </div>

      {/* Product Details */}
      <div className="cart-details flex flex-col md:flex-row w-full md:w-3/4 text-richblack-100">
        {/* Product Information */}
        <div className="flex-grow">
          <h1 className="text-xl font-semibold text-richblack-5 mb-2">
            {productName}
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            {productDescription.split(" ").slice(0, 10).join(" ") + "..."}
          </p>
          <p className="text-lg font-bold text-yellow-25 mb-4">
            ${(productPrice * quantity).toFixed(2)}
          </p>
        </div>

        {/* Quantity Controls and Delete Button */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {/* Quantity Controls */}
          <div className="quantity-controls flex items-center space-x-2 text-black ">
            {/* Decrease Button */}
            <button
              className={`quantity-btn bg-richblack-200 font-bold px-3 py-1 rounded-full hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={decreaseQuantity}
              disabled={quantity === 1}
              aria-label={`Decrease quantity of ${productName}`}
            >
              -
            </button>
            <span className="font-semibold text-gray-800">{quantity}</span>
            {/* Increase Button */}
            <button
              className="quantity-btn bg-richblack-200 font-bold px-3 py-1 rounded-full hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={increaseQuantity}
              aria-label={`Increase quantity of ${productName}`}
            >
              +
            </button>
          </div>

          {/* Delete Button */}
          <button
            className="delete-btn text-richblack-200 text-2xl bg-transparent w-6 transition duration-300 rounded-full"
            onClick={removeFromCart}
            aria-label={`Remove ${productName} from cart`}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
