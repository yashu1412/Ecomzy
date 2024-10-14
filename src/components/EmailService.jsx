// EmailService.js

import emailjs from "@emailjs/browser";

/**
 * Sends an order confirmation email to the customer using EmailJS.
 *
 * @param {Object} emailData - The data required for the email template.
 * @param {string} emailData.to_name - The recipient's full name.
 * @param {string} emailData.order_number - The unique order number.
 * @param {string} emailData.order_date - The date when the order was placed.
 * @param {string} emailData.total_price - The total price of the order.
 * @param {string} emailData.items_ordered - A formatted string listing all ordered items.
 * @param {string} emailData.shipping_address - The full shipping address.
 * @param {string} emailData.customer_email - The customer's email address.
 * @param {string} emailData.customer_support_email - Your customer support email.
 * @param {string} emailData.customer_support_phone - Your customer support phone number.
 *
 * @returns {Promise} - Resolves if the email is sent successfully, rejects otherwise.
 */
export const sendOrderConfirmationEmail = (emailData) => {
  // Define your EmailJS service ID, template ID, and public key
  const SERVICE_ID = "service_1otd0m7"; // Replace with your actual EmailJS service ID
  const TEMPLATE_ID = "template_bin2uvh"; // Replace with your actual EmailJS template ID
  const PUBLIC_KEY = "ehdWvt79pjFBgOj5S"; // Replace with your actual EmailJS public key

  // Validate that all required fields are present
  const requiredFields = [
    "to_name",
    "order_number",
    "order_date",
    "total_price",
    "items_ordered",
    "shipping_address",
    "customer_email",
    "customer_support_email",
    "customer_support_phone",
  ];

  const missingFields = requiredFields.filter(
    (field) => !emailData.hasOwnProperty(field) || !emailData[field]
  );

  if (missingFields.length > 0) {
    console.error(
      `Missing the following fields in emailData: ${missingFields.join(", ")}`
    );
    return Promise.reject(
      new Error(
        `Missing the following fields in emailData: ${missingFields.join(", ")}`
      )
    );
  }

  // Send the email using EmailJS
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, emailData, PUBLIC_KEY).then(
    (response) => {
      console.log("Email sent successfully!", response.status, response.text);
      return response;
    },
    (error) => {
      console.error("Failed to send email:", error);
      throw error;
    }
  );
};
