import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border border-gray-400 text-gray-600 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-gray-900">
        Have a Question? We're Here to Help!
      </h1>
      <p className="">
        Whether it's about our products, services, or a potential partnership, tell us more about what you need.
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
