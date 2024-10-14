import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/common/Footer";
import "../index.css"; 

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartSummary, ...billingInfo } = location.state || {};

  // Debugging Logs
  console.log("OrderConfirmation component rendered");
  console.log("location.state:", location.state);
  console.log("cartSummary:", cartSummary);
  console.log("billingInfo:", billingInfo);

  React.useEffect(() => {
    if (!cartSummary || !Array.isArray(cartSummary.items)) {
      console.warn("No cart summary found. Redirecting to home page.");
      navigate("/", { replace: true });
    }
  }, [cartSummary, navigate]);

  if (!cartSummary || !Array.isArray(cartSummary.items)) {
    return (
      <div className="text-center text-red-500">
        No order details found. Please place an order first.
      </div>
    );
  }

  return (
    <section
      className="OrderConfirmation pt-10 bg-richblack-800 text-richblack-50"
      id="OrderConfirmation"
    >
      <div className="container mx-auto px-4 bg-blue-700 rounded-3xl shadow-xl shadow-richblack-900 mb-16">
        {/* Section Title */}
        <div className="section_title text-center mb-10 fade-in ">
          <h1 className="text-3xl lg:text-5xl font-semibold text-blue-300 slide-in-top">
            Order Confirmation
          </h1>
        </div>

        {/* Main Content with Image and Order Details */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Details */}
          <div className="order-details">
            {/* Billing Information */}
            <div className="billing-info mb-6 bg-richblue-300 p-4 rounded">
              <h6 className="text-xl font-semibold mb-4 text-richblack-100">
                Billing Information
              </h6>
              <p>
                <strong>First Name:</strong> {billingInfo.firstName || "N/A"}
              </p>
              <p>
                <strong>Last Name:</strong> {billingInfo.lastName || "N/A"}
              </p>
              <p>
                <strong>Phone:</strong> {billingInfo.phone || "N/A"}
              </p>
              <p>
                <strong>Email:</strong> {billingInfo.email || "N/A"}
              </p>
              <p>
                <strong>Address:</strong> {billingInfo.address1}{" "}
                {billingInfo.address2 && `, ${billingInfo.address2}`}
              </p>
              <p>
                <strong>City:</strong> {billingInfo.city || "N/A"}
              </p>
              <p>
                <strong>Country:</strong> {billingInfo.country || "N/A"}
              </p>
              <p>
                <strong>Postcode:</strong> {billingInfo.postcode || "N/A"}
              </p>
              <p>
                <strong>Additional Info:</strong>{" "}
                {billingInfo.additionalInfo || "N/A"}
              </p>
            </div>

            {/* Order Summary */}
            <div className="order-summary mb-6 bg-richblue-300 shadow-lg shadow-richblue-500 p-4 rounded">
              <h6 className="text-xl font-semibold mb-4">Order Summary</h6>
              <ul className="list-none space-y-4">
                {cartSummary.items.length > 0 ? (
                  cartSummary.items.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>x{item.quantity}</span>
                      <span>₹{item.price}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-red-500">No items found in the cart.</li>
                )}
              </ul>

              {/* VAT and Total */}
              <div className="vat-total flex justify-between mt-4 font-bold">
                <span>VAT (15%)</span>
                <span>₹{cartSummary.vat}</span>
              </div>
              <div className="vat-total flex justify-between mt-4 font-bold">
                <span>Total (including VAT)</span>
                <span>₹{cartSummary.totalPrice}</span>
              </div>
            </div>

            {/* Thank You Message */}
            <div className="thank-you-message text-center">
              <h2 className="text-2xl font-bold text-caribbeangreen-600">
                Your order has been successfully placed!
              </h2>
              <p className="mt-4">
                You will receive an email confirmation shortly.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="image-section flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/7563574/pexels-photo-7563574.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Order Confirmation Illustration"
              className="rounded-lg shadow-lg shadow-white w-full h-[700px] object-cover"
            />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default OrderConfirmation;
