
import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom'; 
import productsData from '../Data/ProductsData';
import { useDispatch } from 'react-redux';
import { add } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';
import Footer from '../components/common/Footer';

const ProductDetails = () => {
  const { name } = useParams(); // Get the product name from the URL
  // Find the product by name instead of ID
  const product = productsData.find((item) => item.name.toLowerCase() === name.toLowerCase()); 
  const dispatch = useDispatch();

  // State to handle other category products and the selected category
  const [otherCategoryProducts, setOtherCategoryProducts] = useState([]);
  const [randomCategory, setRandomCategory] = useState("");

  // Function to get products from a random category excluding the current product's category
  const getOtherCategoryProducts = () => {
    const categories = [...new Set(productsData.map(item => item.category))]; // Get all unique categories
    const newCategories = categories.filter(category => category !== product.category); // Exclude current category
    const selectedCategory = newCategories[Math.floor(Math.random() * newCategories.length)]; // Random category
    const productsFromCategory = productsData.filter(item => item.category === selectedCategory).slice(0, 4); // Get 4 products

    setOtherCategoryProducts(productsFromCategory);
    setRandomCategory(selectedCategory);
  };

  // Handle Add to Cart
  const addToCart = (item) => {
    dispatch(add(item));
    toast.success(`${item.name} added to Cart`);
  };

  // Set up interval for changing products every 10 minutes
  useEffect(() => {
    getOtherCategoryProducts(); // Load initial products on mount

    // Set interval for 10 minutes (600000 milliseconds)
    const intervalId = setInterval(() => {
      getOtherCategoryProducts();
    }, 600000); // 10 minutes

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the interval is set only once on mount

  // Redirect if product is not found
  if (!product) {
    return <Navigate to="/404" />; // Redirect to a 404 page if product not found
  }

  // Filter related products by category and limit to 4
  const relatedProducts = productsData
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4); // Show only 4 related products

  return (
    <div className="bg-richblue-900 text-richblack-50 h-full m-auto pt-10">
      <div className="container mx-auto px-4 py-8">
        {/* Product Name as a Link */}
        <h1 className="text-5xl font-extrabold text-center mb-12 text-yellow-400 tracking-wide">
          <Link to={`/products/${product.name.toLowerCase()}`} className="hover:underline">
            {product.name}
          </Link>
        </h1>

        {/* Flex Container for Image and Details */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Product Image */}
          <div className="md:w-1/2 w-full">
            <img 
              src={product.image || 'https://via.placeholder.com/150'} 
              alt={product.name} 
              className="h-96 w-full object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 w-full space-y-6">
            {/* Product Price */}
            <p className="text-yellow-400 text-2xl font-semibold">${product.price}</p>

            {/* Product Description */}
            <p className="text-gray-200 leading-relaxed tracking-wide text-lg">
              {product.description}
            </p>

            {/* Add to Cart Button */}
            <button 
              onClick={() => addToCart(product)} 
              className="inline-block text-gray-900 bg-yellow-400 border-2 w-64 border-yellow-400 rounded-full 
              font-semibold text-[14px] p-3 px-6 uppercase tracking-wider shadow-md
              transition-all duration-300 ease-in-out hover:bg-gray-900 hover:text-yellow-400 hover:border-gray-900"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-6">Products in {product.category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-richblack-700 rounded-lg p-4">
                  {/* Link to the product's detail page */}
                  <Link to={`/products/${relatedProduct.name.toLowerCase()}`}>
                    <img 
                      src={relatedProduct.image || 'https://via.placeholder.com/150'} 
                      alt={relatedProduct.name} 
                      className="h-40 w-full object-cover rounded-lg mb-2"
                    />
                    <h3 className="text-lg font-semibold">{relatedProduct.name}</h3>
                    <p className="text-yellow-300 text-sm">${relatedProduct.price}</p>
                    <p className="text-richblack-50 text-sm mx-auto">{relatedProduct.description}</p>
                  </Link>
                  <button 
                    onClick={() => addToCart(relatedProduct)} 
                    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                    text-[12px] p-1 px-3 bottom-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
                  >
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p>No related products found.</p>
            )}
          </div>
        </div>

        {/* Other Category Products Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-6">Products from {randomCategory}</h2>
          <Link 
            to={`/category/${randomCategory}`} 
            className="text-yellow-400 font-semibold tracking-wide underline transition-all duration-300 ease-in-out 
            hover:text-yellow-500 hover:underline-offset-4 hover:scale-105"
          >
            View All Products in {randomCategory}
          </Link>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {otherCategoryProducts.length > 0 ? (
              otherCategoryProducts.map((otherProduct) => (
                <div key={otherProduct.id} className="bg-richblack-700 rounded-lg p-4">
                  {/* Link to the product's detail page */}
                  <Link to={`/products/${otherProduct.name.toLowerCase()}`}>
                    <img 
                      src={otherProduct.image || 'https://via.placeholder.com/150'} 
                      alt={otherProduct.name} 
                      className="h-40 w-full object-cover rounded-lg mb-2"
                    />
                    <h3 className="text-lg font-semibold">{otherProduct.name}</h3>
                    <p className="text-yellow-300 text-sm">${otherProduct.price}</p>
                  </Link>
                  <button 
                    onClick={() => addToCart(otherProduct)} 
                    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                    text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
                  >
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p>No products found in this category.</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetails;
