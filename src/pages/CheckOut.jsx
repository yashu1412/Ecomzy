// Checkout.jsx

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { sendOrderConfirmationEmail } from "../components/EmailService"; 
import Footer from "../components/common/Footer";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cart = useSelector((state) => state.cart);

  const { totalItems, totalAmount } = location.state || {};

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    address1: "",
    address2: "",
    postcode: "",
    city: "",
    additionalInfo: "",
  });

  const [cartSummary, setCartSummary] = useState({
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
    vat: 0,
  });

  const VAT_PERCENTAGE = 0.15;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    localStorage.setItem(
      "checkoutFormData",
      JSON.stringify({
        ...formData,
        [id]: value,
      })
    );
  };

  const loadFormData = () => {
    const savedData = localStorage.getItem("checkoutFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  };

  const calculateCartSummary = () => {
    if (Array.isArray(cart)) {
      let total = 0;
      let quantity = 0;

      cart.forEach((item) => {
        const price = parseFloat(item.price);
        const qty = parseInt(item.quantity, 10);

        if (!isNaN(price) && !isNaN(qty)) {
          total += price * qty;
          quantity += qty;
        } else {
          console.error(
            `Invalid price or quantity for item: ${item.name || item.title}`
          );
        }
      });

      const vat = total * VAT_PERCENTAGE;
      setCartSummary({
        items: cart, // Include items array
        totalPrice: (total + vat).toFixed(2),
        totalQuantity: quantity,
        vat: vat.toFixed(2),
      });
    } else {
      console.error("Cart is not an array:", cart);
    }
  };

  useEffect(() => {
    loadFormData();

    if (totalAmount && totalItems) {
      setCartSummary({
        items: cart, // Include items array
        totalPrice: totalAmount.toFixed(2),
        totalQuantity: totalItems,
        vat: (totalAmount * VAT_PERCENTAGE).toFixed(2),
      });
    } else if (Array.isArray(cart) && cart.length > 0) {
      calculateCartSummary();
    } else {
      toast.error(
        "Your cart is empty. Please add items to your cart before checking out."
      );
      navigate("/cart");
    }

    // Log the current cart for debugging
    console.log("Current cart:", cart);
  }, [cart, totalAmount, totalItems, navigate]);

  const handlePurchase = async () => {
    const {
      firstName,
      lastName,
      phone,
      email,
      country,
      address1,
      postcode,
      city,
    } = formData;

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !country ||
      !address1 ||
      !postcode ||
      !city
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Ensure cartSummary is defined
    if (!cartSummary) {
      console.error("Cart summary is undefined.");
      toast.error("There was an error processing your order summary.");
      return;
    }

    // Generate Order Number and Date
    const orderNumber = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const orderDate = new Date().toLocaleDateString();

    // Check if cart is an array and has items
    if (!Array.isArray(cart) || cart.length === 0) {
      console.error("Cart is empty or not an array.");
      toast.error(
        "Your cart is empty. Please add items to your cart before checking out."
      );
      return;
    }

    // Construct Items Ordered as a String
    const itemsOrdered = cart
      .map((item) => {
        const itemName = item.name || item.title || "Unnamed Item";
        const quantity = item.quantity || 1;
        const price = item.price || 0;
        return `- ${itemName} x${quantity} - ₹${price}`;
      })
      .join("\n"); // Use "<br/>" if the email is in HTML format

    // Prepare email data
    const emailData = {
      to_name: `${firstName} ${lastName}`,
      order_number: orderNumber,
      order_date: orderDate,
      total_price: cartSummary.totalPrice,
      items_ordered: itemsOrdered,
      shipping_address: `${formData.address1}, ${formData.address2 || ""}, ${
        formData.city
      }, ${formData.postcode}, ${formData.country}`,
      customer_email: email,
      customer_support_email: "support@example.com", // Replace with your support email
      customer_support_phone: "123-456-7890", // Replace with your support phone
    };

    // Log emailData for debugging
    console.log("Email Data:", emailData);

    try {
      // Send the email
      await sendOrderConfirmationEmail(emailData);

      // Navigate to Order Confirmation Page with all necessary data
      navigate("/confirmOrder", {
        state: { ...formData, cartSummary },
      });

      // Clear form data from localStorage
      localStorage.removeItem("checkoutFormData");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("There was an error sending your order confirmation email.");
    }
  };

  return (
    <div>
    <section
      className="Checkout py-10 bg-richblue-900 text-richblack-50"
      id="Checkout"
    >
      <div className="container mx-auto px-4">
        <div className="section_title text-center mb-10">
          <h1 className="text-3xl lg:text-5xl font-semibold text-blue-600">
            Checkout
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Billing Details */}
          <div className="w-full lg:w-2/3">
            <div className="bg-richblack-700 p-8 rounded-lg shadow-lg">
              <h5 className="text-2xl font-semibold mb-8">Billing Details</h5>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* First Name */}
                <div className="form-group">
                  <label htmlFor="firstName" className="block text-lg mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-control w-full bg-richblack-800 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                {/* Last Name */}
                <div className="form-group">
                  <label htmlFor="lastName" className="block text-lg mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-control w-full bg-richblack-800 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="form-group mt-8">
                <label htmlFor="phone" className="block text-lg mb-2">
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-control w-full bg-richblack-800 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-group mt-8">
                <label htmlFor="email" className="block text-lg mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control w-full bg-richblack-800 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              {/* Country */}
              <div className="form-group mt-8">
                <label htmlFor="country" className="block text-lg mb-2">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="form-control w-full bg-richblack-800 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              {/* Address */}
              <div className="mt-8">
                <label className="block text-lg mb-2">Address</label>
                <div className="form-group">
                  <label htmlFor="address1" className="block text-lg mb-2">
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    id="address1"
                    value={formData.address1}
                    onChange={handleInputChange}
                    className="form-control w-full bg-richblack-800 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address2" className="block text-lg mb-2">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    id="address2"
                    value={formData.address2}
                    onChange={handleInputChange}
                    className="form-control w-full bg-richblack-800 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Postcode */}
              <div className="form-group mt-8">
                <label htmlFor="postcode" className="block text-lg mb-2">
                  Postcode
                </label>
                <input
                  type="text"
                  id="postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  className="form-control w-full bg-richblack-800 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              {/* City */}
              <div className="form-group mt-8">
                <label htmlFor="city" className="block text-lg mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="form-control w-full bg-richblack-800 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              {/* Additional Info */}
              <div className="form-group mt-8">
                <label htmlFor="additionalInfo" className="block text-lg mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="form-control w-full bg-richblack-800 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows="4"
                ></textarea>
              </div>

              {/* Purchase Button */}
              <div className="flex justify-center mt-10">
                <button
                  onClick={handlePurchase}
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-richblack-700 p-8 rounded-lg shadow-lg">
            <h5 className="text-2xl font-semibold mb-8">Order Summary</h5>

            <div className="flex justify-between mb-2">
              <span>Total Price:</span>
              <span>₹{cartSummary.totalPrice}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Total Quantity:</span>
              <span>{cartSummary.totalQuantity}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>VAT (15%):</span>
              <span>₹{cartSummary.vat}</span>
            </div>

            <hr className="mb-4" />

            <div className="flex justify-between font-semibold text-lg">
              <span>Grand Total:</span>
              <span>₹{cartSummary.totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
      <Footer/>
    </div>
    </div>
    
  );
};

export default Checkout;
