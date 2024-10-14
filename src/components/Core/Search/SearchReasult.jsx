

import React, { useMemo, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import productsData from "../../../Data/ProductsData"; // Ensure the path is correct
import { useDispatch } from "react-redux";
import { add } from "../../../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import Footer from "../../common/Footer";
// import Navbar from '../components/Navbar'; // Assuming you want Navbar on this page

const SearchResults = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  // State for related and other category products
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [otherCategoryProducts, setOtherCategoryProducts] = useState([]);
  const [primaryCategory, setPrimaryCategory] = useState("");
  const [randomCategory, setRandomCategory] = useState("");

  // Helper function to get query parameters
  const useQuery = () => {
    return new URLSearchParams(location.search);
  };

  const query = useQuery();
  const searchTerm = query.get("query")?.toLowerCase() || "";

  // Memoize filtered results for performance optimization
  const filteredProducts = useMemo(() => {
    if (!searchTerm) return [];

    return productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
  }, [searchTerm]);

  // Determine primary category based on the first product in search results
  useEffect(() => {
    if (filteredProducts.length > 0) {
      const category = filteredProducts[0].category;
      setPrimaryCategory(category);
    } else {
      setPrimaryCategory("");
    }
  }, [filteredProducts]);

  // Fetch related products from the primary category
  useEffect(() => {
    if (primaryCategory) {
      const related = productsData
        .filter(
          (product) =>
            product.category === primaryCategory &&
            !filteredProducts.some((fp) => fp.id === product.id)
        )
        .slice(0, 4); // Limit to 4 products

      setRelatedProducts(related);
    } else {
      setRelatedProducts([]);
    }
  }, [primaryCategory, filteredProducts]);

  // Fetch other category products
  useEffect(() => {
    const categories = [...new Set(productsData.map((item) => item.category))];
    const availableCategories = categories.filter(
      (category) => category !== primaryCategory
    );

    if (availableCategories.length > 0) {
      const selectedCategory =
        availableCategories[
          Math.floor(Math.random() * availableCategories.length)
        ];
      setRandomCategory(selectedCategory);

      const others = productsData
        .filter(
          (product) =>
            product.category === selectedCategory &&
            !filteredProducts.some((fp) => fp.id === product.id) &&
            !relatedProducts.some((rp) => rp.id === product.id)
        )
        .slice(0, 4); // Limit to 4 products

      setOtherCategoryProducts(others);
    } else {
      setRandomCategory("");
      setOtherCategoryProducts([]);
    }
  }, [primaryCategory, filteredProducts, relatedProducts]);

  // Handle Add to Cart
  const addToCart = (item) => {
    dispatch(add(item));
    toast.success(`${item.name} added to Cart`);
  };

  return (
    <div className="bg-richblue-900 text-richblack-50 min-h-screen flex flex-col">
      {/* Navbar
      <header className="bg-slate-900">
        <Navbar />
      </header> */}

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Search Heading */}
        <h1 className="text-4xl font-extrabold text-center mb-12 text-yellow-400 tracking-wide">
          Search Results for "{searchTerm}"
        </h1>

        {/* Check if search term exists */}
        {searchTerm ? (
          filteredProducts.length > 0 ? (
            <>
              {/* Search Results Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-richblack-700 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow"
                  >
                    {/* Link to the product's detail page */}
                    <Link
                      to={`/products/${product.name.toLowerCase()}`}
                      className="block"
                    >
                      <img
                        src={product.image || "https://via.placeholder.com/150"}
                        alt={product.name}
                        className="h-40 w-full object-cover rounded-lg mb-2 transition-transform duration-300 ease-in-out hover:scale-105"
                      />
                      <h3 className="text-lg font-semibold text-yellow-400">
                        {product.name}
                      </h3>
                      <p className="text-yellow-300 text-sm">
                        ${product.price}
                      </p>
                      <p className="text-richblack-50 text-sm mt-1">
                        {product.description}
                      </p>
                    </Link>
                    {/* Add to Cart Button */}
                    <button
                      onClick={() => addToCart(product)}
                      className="mt-2 w-full text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                      text-[12px] p-2 uppercase hover:bg-gray-700 hover:text-black transition duration-300 ease-in"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>

              {/* Related Products Section */}
              {relatedProducts.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-3xl font-semibold mb-6">
                    Related Products in {primaryCategory}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {relatedProducts.map((product) => (
                      <div
                        key={product.id}
                        className="bg-richblack-700 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow"
                      >
                        {/* Link to the product's detail page */}
                        <Link
                          to={`/products/${product.name.toLowerCase()}`}
                          className="block"
                        >
                          <img
                            src={
                              product.image || "https://via.placeholder.com/150"
                            }
                            alt={product.name}
                            className="h-40 w-full object-cover rounded-lg mb-2 transition-transform duration-300 ease-in-out hover:scale-105"
                          />
                          <h3 className="text-lg font-semibold text-yellow-400">
                            {product.name}
                          </h3>
                          <p className="text-yellow-300 text-sm">
                            ${product.price}
                          </p>
                          <p className="text-richblack-50 text-sm mt-1">
                            {product.description}
                          </p>
                        </Link>
                        {/* Add to Cart Button */}
                        <button
                          onClick={() => addToCart(product)}
                          className="mt-2 w-full text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                          text-[12px] p-2 uppercase hover:bg-gray-700 hover:text-black transition duration-300 ease-in"
                        >
                          Add to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Category Products Section */}
              {otherCategoryProducts.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-3xl font-semibold mb-6">
                    Explore Products in {randomCategory}
                  </h2>
                  <Link
                    to={`/category/${randomCategory
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-yellow-400 font-semibold tracking-wide underline transition-all duration-300 ease-in-out 
                    hover:text-yellow-500 hover:underline-offset-4 hover:scale-105"
                  >
                    View All Products in {randomCategory}
                  </Link>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                    {otherCategoryProducts.map((product) => (
                      <div
                        key={product.id}
                        className="bg-richblack-700 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow"
                      >
                        {/* Link to the product's detail page */}
                        <Link
                          to={`/products/${product.name.toLowerCase()}`}
                          className="block"
                        >
                          <img
                            src={
                              product.image || "https://via.placeholder.com/150"
                            }
                            alt={product.name}
                            className="h-40 w-full object-cover rounded-lg mb-2 transition-transform duration-300 ease-in-out hover:scale-105"
                          />
                          <h3 className="text-lg font-semibold text-yellow-400">
                            {product.name}
                          </h3>
                          <p className="text-yellow-300 text-sm">
                            ${product.price}
                          </p>
                          <p className="text-richblack-50 text-sm mt-1">
                            {product.description}
                          </p>
                        </Link>
                        {/* Add to Cart Button */}
                        <button
                          onClick={() => addToCart(product)}
                          className="mt-2 w-full text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                          text-[12px] p-2 uppercase hover:bg-gray-700 hover:text-black transition duration-300 ease-in"
                        >
                          Add to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-gray-500">
             Product not available.
            </p>
          )
        ) : (
          <p className="text-center text-gray-500">
            Product not available.
          </p>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SearchResults;
