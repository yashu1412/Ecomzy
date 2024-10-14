import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import {
  FaChevronLeft,
  FaChevronRight,
  FaLaptop,
  FaTshirt,
  FaHome,
  FaBasketballBall,
  FaPuzzlePiece,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import "./Slider.css";
import Footer from "../components/common/Footer";
import Banner from "../Asstes/Home/banner.mp4";

// Import images for the image slider
import sliderImage1 from "../Asstes/Home/elect2.avif";
import sliderImage2 from "../Asstes/Home/fash1.avif";
import sliderImage3 from "../Asstes/Home/cric.avif";
import sliderImage4 from "../Asstes/Home/homebg.jpg";
import sliderImage5 from "../Asstes/Home/toysbg.jpg";

// Import images for categories
import electronicsImg from "../Asstes/Home/electronics.jpg";
import fashionImg from "../Asstes/Home/fashion.jpg";
import homeGardenImg from "../Asstes/Home/home.webp";
import sportsImg from "../Asstes/Home/sports.jpg";
import toysImg from "../Asstes/Home/toys.jpg";

// Categories with name, path, and icon
const categories = [
  {
    name: "Electronics",
    path: "/category/electronics",
    icon: <FaLaptop />,
    image: electronicsImg,
  },
  {
    name: "Fashion",
    path: "/category/fashion",
    icon: <FaTshirt />,
    image: fashionImg,
  },
  {
    name: "Home & Garden",
    path: "/category/home-garden",
    icon: <FaHome />,
    image: homeGardenImg,
  },
  {
    name: "Sports",
    path: "/category/sports",
    icon: <FaBasketballBall />,
    image: sportsImg,
  },
  {
    name: "Toys",
    path: "/category/toys",
    icon: <FaPuzzlePiece />,
    image: toysImg,
  },
];

// Images for the slider
const sliderImages = [
  sliderImage1,
  sliderImage2,
  sliderImage3,
  sliderImage4,
  sliderImage5,
];

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [randomProducts, setRandomProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Helper function to get random products
  const getRandomProducts = (products, count) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Fetch product data from API and set random products
  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setRandomProducts(getRandomProducts(data, 4)); // Pick 5 random products
      } catch (error) {
        console.log("Error fetching product data");
        setRandomProducts([]); // Set empty array on error
      }
      setLoading(false);
    };

    fetchProductData();
  }, []);

  // Slider logic to handle next/previous slides
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 6000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="bg-richblue-900 text-richblack-50 h-full">
      {/* Video Section */}
      <div className="flex flex-row justify-center items-center pt-10 space-x-8">
        {/* Text Section */}
        <div className="flex flex-col">
          <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-richblue-600 to-richblue-300">
            Welcome to Our Store
          </h2>
          <div className="text-lg text-gray-200 mb-8 max-w-lg leading-relaxed">
            <p className="text-white">
              Explore top-quality products across categories like electronics,
              fashion, home essentials, and beauty.
            </p>
            <div className="mt-4">
              <TypeAnimation
                sequence={[
                  "Discover amazing deals.",
                  1000,
                  "Fast shipping and secure checkout.",
                  1000,
                  "Shop with confidence.",
                  1000,
                ]}
                cursor={true}
                repeat={Infinity}
                style={{
                  whiteSpace: "pre-line",
                  display: "block",
                  fontSize: "1.25rem",
                  color: "#FBBF24",
                  fontWeight: "600",
                  fontFamily: "'Roboto', sans-serif",
                }}
                omitDeletionAnimation={true}
              />
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="shadow-[10px_-5px_50px_-5px] shadow-blue-200 w-[600px] rounded-3xl">
          <video
            className="h-[400px] w-[600px] object-cover rounded-3xl"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="border-dashed border-b-4 py-5 w-11/12 mx-auto "></div>

      {/* Hero Section with Image Slider */}
      <div className="h-[600px] w-[920px] bg-richblue-600 flex flex-col justify-between items-center mx-auto my-20 rounded-3xl shadow-[10px_-5px_50px_-5px] shadow-blue-200">
        <h2 className="text-3xl font-bold mt-6">Our Featured Categories</h2>
        <p className="text-md text-gray-300 mb-6">
          Scroll through our featured categories to find exactly what you're
          looking for.
        </p>
        <div className="banner relative mt-1 p-1 mb-10">
          <div className="slider relative w-full max-w-[900px] mx-auto overflow-hidden rounded-3xl">
            <div className="slider-image">
              <img
                src={sliderImages[currentSlide]}
                alt={`slide-${currentSlide}`}
                className="w-full h-[500px] object-cover drop-shadow-2xl "
              />
            </div>
          </div>
          <button
            className="absolute top-[50%] left-4 w-10 text-2xl p-2 bg-richblue-300 text-richblack-200 rounded-full shadow-lg hover:bg-gray-800 transform -translate-y-1/2"
            onClick={handlePrevSlide}
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute top-[50%] right-4 w-10 text-2xl p-2 bg-richblue-300 text-richblack-200 rounded-full shadow-lg hover:bg-gray-800 transform -translate-y-1/2"
            onClick={handleNextSlide}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Shop by Category Section */}
      <div className="mt-12 max-w-7xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Shop by Category
        </h2>
        <p className="text-center text-lg text-gray-300 mb-8">
          Browse through our diverse categories and pick the products you love.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link
              to={category.path}
              key={index}
              className="group flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-md shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover h-full w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mt-4">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Product Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-center mb-4">Our Products</h2>
        <p className="text-center text-lg text-gray-300 mb-8">
          Discover the latest products from electronics to fashion.
        </p>
        {loading ? (
          <Spinner />
        ) : randomProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl p-2 mx-auto">
            {randomProducts.map((product) => (
              <Product key={product.id} post={product} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[80vh]">
            <p>No Data Found</p>
          </div>
        )}
        <div className="text-center mt-8">
          <Link
            to="/product"
            className="text-lg font-semibold text-yellow-400 hover:underline space-y-5"
          >
            View All Products
          </Link>
        </div>
      </div>

      {/* Add Footer */}
      <Footer />
    </div>
  );
};

export default Home;
