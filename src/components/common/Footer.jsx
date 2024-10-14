import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const navigate = useNavigate();
  const [ setActiveLink] = useState("/"); // Default active link
  const [ setIsCategoryOpen] = useState(false);
  
  const handleLinkClick = (link) => {
    setActiveLink(link); // Update active link state
    navigate(link); // Navigate to the clicked link
    setIsCategoryOpen(false); // Close the category dropdown on link click
  };

  return (
    <footer className="bg-richblack-900 text-richblack-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <NavLink to="/" onClick={() => handleLinkClick("/")}>
              <div className="mb-4">
                <img src="../logo.png" className="h-14" alt="Logo" />
              </div>
            </NavLink>
            <p className="text-sm text-gray-400">
              We offer a wide variety of products across multiple categories, bringing you high-quality items with exceptional customer service.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/category/electronics" className="text-gray-400 hover:text-white">Electronics</Link>
              </li>
              <li className="mb-2">
                <Link to="/category/fashion" className="text-gray-400 hover:text-white">Fashion</Link>
              </li>
              <li className="mb-2">
                <Link to="/category/home-garden" className="text-gray-400 hover:text-white">Home & Garden</Link>
              </li>
              <li className="mb-2">
                <Link to="/category/sports" className="text-gray-400 hover:text-white">Sports</Link>
              </li>
              <li className="mb-2">
                <Link to="/category/toys" className="text-gray-400 hover:text-white">Toys</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul>
              <li className="mb-2">
                <Link to="/contact" className="text-gray-400 hover:text-white">Help Center</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-gray-400 hover:text-white">Returns & Refunds</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-gray-400 hover:text-white">Shipping Info</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-gray-400 hover:text-white">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup & Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-400 mb-4">
              Sign up for our newsletter to get the latest news and special offers.
            </p>
            <form className="mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full rounded-md bg-gray-700 text-white"
              />
              <button className="mt-2 w-full bg-blue-600 p-2 rounded-md text-white hover:bg-blue-800">
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Payments & Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Accepted Payment Methods */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <FaCcVisa size={36} className="text-gray-400 hover:text-white" />
              <FaCcMastercard size={36} className="text-gray-400 hover:text-white" />
              <FaCcPaypal size={36} className="text-gray-400 hover:text-white" />
            </div>
            {/* Copyright */}
            <div className="text-gray-500 text-center">
              &copy; {new Date().getFullYear()} YourStore. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
