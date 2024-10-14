import React from "react";

import Footer from "../components/common/Footer";
import CustomerServiceDetails from "../components/Core/Contact/ContactDetails";
import InquiryForm from "../components/Core/Contact/ContactFrom";

const Contact = () => {
  return (
    <div className="text-white">
      {/* Contact Section */}
      <div className="mx-auto py-16 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 lg:flex-row">
        {/* Customer Service Details */}
        <div className="lg:w-[40%]">
          <CustomerServiceDetails />
        </div>

        {/* Inquiry Form */}
        <div className="lg:w-[60%] bg-richblue-700">
          <InquiryForm />
        </div>
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
