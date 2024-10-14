import React, { useEffect, useState } from "react";
import OurStoryImage from "../Asstes/About/3.jpg";
import Banner1 from "../Asstes/About/1.avif";
import Banner2 from "../Asstes/About/2.jpg";
import Banner3 from "../Asstes/About/4.jpeg";
import Footer from "../components/common/Footer";
import '../components/Core/About/about.css';
const About = () => {
    const [storyText, setStoryText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const fullStoryText = "Our journey started with the goal of improving the shopping experience and bringing you products with ease and great support.";
  
    useEffect(() => {
      let index = 0;
      let typingTimeout;
  
      const typeLetter = () => {
        if (index < fullStoryText.length) {
          setStoryText((prev) => prev + fullStoryText.charAt(index));
          index++;
          typingTimeout = setTimeout(typeLetter, 100); // Typing speed (adjust as needed)
        } else {
          setTimeout(() => {
            setIsTyping(false);  // Stop typing when the text is fully displayed
          }, 2000);  // Pause before restarting
        }
      };
  
      if (isTyping) {
        typeLetter();
      } else {
        setTimeout(() => {
          setStoryText("");  // Clear text
          index = 0;  // Reset index
          setIsTyping(true);  // Start typing again
        }, 1000);  // Short delay before restarting typing
      }
  
      return () => clearTimeout(typingTimeout);  // Clean up timeout on unmount
    }, [isTyping, fullStoryText]);
  

    return (
        <div className="text-richblack-5">
            {/* Hero Section */}
            <section className="bg-gray-900 relative overflow-hidden">
                <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center text-center text-white">
                    {/* Hero Header */}
                    <header className="py-20 text-4xl font-semibold lg:w-[70%] tracking-wide z-10 animate-heroTextFadeIn">
                        Redefining Shopping with a Vision for a 
                        <p className="mx-auto mt-3 text-center text-base font-medium text-gray-400 lg:w-[95%] animate-heroTextSlideUp">
                            Our e-commerce platform is built with one goal in mind: to offer 
                            a seamless and delightful shopping experience. We're pushing the boundaries 
                            by combining technology with a user-friendly interface to make your shopping 
                            journey more enjoyable and efficient.
                        </p>
                    </header>
                    
                    {/* Hero Images */}
                    <div className="mt-10 mb-20 grid w-[90%] grid-cols-3 gap-5 z-0 animate-heroImageFadeUp">
                        <img
                            src={Banner1}
                            alt="E-commerce Banner 1"
                            className="rounded-md shadow-lg transition-transform transform hover:scale-110 duration-500"
                        />
                        <img
                            src={Banner2}
                            alt="E-commerce Banner 2"
                            className="rounded-md shadow-lg transition-transform transform hover:scale-110 duration-500"
                        />
                        <img
                            src={Banner3}
                            alt="E-commerce Banner 3"
                            className="rounded-md shadow-lg transition-transform transform hover:scale-110 duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="border-b border-gray-800">
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-gray-400 animate-slideInLeft">
                    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
                        <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                            <h1 className="bg-gradient-to-br from-[#FFA500] to-[#FF4500] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] animate-glow">
                                Our Story
                            </h1>
                            <p className="text-base font-medium lg:w-[95%] typing text-richblack-100">
                                {storyText}
                            </p>
                            <p className="text-base font-medium lg:w-[95%] animate-fadeInDelay">
                                Our mission is to go beyond the transaction, offering a tailored experience
                                to meet the evolving needs of our customers. From everyday essentials to
                                luxury goods, we strive to bring you the best products with just a few clicks.
                            </p>
                        </div>
                        <div className="relative animate-zoomIn ">
                            <img
                                src={OurStoryImage}
                                alt="Our Story"
                                className=" hover:shadow-glow hover:scale-105 transition-all duration-500 h-[500px] w-[550px] m-5 shadow-2xl shadow-richblack-400 rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
  
            {/* Vision and Mission Section */}
            <section>
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-gray-400 animate-slideInRight">
                    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
                        <div className="my-24 flex lg:w-[50%] flex-col gap-10 animate-slideUp">
                            <h1 className="bg-gradient-to-b from-[#32CD32] to-[#00FA9A] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] animate-textGlow">
                                Our Vision
                            </h1>
                            <p className="text-base font-medium lg:w-[95%] animate-fadeIn">
                                Our vision is to create a marketplace that is accessible to everyone, 
                                offering a range of products that cater to diverse needs and preferences. 
                                We believe in creating a platform that not only meets expectations but 
                                exceeds them, by providing top-notch service and cutting-edge technology.
                            </p>
                        </div>
                        <div className="my-24 flex lg:w-[50%] flex-col gap-10 animate-slideUpDelay">
                            <h1 className="bg-gradient-to-b from-[#4169E1] to-[#00BFFF] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] animate-textGlow">
                                Our Mission
                            </h1>
                            <p className="text-base font-medium lg:w-[95%] animate-fadeInDelay">
                                Our mission is to simplify online shopping and build a community of satisfied 
                                customers. From personalized recommendations to hassle-free returns, we aim 
                                to deliver an unparalleled shopping experience where customer satisfaction is 
                                our top priority.
                            </p>
                        </div>
                    </div>
                </div>
            </section>  
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default About;