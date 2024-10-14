import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import Footer from "../components/common/Footer";

const ProductsPage = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching product data", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-richblue-900 text-richblack-50 h-full m-auto pt-10">
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl p-2 mx-auto">
            {products.map((product) => (
              <Product key={product.id} post={product} />
            ))}
          </div>
        )}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsPage;
