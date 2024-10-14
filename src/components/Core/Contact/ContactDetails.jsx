import React from "react";
import * as Icon1 from "react-icons/bi";
import * as Icon2 from "react-icons/io5";
import * as Icon3 from "react-icons/hi2";

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Customer Support",
    description: "Our support team is ready to assist you.",
    details: "support@ecomzy.com",
  },
  {
    icon: "BiWorld",
    heading: "Visit Our Store",
    description: "Drop by our physical store for in-person support.",
    details: "123 Main St, New York, NY 10001",
  },
  {
    icon: "IoCall",
    heading: "Call Us",
    description: "Available 24x7",
    details: "+1 (800) 123-4567",
  },
];

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-gray-100 p-4 lg:p-6 shadow-lg">
      {contactDetails.map((item, index) => {
        // Dynamically get the right icon from the imported icon sets
        let Icon = Icon1[item.icon] || Icon2[item.icon] || Icon3[item.icon];
        
        return (
          <div
            className="flex flex-col gap-2 p-3 text-sm text-gray-700"
            key={index}
          >
            {/* Icon and Heading */}
            <div className="flex flex-row items-center gap-3">
              <Icon size={25} className="text-blue-500" />
              <h1 className="text-lg font-semibold text-gray-900">
                {item.heading}
              </h1>
            </div>

            {/* Description and Details */}
            <p className="font-medium">{item.description}</p>
            <p className="font-semibold">{item.details}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
