import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-between items-center p-4">
        <img src="/images/dx_logo.png" alt="DRYVX Logo" className="h-10"/>
        <ul className="flex space-x-6 uppercase text-black font-semibold">
          <li className="hover:text-[#ff5733] cursor-pointer">Home</li>
          <li className="hover:text-[#ff5733] cursor-pointer">Menu</li>
          <li className="hover:text-[#ff5733] cursor-pointer">Subscription</li>
          <li className="hover:text-[#ff5733] cursor-pointer">Location</li>
          <li className="hover:text-[#ff5733] cursor-pointer">Shop</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="text-center max-w-4xl mt-16">
        <h1 className="text-6xl font-bold uppercase text-black">
          Step into the next evolution of <span className="text-[#ff5733]">Racing!</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Where you hold the power. <span className="text-[#ff5733] font-bold">DRYVX</span> isn’t just mini car racing –
          it’s a futuristic showdown of speed, precision, and AI-enhanced strategy. No racing experience? No problem!
          <span className="text-[#ff5733] font-bold"> DRYVX</span> is built for everyone – whether you’re a casual gamer or a speed demon,
          just grab your smartphone and take control.
        </p>
      </div>

      {/* Car Image */}
      <motion.div 
        initial={{opacity: 0,x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{
            // type:"spring",
            // stiffness:100,
            // damping:10,
            // delay:1.2
            type: "tween",  // Use 'tween' for precise duration control
            duration: 3,  // Set duration to 3 seconds
            delay: 1.2  // Keep the delay if needed
        }}>
        <img src="/images/Step_into_the_racing.png" alt="Racing Car" className="w-full max-w-4xl" />
      </motion.div>

      {/* Bottom Decoration */}
      <div className="mt-8 w-2/3 border-t-4 border-orange-500 p-2"></div>
    </div>
  );
};

export default Landing;
